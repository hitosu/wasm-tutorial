const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './web/bootstrap.js',
  output: {
    path: path.resolve(__dirname, 'web/dist'),
    filename: 'bootstrap.js'
  },
  mode: 'development',
  plugins: [new CopyWebpackPlugin(['web/index.html'])]
}
