const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var path = require('path');

module.exports = {
    mode: 'production',
    entry: {
      app: './src/index.js'
    },
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: { minimize: true }
            }
          ]
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"]
        },
        {
            test: /\.svg$/,
            loader: 'svg-inline-loader?classPrefix'
            //loader: 'svg-inline-loader'
            //loader: 'svg-loader?{png:{scale:2}}' 
            //loader: 'svg-loader?pngScale=2' 
        },
        {
          test: /\.(jpe?g|png|gif|ico|svg|woff|ttf|wav|mp3)$/i, 
          loader: 'file-loader?name=[name].[ext]'
        }
      ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
            favicon: 'src/images/favicon.ico'
        }),
        new MiniCssExtractPlugin({
          filename: "[name].css",
          chunkFilename: "[id].css"
        })
    ]
  };
