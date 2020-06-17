const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const webpack = require('webpack');

module.exports = {
  // entry: "./src/index.js",
  
  entry: {
    app: './src/index.js',
    // print: './src/print.js'
  },
  output: {
    // filename: "bundle.js",
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, "dist"),
    publicPath: '/'
  },
  
  mode: "production",
  // 用于开发模式追踪错误源， 正式环境切勿开启
  // devtool: 'inline-source-map',
  // 配合webpack-dev-server(监听改动自动刷新)使用，开发服务器(dev server)，在哪里查找文件
  devServer: {
    contentBase: './dist',
    // hot配置为热更新，而非整体页面刷新
    // hot: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "HTML webpack 插件"
    }),
    // 热更新引入webpack,(生成环境切勿开启，增加包大小)
    // new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  }
}