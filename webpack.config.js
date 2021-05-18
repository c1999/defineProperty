const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  // 入口
  entry: './src/index.js',
  // 出口
  output: {
    // 打包出来的文件名 
    filename: 'bundle.js',
    path: path.resolve(__dirname,'dist')
  },
  // 调试错误定位源码
  devtool: 'source-map',
  // 先去根目录找找不到再去node_modules找
  resolve: {
    modules: [ path.resolve(__dirname, ''), path.resolve(__dirname, 'node_modules')]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'pubilc/index.html')
    })
  ]
};