const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        app: [
            './src/index.tsx', 
            'webpack-hot-middleware/client'
        ],
        vendor: [
            'react', 
            'react-dom'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js'
        //filename: 'main.js',
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                //exclude: /node_modules/,
                use: {
                    loader: "ts-loader"
                }
            },            
            { 
                enforce: "pre", 
                test: /\.js$/, 
                loader: "source-map-loader" 
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
              use: [
                  MiniCssExtractPlugin.loader, 
                  "css-loader"
                ]
            },
            {
                test: /\.less$/,
                use: [{
                        loader: 'style-loader'
                    }, 
                    {
                        loader: 'css-loader'
                    }, 
                    {
                        loader: 'less-loader', options: {
                        paths: [
                            path.resolve(__dirname, 'node_modules')
                            ]
                        }
                    }
                ]
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
        new HtmlWebpackPlugin({ 
            template: path.resolve(__dirname, 'src', 'index.html') 
            //template: "./src/index.html",
            //filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}