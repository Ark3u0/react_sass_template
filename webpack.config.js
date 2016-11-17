var path = require('path');

var SRC_DIR = path.join(__dirname, "src");
var NODE_MODULES = path.join(__dirname, 'node_modules');

module.exports = {
 module: {
  loaders: [
   {
    test: /\.jsx?/,
    include: SRC_DIR,
    exclude: NODE_MODULES,
    loader: 'babel',
    query: {
     presets: ['es2015', 'react']
    }
   },
   {
    test: /\.scss$/,
    loaders: ['style', 'css', 'sass']
   }
  ]
 },
 devtool: "inline-source-map",
 entry: SRC_DIR + '/index.jsx',
 output: {
  filename: 'index.js'
 }
};