import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const TourPage = () => {
  const [eventos, setEventos] = useState([]);
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

        {cargando ? (
          <div className="text-center text-foreground/60 py-10">
            Cargando cartelera desde el CMS...
          </div>
        ) : (
          <div className="space-y-4">
            {eventos.map((evento, index) => {
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
                    to={`/tour/${evento.id}`}
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
