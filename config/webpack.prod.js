/**
 * 生成环境配置
 */

const webpackConfigCreator = require('./webpack.common');
const merge = require('webpack-merge');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const config = {};

const options = {
  mode: 'production',
  output: {
    filename: "js/[name][chunkhash].js",
  },
  devtool: "source-map",
  plugins: [
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.optimize\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
      canPrint: true
    })
  ]
};

module.exports = merge(webpackConfigCreator(options), config);
