"use strict";

/**
 * Controlador para consumir la API de Last.fm
 */
module.exports = {
  async getTopTracks(ctx) {
    try {
      const apiKey = process.env.LASTFM_API_KEY;
      // Solicitamos el top global limitado a 100 resultados en formato JSON
      const url = `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${apiKey}&format=json&limit=100`;

      const response = await fetch(url);
      if (!response.ok) throw new Error("Fallo al conectar con Last.fm");

      const data = await response.json();

      // Filtramos la respuesta para enviar solo las propiedades estrictamente necesarias
      const tracks = data.tracks.track.map((track, index) => ({
        rank: index + 1,
        title: track.name,
        artist: track.artist.name,
        url: track.url,
        // Last.fm devuelve un array de imágenes; seleccionamos la versión 'extralarge' (índice 3)
        cover: track.image[3]["#text"] || "https://via.placeholder.com/150",
      }));

      ctx.body = tracks;
    } catch (err) {
      ctx.throw(500, "Error al procesar el ranking de Last.fm", {
        details: err.message,
      });
    }
  },
};
