const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/'), //  converts into absolute path
    publicPath: 'dist/'  //  images are served from dist folder
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
          'style-loader', //  adds css inside <style> tag
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
  }
}