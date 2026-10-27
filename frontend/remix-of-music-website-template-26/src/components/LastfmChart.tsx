import { useState } from "react";
import { useLastfm } from "../hooks/useLastfm";

export function LastfmChart() {
  const { tracks, loading, error } = useLastfm();

  // Estado para controlar la página actual
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;

  if (loading)
    return <p className="text-center p-4 text-zinc-400">Cargando ranking...</p>;
  if (error) return <p className="text-center text-red-500 p-4">{error}</p>;

  // Cálculos de paginación
  const totalPages = Math.ceil(tracks.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentTracks = tracks.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Manejadores de navegación
  const handlePrevPage = () => setCurrentPage((prev) => Math.max(1, prev - 1));
  const handleNextPage = () =>
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <ul className="space-y-4">
        {currentTracks.map((track) => (
          <li
            key={track.rank}
            className="flex items-center gap-4 p-4 bg-zinc-900 rounded-lg border border-zinc-800 hover:bg-zinc-800 transition-colors"
          >
            <span className="text-xl font-bold text-zinc-500 w-8 text-center">
              {track.rank}
            </span>
            <img
              src={track.cover}
              alt={track.title}
              className="w-16 h-16 object-cover rounded-md shadow-md"
            />
            <div className="flex-1">
              <a
                href={track.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white hover:underline"
              >
                {track.title}
              </a>
              <p className="text-zinc-400 text-sm">{track.artist}</p>
            </div>
          </li>
        ))}
      </ul>

      {/* Controles de Paginación */}
      <div className="flex justify-between items-center mt-8 px-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-zinc-800 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-zinc-700 transition-colors"
        >
          Anterior
        </button>

        <span className="text-zinc-400 font-medium">
          Página {currentPage} de {totalPages}
        </span>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-zinc-800 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-zinc-700 transition-colors"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
