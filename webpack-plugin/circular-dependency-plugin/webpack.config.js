const path = require('path')
const CircularDependencyPlugin = require('circular-dependency-plugin')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('build'),
    publicPath: '/',
  },
  plugins: [
    new CircularDependencyPlugin({
      exclude: /node_modules/,
    }),
  ],
}
