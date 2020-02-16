const path = require('path');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist/'), //  converts into absolute path
    publicPath: ''  //  images are served from dist folder
  },
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.(JPG|jpg|png)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, //  adds css inside <style> tag
          'css-loader',  //  allows to import css in js files
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'], //  converts ES6/7/8/9 into ES5
            plugins: ['transform-class-properties'] //  to support the class properties
          }
        }
      }
    ]
  },
  plugins: [
    new TerserWebpackPlugin(), //  to minify bundle.js instead of uglify plugin

    //  to minify css into a new css file
    new MiniCssExtractPlugin({
      filename: 'styles.[contenthash].css'
    }),
    new CleanWebpackPlugin(),  //  remove old files from dist folder
 
    //  generates the index.html and updates the bundle.js and styles.css paths
    new HtmlWebpackPlugin()
  ]
}