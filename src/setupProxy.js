const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://121.196.182.241:9876",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
