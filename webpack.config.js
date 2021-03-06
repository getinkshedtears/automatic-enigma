var webpack = require('webpack');
var path = require('path');

var build_dir = path.resolve(__dirname, 'public/javascripts');
var app_dir = path.resolve(__dirname, 'app');

var config = {
    entry: app_dir + '/index.jsx',
    output: {
        path: build_dir,
        filename: 'index.js'
    },
    node: {
      fs: "empty",
      net: "empty",
      tls: "empty",
      dns: 'empty'
    },
    module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : app_dir,
        loader : 'babel'
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      }
    ]
  }
}

module.exports = config;