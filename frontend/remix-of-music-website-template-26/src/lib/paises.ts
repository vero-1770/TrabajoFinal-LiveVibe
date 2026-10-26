const REST_COUNTRIES_URL = "http://localhost:8080/restcountries/countries/v5";
const CACHE_KEY = "livevibe:paises";

export type Pais = {
  codigo: string;
  nombre: string;
  nombres: string[];
};

let paisesEnMemoria: Pais[] | null = null;
let paisesPendiente: Promise<Pais[]> | null = null;

const normalizar = (texto: string) =>
  String(texto || "")
    .toLocaleLowerCase("es")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

const leerCacheLocal = (): Pais[] | null => {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const lista = JSON.parse(raw);
    return Array.isArray(lista) && lista.length > 0 ? lista : null;
  } catch {
    return null;
  }
};

const guardarCacheLocal = (lista: Pais[]) => {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(lista));
  } catch {
    // Si el storage está lleno o bloqueado, seguimos con la memoria.
  }
};

const mapearPaises = (objects: any[]): Pais[] =>
  objects
    .map((pais) => {
      const nombre =
        pais?.names?.translations?.spa?.common || pais?.names?.common;
      const nombreEn = pais?.names?.common;
      return {
        codigo: pais?.codes?.alpha_2 || nombre,
        nombre,
        nombres: [nombre, nombreEn]
          .map(normalizar)
          .filter(
            (valor, indice, todos) => valor && todos.indexOf(valor) === indice,
          ),
      };
    })
    .filter((pais) => pais.nombre)
    .sort((a, b) => a.nombre.localeCompare(b.nombre, "es"));

const pedirPaisesALaApi = async (): Promise<Pais[]> => {
  const campos = "names.common,names.translations.spa.common,codes.alpha_2";
  const acumulados: any[] = [];
  let offset = 0;
  let hayMas = true;

  while (hayMas) {
    const res = await fetch(
      `${REST_COUNTRIES_URL}?limit=100&offset=${offset}&response_fields=${campos}`,
    );
    if (!res.ok) break;

    const json = await res.json();
    const objects = json?.data?.objects || [];
    acumulados.push(...objects);
    hayMas = Boolean(json?.data?.meta?.more);
    offset += 100;
    if (objects.length === 0) break;
  }

  return mapearPaises(acumulados);
};

export const obtenerPaises = (): Promise<Pais[]> => {
  if (paisesEnMemoria) return Promise.resolve(paisesEnMemoria);

  const cacheLocal = leerCacheLocal();
  if (cacheLocal) {
    paisesEnMemoria = cacheLocal;
    return Promise.resolve(cacheLocal);
  }

  if (paisesPendiente) return paisesPendiente;

  paisesPendiente = pedirPaisesALaApi()
    .then((lista) => {
      if (lista.length > 0) {
        paisesEnMemoria = lista;
        guardarCacheLocal(lista);
      }
      return lista;
    })
    .catch((error) => {
      paisesPendiente = null;
      throw error;
    });

  return paisesPendiente;
};

export { normalizar };
