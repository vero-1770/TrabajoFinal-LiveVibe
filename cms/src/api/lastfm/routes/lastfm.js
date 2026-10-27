module.exports = {
  routes: [
    {
      method: "GET",
      path: "/lastfm/top-tracks",
      handler: "lastfm.getTopTracks",
      config: {
        auth: false,
      },
    },
  ],
};
