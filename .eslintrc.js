module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  ignorePatterns: ['.css', '.jpg', '.png', '.svg', '.test.js'],
  rules: {
    semi: ['error', 'never'],
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
  },
}
