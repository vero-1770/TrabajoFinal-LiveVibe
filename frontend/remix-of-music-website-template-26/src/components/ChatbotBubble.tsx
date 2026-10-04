import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ChatbotBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [historial, setHistorial] = useState([
    {
      autor: "bot",
      texto:
        "¡Hola! Soy tu asistente de LiveVibe. ¿Buscás info sobre algún recital o querés que te recomiende música?",
    },
  ]);

  const enviarMensaje = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mensaje.trim()) return;

    const nuevosMensajes = [...historial, { autor: "user", texto: mensaje }];
    setHistorial(nuevosMensajes);
    setMensaje("");

    setTimeout(() => {
      setHistorial((prev) => [
        ...prev,
        {
          autor: "bot",
          texto:
            "Por ahora estoy en versión demo, pero pronto podré ayudarte a reservar tus entradas y darte recomendaciones personalizadas. 🎸",
        },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-20 right-0 w-80 bg-neutral-900 border border-neutral-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            style={{ height: "400px" }}
          >
            {/* Cabecera del Chat */}
            <div className="bg-purple-600 p-4 text-white flex justify-between items-center shadow-md">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🤖</span>
                <h3 className="font-bold">Asistente LiveVibe</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-300 font-bold"
              >
                ✕
              </button>
            </div>

            {/* Historial de Mensajes */}
            <div className="flex-1 p-4 overflow-y-auto bg-neutral-900 space-y-4">
              {historial.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.autor === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`p-3 rounded-lg max-w-[80%] text-sm ${
                      msg.autor === "user"
                        ? "bg-purple-600 text-white rounded-br-none"
                        : "bg-neutral-800 text-gray-200 border border-neutral-700 rounded-bl-none"
                    }`}
                  >
                    {msg.texto}
                  </div>
                </div>
              ))}
            </div>

            {/* Input para enviar mensajes */}
            <form
              onSubmit={enviarMensaje}
              className="p-3 bg-neutral-800 border-t border-neutral-700 flex gap-2"
            >
              <input
                type="text"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                placeholder="Escribe tu consulta..."
                className="flex-1 bg-neutral-900 text-white px-3 py-2 rounded-full border border-neutral-700 focus:outline-none focus:border-purple-500 text-sm"
              />
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-500 text-white p-2 rounded-full transition-colors flex items-center justify-center w-10 h-10"
              >
                ➤
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón flotante para abrir/cerrar */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-purple-600 hover:bg-purple-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform transform hover:scale-105 border border-purple-400"
      >
        <span className="text-2xl">{isOpen ? "✕" : "💬"}</span>
      </button>
    </div>
  );
};

export default ChatbotBubble;
