module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/deezer/artista',
      handler: 'deezer.artista',
      config: {
        auth: false,
      },
    },
  ],
};