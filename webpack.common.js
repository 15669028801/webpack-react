const path = require("path");
const { ProvidePlugin } = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlwebpackPlugin= require("html-webpack-plugin");

console.log('基础请求地址: ', process.env.BASE_URL)

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "[name].[chunkhash].js",
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, "dist"),
  },
  // externals: {
  //   lodash: {
  //     commonjs: 'lodash',
  //     commonjs2: 'lodash',
  //     amd: 'lodash',
  //     root: '_'
  //   }
  // },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlwebpackPlugin({title: "模板标题"}),
    // CommonsChunkPlugin已经被删除
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'common' // 指定公共 bundle 的名称。
    // })
    // 将第三方库扩展为全局变量
    new ProvidePlugin({
      _: "lodash",
      // 暴露某个模块中单个导出值，只需通过一个“数组路径”进行配置（例如 [module, child, ...children?]）
      // 非暴露在window对象中，而是无需声明即可引用
      join: ['lodash', 'join']
    })
  ],
  optimization: {
    // 拆分依赖，共三种模板，其中all包含同步异步, 'initial'为初始化， 'asycn'为异步加载
    splitChunks: {
      chunks: "all",
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        // 尽可能缩小范围，以提高解析速度
        include: path.resolve(__dirname, "src"),
      },
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
      },
      // {
      //   test: require.resolve('./src/index.js'),
      //   use: 'imports-loader?this=>window'
      // },
      // {
      //   test: require.resolve('./src/globals.js'),
      //   use: 'exports-loader?file,parse=helpers.parse'
      // },
    ]
  },
}

