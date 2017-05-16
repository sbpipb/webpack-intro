var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  context: __dirname + '/src',
  devtool: debug ? "inline-sourcemap" : false,
  entry: "./js/client.js",
  module: {
    rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env','es2015', 'react']
              // presets: ['env', 'es2015-webpack', 'stage-0', 'stage-1']
            }
          }
        }
      ]
  },
  output: {
    path: __dirname + "/src",
    filename: "client.min.js"
  },
  plugins: debug ? [] : [
        new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
