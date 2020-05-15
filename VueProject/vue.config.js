let publicPath = process.env.NODE_ENV === 'production' ? 'sing-app-vue-dashboard/' : '/';
const mockIndexData = require("./src/assets/mock/mock.json");
const webpack = require('webpack');
module.exports = {
  publicPath,
  productionSourceMap: false,
  devServer: {
    port:3000,
    before(app) {
      app.get("/api/index", (req, res) => {
        res.json(mockIndexData);
      });
    }

  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'windows.jQuery': 'jquery',
      }),
    ],
  },
};
