const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const rootDir = path.resolve(process.cwd())
const srcDir = path.resolve(rootDir, 'src')
const publicDir = path.resolve(rootDir, 'public')
const buildDir = path.resolve(rootDir, 'build')

module.exports = {
  entry: {
    app: `${srcDir}/app.jsx`,
  },
  output: {
    publicPath: '/',
    path: buildDir,
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: srcDir,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${publicDir}/template.html`,
      favicon: `${publicDir}/favicon.ico`,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: `${publicDir}/models`,
          to: `${buildDir}/models`,
          toType: 'dir',
        },
      ],
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    modules: ['node_modules', srcDir],
    extensions: ['.js', '.jsx', '.json'],
  },
  devServer: {
    port: 6969,
    host: '0.0.0.0',
    https: true,
    open: true,
    historyApiFallback: true,
  },
  devtool: 'eval-source-map',
}
