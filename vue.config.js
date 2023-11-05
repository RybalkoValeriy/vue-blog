module.exports = {
  transpileDependencies: ["vuex-module-decorators"],
  devServer: {
    proxy: {
      "api/": {
        target: "http://localhost:5021",
        ws: true,
      },
    },
  },
};
