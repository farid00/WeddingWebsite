// webpack.config.js
const path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var nodeExternals = require('webpack-node-externals');

const client = {
  target: 'web',
  name: 'client',
  mode: 'development',
  devtool: 'source-map',
  entry: './client.jsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "client.js",
    publicPath: '/dist/',
  },
  plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
      new webpack.optimize.OccurrenceOrderPlugin(),
    ],
  optimization: {
    minimize: true
  },
  module: {
    rules: [
      { test: /\.js$/, use: {loader: 'babel-loader'}, exclude: /node_modules/},
      { test: /\.jsx$/, use: {loader: 'babel-loader'}, exclude: /node_modules/}
    ]
  }
};

const server = {
  target: 'node',
  name: 'server',
  mode: 'development',
  devtool: 'source-map',
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder,
  entry: './server.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "server.js",
    libraryTarget: "commonjs2",
    publicPath: '/dist/',
  },
  module: {
    rules: [
      { test: /\.js$/, use: {loader: 'babel-loader'}, exclude: /node_modules/},
      { test: /\.jsx$/, use: {loader: 'babel-loader'}, exclude: /node_modules/}
    ]
  }
};

module.exports = [client, server]