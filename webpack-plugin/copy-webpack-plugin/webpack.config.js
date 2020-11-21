const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('build'),
    publicPath: '/',
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve('src/assets'),
          to: path.resolve('build/assets'),
          toType: 'dir',
        },
      ],
    }),
  ],
}
