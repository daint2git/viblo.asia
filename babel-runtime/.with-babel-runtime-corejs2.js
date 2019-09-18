module.exports = {
  presets: ['@babel/env', '@babel/react'],
  plugins: [
    '@babel/proposal-class-properties',
    [
      '@babel/transform-runtime',
      {
        corejs: 2,
      },
    ],
  ],
}
