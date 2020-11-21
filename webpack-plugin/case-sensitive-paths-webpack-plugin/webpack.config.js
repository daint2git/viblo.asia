const path = require('path')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('build'),
    publicPath: '/',
  },
  plugins: [new CaseSensitivePathsPlugin()],
}
