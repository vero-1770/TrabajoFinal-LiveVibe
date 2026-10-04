import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, ArrowLeft } from "lucide-react";

const TourDetailPage = () => {
  const { id } = useParams();
  const [evento, setEvento] = useState<any>(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:1337/api/eventos/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // Strapi v4/v5 devuelve un solo objeto en data.data
        setEvento(data.data);
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error al cargar el detalle del evento:", error);
        setCargando(false);
      });
  }, [id]);

  if (cargando) {
    return (
      <div className="min-h-screen bg-background pt-24 flex justify-center text-foreground/60">
        Cargando detalles del concierto...
      </div>
    );
  }

  if (!evento) {
    return (
      <div className="min-h-screen bg-background pt-24 flex flex-col items-center text-foreground">
        <h2 className="text-2xl font-bold mb-4">Evento no encontrado</h2>
        <Link to="/tour" className="text-purple-500 hover:underline">
          Volver a la cartelera
        </Link>
      </div>
    );
  }

  // Ajuste según la estructura de tu versión de Strapi
  const info = evento.attributes || evento;
  const fechaObj = new Date(info.fechaHora || info.fecha);

  return (
    <div className="min-h-screen bg-background pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/tour"
          className="inline-flex items-center text-foreground/60 hover:text-purple-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver a Eventos
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 md:p-12 rounded-2xl border border-neutral-800"
        >
          <span className="text-purple-500 font-semibold tracking-wider uppercase text-sm mb-4 block">
            {info.precio || "Entrada General"}
          </span>

          <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight">
            {info.titulo}
          </h1>

          <div className="flex flex-wrap gap-6 mb-8 text-foreground/80">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-purple-400" />
              <span>
                {fechaObj.toLocaleDateString("es-AR", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-purple-400" />
              <span>{info.lugar}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-purple-400" />
              <span>Capacidad: {info.capacidadMaxima || info.capacidad}</span>
            </div>
          </div>

          <div className="prose prose-invert max-w-none mb-10 text-foreground/70">
            <p className="text-lg leading-relaxed">
              {info.descripcion ||
                "Acompañanos en una noche inolvidable a puro ritmo. Las puertas se abrirán dos horas antes del inicio del show."}
            </p>
          </div>

          <button className="w-full md:w-auto bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 px-10 rounded-full transition-transform transform hover:scale-105">
            Reservar Entrada
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default TourDetailPage;
