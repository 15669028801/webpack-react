const merge = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');

module.exports = merge(common, {
  entry: {
    another: './src/another-module.js'
  },
  plugins: [
    new webpack.NamedModulesPlugin()
  ],
  // 用于开发模式追踪错误源， 正式环境切勿开启
  devtool: "inline-source-map",
  // 配合webpack-dev-server(监听改动自动刷新)使用，开发服务器(dev server)，在哪里查找文件
  devServer: {
    contentBase: './dist',
  },
  optimization: {
    splitChunks: {
      chunks: "initial",
    }
  }
})