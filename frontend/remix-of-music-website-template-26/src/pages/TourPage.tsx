import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import { obtenerPaises, normalizar } from "@/lib/paises";

const TourPage = () => {
  const [eventos, setEventos] = useState([]);
  const [paises, setPaises] = useState([]);
  const [textoPais, setTextoPais] = useState("");
  const [paisSeleccionado, setPaisSeleccionado] = useState(null);
  const [sugerenciasAbiertas, setSugerenciasAbiertas] = useState(false);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("http://localhost:1337/api/eventos")
      .then((res) => res.json())
      .then((data) => {
        setEventos(data.data || []);
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error al cargar la cartelera desde Strapi:", error);
        setCargando(false);
      });
  }, []);

  useEffect(() => {
    let activo = true;

    obtenerPaises()
      .then((lista) => {
        if (activo) setPaises(lista);
      })
      .catch((error) => {
        console.error("Error al cargar los países:", error);
      });

    return () => {
      activo = false;
    };
  }, []);

  const consulta = normalizar(textoPais);

  const sugerencias = useMemo(() => {
    if (!consulta) return [];

    return paises
      .map((pais) => {
        const indice = pais.nombres.reduce((mejor, nombre) => {
          const actual = nombre.indexOf(consulta);
          if (actual < 0) return mejor;
          if (mejor < 0) return actual;
          return Math.min(mejor, actual);
        }, -1);
        return { pais, indice };
      })
      .filter((item) => item.indice >= 0)
      .sort((a, b) => {
        if (a.indice !== b.indice) return a.indice - b.indice;
        if (a.pais.nombre.length !== b.pais.nombre.length) {
          return a.pais.nombre.length - b.pais.nombre.length;
        }
        return a.pais.nombre.localeCompare(b.pais.nombre, "es");
      })
      .slice(0, 5)
      .map((item) => item.pais);
  }, [consulta, paises]);

  const paisExacto = consulta
    ? paises.find((pais) => pais.nombres.some((nombre) => nombre === consulta))
    : null;
  const paisActivo =
    paises.find((pais) => pais.codigo === paisSeleccionado) || paisExacto || null;

  const elegirPais = (pais) => {
    setTextoPais(pais.nombre);
    setPaisSeleccionado(pais.codigo);
    setSugerenciasAbiertas(false);
  };

  const eventosVisibles = !paisActivo
    ? eventos
    : eventos.filter((evento) => {
        const info = evento.attributes || evento;
        const lugar = normalizar(info.lugar);
        return paisActivo.nombres.some((nombre) => lugar.includes(nombre));
      });

  return (
    <div className="min-h-screen bg-background pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-foreground mb-12"
        >
          Eventos
        </motion.h1>

        <div className="mb-8 flex flex-col sm:flex-row sm:items-start gap-3">
          <p className="label-uppercase shrink-0 sm:mt-3">País</p>
          <div className="relative w-full sm:w-72">
            <Input
              value={textoPais}
              onChange={(event) => {
                setTextoPais(event.target.value);
                setPaisSeleccionado(null);
                setSugerenciasAbiertas(true);
              }}
              onFocus={() => setSugerenciasAbiertas(true)}
              onBlur={() => setSugerenciasAbiertas(false)}
              placeholder="Escribí un país"
              className="glass-card h-11 border-neutral-800 bg-transparent text-foreground placeholder:text-foreground/40 focus-visible:ring-1 focus-visible:ring-foreground/30 focus-visible:ring-offset-0"
            />
            {sugerenciasAbiertas && consulta && (
              <ul className="absolute z-20 mt-2 w-full glass-card overflow-hidden border border-neutral-800 rounded-lg">
                {sugerencias.length === 0 ? (
                  <li className="px-3 py-2 text-sm text-foreground/50">
                    Sin coincidencias
                  </li>
                ) : (
                  sugerencias.map((pais) => (
                    <li key={pais.codigo}>
                      <button
                        type="button"
                        onMouseDown={(event) => event.preventDefault()}
                        onClick={() => elegirPais(pais)}
                        className="w-full px-3 py-2 text-left text-sm text-foreground hover:bg-[hsl(var(--glass-hover))]"
                      >
                        {pais.nombre}
                      </button>
                    </li>
                  ))
                )}
              </ul>
            )}
          </div>
        </div>

        {cargando ? (
          <div className="text-center text-foreground/60 py-10">
            Cargando cartelera desde el CMS...
          </div>
        ) : eventosVisibles.length === 0 && paisActivo ? (
          <div className="text-center text-foreground/60 py-10">
            No hay eventos en este país.
          </div>
        ) : (
          <div className="space-y-4">
            {eventosVisibles.map((evento, index) => {
              const info = evento.attributes || evento;

              const fechaObj = new Date(info.fechaHora || info.fecha);
              const day = fechaObj.getDate();
              const month = fechaObj.toLocaleString("es-AR", {
                month: "short",
              });

              return (
                <motion.div
                  key={evento.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={`/evento/${evento.id}`}
                    className="glass-card p-6 flex flex-col md:flex-row md:items-center md:justify-between hover:bg-[hsl(var(--glass-hover))] transition-colors group block border border-neutral-800 rounded-lg"
                  >
                    <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8 text-center min-w-[60px]">
                      <p className="text-3xl font-bold text-foreground">
                        {day}
                      </p>
                      <p className="text-foreground/60 text-sm uppercase tracking-wide">
                        {month}
                      </p>
                    </div>

                    <div className="flex-grow">
                      <p className="text-foreground/60 text-sm uppercase tracking-widest mb-1">
                        📍 {info.lugar}
                      </p>
                      <p className="text-xl font-semibold text-foreground mb-1">
                        {info.titulo}
                      </p>
                      <p className="text-foreground/80 text-sm truncate max-w-md">
                        {info.descripcion}
                      </p>
                    </div>

                    <div className="flex-shrink-0 mt-4 md:mt-0 flex flex-col items-end">
                      <span className="text-green-400 font-bold mb-2">
                        {info.precio || "Consultar"}
                      </span>

                      {info.capacidadMaxima > 0 ? (
                        <span className="status-available inline-flex items-center gap-2 text-sm bg-green-500/10 text-green-500 px-3 py-1 rounded-full">
                          Reservar <ExternalLink className="w-4 h-4" />
                        </span>
                      ) : (
                        <span className="status-sold-out text-sm bg-red-500/10 text-red-500 px-3 py-1 rounded-full">
                          Agotado
                        </span>
                      )}
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default TourPage;
