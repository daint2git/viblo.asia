const path = require('path')

const rootDir = path.resolve(process.cwd())
const srcPath = path.resolve(rootDir, 'src')
const buildPath = path.resolve(rootDir, 'build')

module.exports = {
  mode: 'development',
  entry: {
    app: `${srcPath}/app.js`,
  },
  output: {
    publicPath: '/',
    path: buildPath,
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: srcPath,
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
            },
          },
        ],

        include: srcPath,
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    port: 6969,
    historyApiFallback: true,
  },
  devtool: 'eval-source-map',
  target: 'web',
}
