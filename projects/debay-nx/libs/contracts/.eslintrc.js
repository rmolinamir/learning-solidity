module.exports = {
  env: {
    browser: false,
    es2021: true,
    mocha: true,
    node: true,
  },
  plugins: ['@typescript-eslint'],
  // extends: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'comma-dangle': ['error', {
      objects: 'always',
      arrays: 'never',
      imports: 'never',
      exports: 'never',
      functions: 'never',
    }],
    'node/no-unsupported-features/es-syntax': [
      'error',
      { ignores: ['modules'], }
    ],
    'padded-blocks': 'off',
    semi: ['error', 'always'],
  },
};
