var path = require('path');

var TEST_DIR = path.join(__dirname, "test");
var SRC_DIR = path.join(__dirname, "src");
var NODE_MODULES = path.join(__dirname, 'node_modules');

module.exports = {
 module: {
  loaders: [
   {
    test: /\.jsx?/,
    include: [TEST_DIR, SRC_DIR],
    exclude: NODE_MODULES,
    loader: 'babel',
    query: {
     presets: ['es2015', 'react', 'airbnb']
    }
   }
  ]
 },
  externals: {
    'cheerio': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  devtool: "inline-source-map"
};