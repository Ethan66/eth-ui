var path = require('path')
const IP = require('ip').address()
var HtmlWebpackPlugin = require('html-webpack-plugin')
var { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: './example/main.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('example'),
      '$pkg': resolve('packages'),
      '@@': resolve('lib')
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    host: 'localhost',
    historyApiFallback: true,
    hot: true,
    overlay: true
  },
  plugins: [new HtmlWebpackPlugin({
    template: './index.html'
  }), new CleanWebpackPlugin(), new VueLoaderPlugin()]
}