/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  async rewrites() {
    return [
      // Rewrite everything else to use `pages/index`
      {
        source: '/:path*',
        destination: '/'
      }
    ];
  }
};
