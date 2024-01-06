module.exports = {
  transpileDependencies: ["vuex-module-decorators"],
  devServer: {
    proxy: {
      "query/api/": {
        target: "http://localhost:5021",
        ws: true,
      },
      "command/api/": {
        target: "http://localhost:5020",
        ws: true,
      },
    },
  },
};
