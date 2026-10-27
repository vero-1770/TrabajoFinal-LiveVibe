import { useState, useEffect } from "react";

export interface Track {
  rank: number;
  title: string;
  artist: string;
  url: string;
  cover: string;
}

export function useLastfm() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await fetch(
          "http://localhost:1337/api/lastfm/top-tracks",
        );
        if (!response.ok) throw new Error("Error al obtener el ranking");

        const data = await response.json();
        setTracks(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error de conexión");
      } finally {
        setLoading(false);
      }
    };

    fetchTracks();
  }, []);

  return { tracks, loading, error };
}
