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
      target: `https://port-0-fine-back-euegqv2bln4k549r.sel5.cloudtype.app`,
      changeOrigin: true
    })
  );
};
