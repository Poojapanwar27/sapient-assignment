/* eslint-disable */
const path = require('path'),
      webpack = require('webpack'),
      nodeExternals = require('webpack-node-externals'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      StyleLintPlugin = require('stylelint-webpack-plugin'),
      UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
      rulesConfig = require('./rules-config');

const clientConfig = {
  entry: {
    bundle: ['babel-polyfill','./src/client.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js"
  },
  module: rulesConfig,
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all'
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true
      })
    ]
  },
  devServer: {
    open: true,
    //hot: true
  },
  plugins: [
    //new webpack.HotModuleReplacementPlugin(),
    new StyleLintPlugin({
      syntax: 'scss'
    }),
    new ExtractTextPlugin('style.css'),
    new webpack.DefinePlugin({
      __isBrowser__: "true"
    })
  ]
}

const serverConfig = {
  entry: {
    index: ['babel-polyfill', './src/index.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js"
  },
  target: 'node',
  externals: [nodeExternals()],
  module: rulesConfig,
  plugins: [
    new ExtractTextPlugin('style.css'),
    new webpack.DefinePlugin({
      __isBrowser__: "false"
    }),
  ]
}

module.exports = [clientConfig, serverConfig];