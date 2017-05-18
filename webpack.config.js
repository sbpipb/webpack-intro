var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
const path = require('path');

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
        },
        {
          // Loaders are processed in reverse array order. That means css-loader will run before style-loader.
          test: /\.css$/,
          use: ['style-loader', {
            loader: 'css-loader',
            options: { modules: false },
            }
          ],
        },
      ]
  },
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules']
  },
  output: {
    // library: 'myClassName',
    path: path.resolve(__dirname, './dist'),
    filename: "client.min.js",
    publicPath: '/assets',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
  },
  plugins: debug ? [] : [
        new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
