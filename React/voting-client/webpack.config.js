'use strict';
const webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
      rules: [
        { 
          //test: /\.jsx?$/, 
          //exclude: /node_modules/,
          //loaders: ["babel-loader"] //OKAY
          //loaders: ["react-hot-loader"] //OKAY
          //loaders: ["babel-loader!react-hot-loader"], 
          //loaders: ["babel-loader","react-hot-loader"],
        },
        {
          test: /\.jsx?$/, 
          exclude: /node_modules/,
          oneOf: [
            {
              use: 'babel-loader'
            },
            {
              use: 'react-hot-loader'
            }
          ]
        }      
      ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
