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
              presets: ['react', 'es2015', 'stage-1', 'stage-2']
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
