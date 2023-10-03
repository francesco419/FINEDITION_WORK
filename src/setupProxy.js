const { createProxyMiddleware } = require('http-proxy-middleware');

/* module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: `${process.env.REACT_APP_PROXY}`,
      changeOrigin: true
    })
  );
};
 */
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: `http://localhost:8080`,
      changeOrigin: true
    })
  );
};
