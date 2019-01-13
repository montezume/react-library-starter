// Resolve the absolute path of the caller location.
const rootPath = process.cwd();

module.exports = {
  displayName: 'test',
  globals: {
    'process.env': {
      NODE_ENV: 'test',
    },
  },
  moduleDirectories: ['src', 'node_modules'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/transform-file.js',
    '\\.css$': 'identity-obj-proxy',
  },
  rootDir: rootPath,
  setupFiles: ['raf/polyfill'],
  setupTestFrameworkScriptFile: '<rootDir>/scripts/setup-test-framework.js',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['node_modules'],
  testRegex: '\\.spec\\.js$',
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  watchPlugins: ['jest-plugin-filename', 'jest-watch-master'],
};
