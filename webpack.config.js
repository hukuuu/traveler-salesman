const path = require('path')

module.exports = {
  entry: './src/sketch.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: '.'
  }
}
