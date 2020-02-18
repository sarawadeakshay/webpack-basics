const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/'), //  converts into absolute path
    publicPath: ''  //  images are served from dist folder
  },
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist/'),  //  path to dist folder
    index: 'index.html',
    port: 9000  //  optional
  },
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
          'style-loader',
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
      },
      {
        test: /\.hbs$/,
        use: [
          'handlebars-loader'
          ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),  //  remove old files from dist folder
 
    //  generates the index.html and updates the bundle.js and styles.css paths
    new HtmlWebpackPlugin({
      title: 'Webpack Basics',
      template: 'src/index.hbs'
    })
  ]
}