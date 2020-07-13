/**
 * 开发环境配置
 */

const webpackConfigCreator = require('./webpack.common');
const merge = require('webpack-merge');
const path = require("path");

const config = {};

const options = {
  mode: 'development',
  output: {
    filename: "js/[name][hash].js",
  },
  devtool: "inline-source-map",
  entry: ['react-hot-loader/patch', './src/index.js'],
  devServer: {
    contentBase: path.join(__dirname, "../dist"),
    hot: true,
    proxy: {
      "/api": {
        target: "http://8.129.172.31",
        bypass: (req, res) => {
          console.log("代理执行............");
          console.log(req);
        }
      }
    }
  },
};

module.exports = merge(webpackConfigCreator(options), config);
