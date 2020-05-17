const path = require('path')
const defaultWebpackConfig = require('@vue/cli-service/webpack.config')

module.exports = {
  stories: ['../src/components/**/stories.js'],
  addons: ['@storybook/addon-storysource'],
  webpackFinal(config) {
    config.module.rules = defaultWebpackConfig.module.rules

    config.module.rules.push({
      test: /stories.js$/,
      loaders: [
        {
          loader: require.resolve('@storybook/source-loader'),
          options: {
            prettierConfig: {
              printWidth: 100,
              singleQuote: false,
            },
          },
        },
      ],
      include: [path.resolve(process.cwd(), 'src')],
      enforce: 'pre',
    })

    return config
  },
}
