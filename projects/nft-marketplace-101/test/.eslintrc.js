module.exports = {
  root: true,
  overrides: [{
    files: ['**/*.test.ts', '**/*.spec.ts'],
    rules: {
      'no-unused-expressions': 'off'
    }
  }]
}
