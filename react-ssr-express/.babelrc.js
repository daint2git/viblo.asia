module.exports = {
  presets: [
    [
      '@babel/env',
      {
        useBuiltIns: 'usage',
        corejs: require('core-js/package.json').version,
      },
    ],
    '@babel/react',
  ],
};
