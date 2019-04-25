const path = require('path');
const WebPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  entry: './main',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: 'dist/'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: ['delete-annotation-dev', 'awesome-typescript-loader']
      }
    ]
  },
  plugins: [
     new WebPlugin({
      template: './index.html',
      filename: '../template.html'
    }),
  ]
};