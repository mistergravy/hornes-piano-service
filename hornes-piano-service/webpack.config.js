var path = require('path');

var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: `${SRC_DIR}/index.js`,
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  }
};

() => {
  console.log("hello");
}();