const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../config/webpack.dev.js');

// 引入编译器webpack
const compiler = webpack(webpackConfig);
console.log("服务器配置");
console.log( webpackConfig);

const options = Object.assign({}, webpackConfig.devServer, {
  open: true
})

// 配置webpack本地服务
const server = new webpackDevServer(compiler, options);

// 启动服务
server.listen(3000, '127.0.0.1', () => {
  console.log('Starting server on http://localhost:8080');
})