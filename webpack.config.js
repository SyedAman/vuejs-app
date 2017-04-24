// configure webpack

module.exports = {
  // specify entry point
  entry: [
    './src/index.js',
    './src/auth/index.js'
  ],

  // configure output
  output: {
    // serve bundled files in one file
    filename: 'build.js',
    path: __dirname + '/build/',
    publicPath: 'build/'
  },

  // configure how files are processed
  module: {
    // process *.vue files using vue-loader
    { test:/\.vue$/, loader:'vue' }
    // process *.js using babel-loader
    { test: /\.js$/ loader:'babel', exclude: /node_modules/ }
  },

  // configure transpilation of javascript files
  babel: {
    preset: ['es2015'],
    plugin: ['transform-runtime']
  }
}
