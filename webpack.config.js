const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: "[name].css",
  disable: true
});


module.exports = {
    resolve:{
        extensions: [".js", ".jsx"]
    },
    entry: {
        app: [ './src/index.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader"
            },
            {
              test: /\.css$/,
              use: extractSass.extract({
                  use: [{
                      loader: "css-loader"
                  }
                ],
                  fallback: "style-loader"
              })
          }
        ]
    },
    plugins: [
      extractSass,
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
              name: 'vendor',
              minChunks: module => module.context && module.context.includes("node_modules")
            })
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        overlay: true,
    }
}