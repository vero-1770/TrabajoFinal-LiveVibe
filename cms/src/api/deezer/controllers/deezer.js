const DEEZER = 'https://api.deezer.com';

module.exports = {
  async artista(ctx) {
    const { nombre } = ctx.query;

    if (!nombre) {
      return ctx.badRequest('Falta el parámetro nombre');
    }

    try {
      // Paso 1: buscar el artista por nombre
      const busqueda = await fetch(
        `${DEEZER}/search/artist?q=${encodeURIComponent(nombre)}&limit=1`
      );
      const { data } = await busqueda.json();

      if (!data || data.length === 0) {
        return ctx.notFound('Artista no encontrado en Deezer');
      }
      const artista = data[0];

      // Paso 2: pedir sus canciones más escuchadas con el id obtenido
      const topRes = await fetch(`${DEEZER}/artist/${artista.id}/top?limit=5`);
      const top = await topRes.json();

      // Paso 3: devolver solo lo que necesita el frontend
      ctx.body = {
        id: artista.id,
        nombre: artista.name,
        imagen: artista.picture_xl,
        fans: artista.nb_fan,
        link: artista.link,
        canciones: (top.data || []).map((c) => ({
          id: c.id,
          titulo: c.title,
          preview: c.preview,
          portada: c.album.cover_medium,
        })),
      };
    } catch (err) {
      strapi.log.error('Error consultando Deezer', err);
      ctx.status = 502;
      ctx.body = { error: 'No se pudo consultar Deezer' };
    }
  },
};