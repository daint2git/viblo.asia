const webpack = require('webpack')
const path = require('path')
const rootDir = path.resolve(process.cwd())
const srcPath = path.resolve(rootDir, 'src')

module.exports = {
  mode: 'development',
  entry: `${srcPath}/app.js`,
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: srcPath,
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      API_URL: JSON.stringify(`http://localhost:9696/api`),
    }),
  ],
  devServer: {
    host: '0.0.0.0',
    port: 6969,
  },
  devtool: 'eval-source-map',
}
