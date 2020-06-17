const merge = require("webpack-merge");
const common = require("./webpack.common");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require("webpack");

module.exports = merge(common, {
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    // new UglifyJSPlugin({
    //   sourceMap: true
    // }),
    // 可通过命令参数实现以下功能 --define process.env.NODE_ENV="'production'"
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
})