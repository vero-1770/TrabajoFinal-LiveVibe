import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:1337";

interface Cancion {
  id: number;
  titulo: string;
  preview: string;
  portada: string;
}

interface ArtistaDeezer {
  id: number;
  nombre: string;
  imagen: string;
  fans: number;
  link: string;
  canciones: Cancion[];
}

interface Props {
  nombre: string;
}

const DeezerArtist = ({ nombre }: Props) => {
  const [artista, setArtista] = useState<ArtistaDeezer | null>(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    setCargando(true);
    setError(null);

    fetch(`${API_URL}/api/deezer/artista?nombre=${encodeURIComponent(nombre)}`, {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            res.status === 404
              ? "No encontramos a este artista en Deezer"
              : "No se pudo cargar la información de Deezer"
          );
        }
        return res.json();
      })
      .then((datos: ArtistaDeezer) => setArtista(datos))
      .catch((err) => {
        if (err.name !== "AbortError") setError(err.message);
      })
      .finally(() => {
        if (!controller.signal.aborted) setCargando(false);
      });

    return () => controller.abort();
  }, [nombre]);

  if (cargando) return <p>Cargando datos de Deezer...</p>;
  if (error) return <p>{error}</p>;
  if (!artista) return null;

  return (
    <section className="rounded-xl border p-4">
      <div className="flex items-center gap-4">
        <img
          src={artista.imagen}
          alt={artista.nombre}
          className="h-24 w-24 rounded-full object-cover"
        />
        <div>
          <h3 className="text-xl font-bold">{artista.nombre}</h3>
          <p className="text-sm opacity-80">
            {artista.fans.toLocaleString("es-AR")} fans en Deezer
          </p>
          <a href={artista.link} target="_blank" rel="noreferrer" className="text-sm underline">
            Ver en Deezer
          </a>
        </div>
      </div>

      <h4 className="mt-4 font-semibold">Canciones más escuchadas</h4>
      <ul className="mt-2 space-y-3">
        {artista.canciones.map((c) => (
          <li key={c.id} className="flex items-center gap-3">
            <img src={c.portada} alt={c.titulo} className="h-12 w-12 rounded" />
            <div className="flex-1">
              <p className="text-sm">{c.titulo}</p>
              <audio controls src={c.preview} className="mt-1 h-8 w-full" />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DeezerArtist;