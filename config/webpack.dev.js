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
  }
};

module.exports = merge(webpackConfigCreator(options), config);
