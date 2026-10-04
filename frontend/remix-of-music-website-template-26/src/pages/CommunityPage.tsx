import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CommunityPage = () => {
  const [publicaciones, setPublicaciones] = useState<any[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("http://localhost:1337/api/publicaciones")
      .then((res) => res.json())
      .then((data) => {
        setPublicaciones(data.data || []);
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error al cargar el feed:", error);
        setCargando(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-background pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-foreground mb-8"
        >
          Comunidad LiveVibe
        </motion.h1>

        {/* Banner CTA */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-6 mb-10 shadow-lg flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h4 className="text-xl font-bold text-white mb-1">
              ¡Únete a la conversación! 🤘
            </h4>
            <p className="text-purple-100 text-sm">
              Crea tu cuenta para publicar y conectar con otros fans.
            </p>
          </div>
          <button className="bg-white text-purple-700 font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition shadow-md">
            Crear cuenta
          </button>
        </div>

        {/* Feed Principal */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold border-b border-neutral-800 pb-2 text-foreground">
            🗣️ Muro de Fans
          </h3>

          {cargando ? (
            <div className="text-center text-foreground/60 py-10 animate-pulse">
              Cargando mensajes...
            </div>
          ) : publicaciones.length === 0 ? (
            <div className="text-center text-foreground/60 py-10 bg-neutral-900/50 rounded-lg border border-neutral-800">
              No hay publicaciones todavía. ¡Sé el primero en comentar!
            </div>
          ) : (
            publicaciones.map((pub, index) => {
              const post = pub.attributes || pub;

              return (
                <motion.article
                  key={pub.documentId || pub.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 rounded-xl border border-neutral-800"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full mr-4 flex items-center justify-center text-black font-bold text-lg">
                      {post.autor ? post.autor.charAt(0).toUpperCase() : "U"}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg">
                        {post.autor || "Usuario Anónimo"}
                      </h4>
                      {post.cancionFavorita && (
                        <p className="text-xs text-green-400 font-medium">
                          🎵 Favorita: {post.cancionFavorita}
                        </p>
                      )}
                    </div>
                  </div>

                  <p className="text-foreground/80 mb-4 text-base leading-relaxed">
                    {post.contenido}
                  </p>

                  <div className="flex gap-4 text-sm text-foreground/60 pt-4 border-t border-neutral-800">
                    <button className="hover:text-green-400 transition flex items-center gap-1">
                      ❤️ {post.likes || 0} Me gusta
                    </button>
                  </div>
                </motion.article>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
