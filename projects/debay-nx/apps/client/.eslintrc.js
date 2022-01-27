module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:react-hooks/recommended',
    'plugin:react-hooks/recommended'
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    'comma-dangle': ['error', {
      objects: 'always',
      arrays: 'never',
      imports: 'never',
      exports: 'never',
      functions: 'never',
    }],
    'padded-blocks': 'off',
    semi: ['error', 'always'],
    'jsx-quotes': ['error', 'prefer-single'],
    '@next/next/no-img-element': 'off',
  },
};
