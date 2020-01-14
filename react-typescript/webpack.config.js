const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const rootDir = path.resolve(process.cwd())
const assetsPath = path.resolve(rootDir, 'assets')
const srcPath = path.resolve(rootDir, 'src')
const buildPath = path.resolve(rootDir, 'build')

module.exports = {
  mode: 'development',
  entry: {
    app: `${srcPath}/App.tsx`,
  },
  output: {
    path: buildPath,
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        include: srcPath,
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    modules: ['node_modules', srcPath],
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${assetsPath}/template.html`,
      favicon: `${assetsPath}/favicon.ico`,
    }),
  ],
  devServer: {
    port: 6969,
    historyApiFallback: true,
  },
  target: 'web',
}
