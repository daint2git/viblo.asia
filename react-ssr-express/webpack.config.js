const path = require('path');
const fs = require('fs');

const webpackNodeExternals = require('webpack-node-externals');

const rootDir = fs.realpathSync(process.cwd());
const srcDir = path.resolve(rootDir, 'src');
const buildDir = path.resolve(rootDir, 'build');

const common = {
  mode: 'development',
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
  resolve: {
    modules: ['node_modules', srcDir],
    extensions: ['.js', '.jsx', '.json'],
  },
};

const clientConfig = {
  ...common,
  target: 'web',
  name: 'client',
  entry: {
    client: path.resolve(srcDir, 'client.js'),
  },
  output: {
    publicPath: '/',
    path: buildDir,
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: module => /node_modules/.test(module.resource),
          enforce: true,
        },
      },
    },
  },
  devtool: 'eval-source-map',
};

const serverConfig = {
  ...common,
  target: 'node',
  name: 'server',
  entry: {
    server: path.resolve(srcDir, 'server.js'),
  },
  output: {
    publicPath: '/',
    path: buildDir,
    filename: 'server.js',
  },
  devtool: 'eval-source-map',
  externals: [webpackNodeExternals()],
  node: {
    __dirname: false,
  },
};

module.exports = [clientConfig, serverConfig];
