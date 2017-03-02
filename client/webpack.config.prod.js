var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './js/main.js'
  ],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'static'),
    publicPath: '/static/'
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader",
            options: {
              includePaths: [ "styles/scss" ]
            }
          }
        ]
      }
    ],
  },

  plugins: [
  ]
};