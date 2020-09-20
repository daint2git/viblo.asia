module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/react',
  ],
  env: {
    node: true,
    browser: true,
    es2020: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  globals: {
    AFRAME: true,
    THREE: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
