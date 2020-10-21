const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const rootDir = path.resolve(process.cwd())
const srcPath = path.resolve(rootDir, 'src')
const publicPath = path.resolve(rootDir, 'public')

module.exports = {
  mode: 'development',
  entry: {
    app: `${srcPath}/app.jsx`,
  },
  output: {
    publicPath: '/',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        include: srcPath,
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    modules: [srcPath, 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${publicPath}/index.html`,
      favicon: `${publicPath}/favicon.ico`,
    }),
  ],
  devServer: {
    port: 6969,
  },
}
