/**
 * 通用配置
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

function webpackCommonConfigCreator(options) {
  /**
   * options:
   * mode // 开发模式
   */
  return {
    mode: options.mode,
    devtool: options.devtool || null,
    entry: options.entry || './src/index.js',
    output: {
      publicPath: "/",
      path: path.resolve(__dirname, '../build'),
    },
    plugins: [
      // html模板，自动插入打包好的js，css等
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../public/index.html'),
      }),
      // 清楚webpack之前编译好的文件  （build或者dist目录下文件）
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: [path.resolve(process.cwd(), 'build/'), path.resolve(process.cwd(), 'dist/')],
      }),
      // 将css资源进行分离
      new ExtractTextPlugin({
        filename: 'css/[name][hash].css',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          include: path.resolve(__dirname, '../src'),
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-react'],
              },
            },
          ],
        },
        {
          test: /\.(css|scss)$/,
          include: path.resolve(__dirname, '../src'),
          // use: ["style-loader", "css-loader", "sass-loader"]
          // use: [
          //   'style-loader',
          //   {
          //     loader: 'css-loader',
          //     options: {
          //       // 可用于防止css污染
          //       modules: {
          //         mode: 'local',
          //         localIdentName: '[name]-[local]--[hash:base64:5]',
          //       },
          //       localsConvention: 'camelCase',
          //     },
          //   },
          //   'sass-loader',
          //   {
          //     loader: 'postcss-loader',
          //     options: {
          //       ident: 'postcss',
          //       plugins: (loader) => [
          //         require('postcss-import')({ root: loader.resourcePath }),
          //         require('autoprefixer')(),
          //       ],
          //     },
          //   },
          // ],
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  // 可用于防止css污染
                  modules: {
                    mode: 'local',
                    localIdentName: '[name]-[local]--[hash:base64:5]',
                  },
                  localsConvention: 'camelCase',
                },
              },
              'sass-loader',
              {
                loader: 'postcss-loader',
                options: {
                  ident: 'postcss',
                  plugins: (loader) => [
                    require('postcss-import')({ root: loader.resourcePath }),
                    require('autoprefixer')(),
                  ],
                },
              },
            ],
          }),
        },
        // 为第三方包配置css解析，将样式表直接导出（不会进行编译等）
        {
          test: /\.(css|scss)$/,
          exclude: path.resolve(__dirname, '../src'),
          use: [
            'style-loader',
            {
              loader: 'file-loader',
              options: {
                name: 'css/[name].css',
              },
            },
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          // 它将文件转换为base64 URI
          use: {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'images/[name].[ext]',
            },
          },
        },
        {
          test: /\.(jpg|png|svg|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10240,
                name: '[hash].[ext]',
              },
            },
          ],
        },
      ],
    },
    // 优化
    optimization: {
      // 拆包设置
      splitChunks: {
        chunks: 'all',
        minSize: 50000,
        minChunks: 1,
      },
    },
    devServer: options.devServer || {}
  };
}

module.exports = webpackCommonConfigCreator;
