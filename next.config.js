module.exports = {
  target: 'serverless',
  async rewrites() {
    return [
      // Rewrite everything else to `pages/index`
      {
        source: '/:any*',
        destination: '/'
      }
    ];
  }
};
