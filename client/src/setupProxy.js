const proxy = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    proxy("/api/customers", {
      target: "http://localhost:5000/",
      changeOrigin: true,
    })
  );
};
