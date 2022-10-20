const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware('/api',{
      target: 'http://15.165.205.17:8080',
      changeOrigin: true,
    })
  );
};