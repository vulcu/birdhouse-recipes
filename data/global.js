module.exports = {
  siteName: 'Birdhouse Recipes',
  baseUrl:
    process.env.ELEVENTY_RUN_MODE === 'build'
      ? 'https://vulcu.github.io' // do not include path
      : 'http://localhost:8080', // serve, watch
  versionNumber() {
    const segment = () =>
      (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);

    return `${segment()}-${segment()}-${segment()}`;
  },
};
