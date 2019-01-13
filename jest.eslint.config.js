module.exports = {
  runner: 'jest-runner-eslint',
  displayName: 'eslint',
  testMatch: ['<rootDir>/src/*.js'],
  testPathIgnorePatterns: [],
  watchPlugins: ['jest-plugin-filename'],
};
