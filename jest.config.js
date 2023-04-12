const rootDirSource = '<rootDir>/src';

module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  // moduleNameMapper: {
  //   '^@/(.*)$': '<rootDir>/$1',
  // },
  moduleNameMapper: {
    '^[./a-zA-Z0-9@$_-]+\\.(png|jpg)$':
      '<rootDir>/node_modules/react-native/jest/assetFileTransformer.js',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  testPathIgnorePatterns: ['\\.snap$', '<rootDir>/node_modules/'],
  // transformIgnorePatterns: ['node_modules/?!(static-container)'],
  transformIgnorePatterns: [
    'node_modules/(?!react-native|react-native-gesture-handler|react-navigation|@react-native-async-storage/async-storage|redux-persist|react-native-keychain|)/',
  ],
  cacheDirectory: '.jest/cache',
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  clearMocks: true,
  collectCoverageFrom: [
    `${rootDirSource}/**/*.{ts,tsx}`,
    '!**/node_modules/**',
    `${rootDirSource}/*.constant.ts`,
    `!${rootDirSource}/**/*.interface.ts`,
    `!${rootDirSource}/**/*.type.ts`,
    `!${rootDirSource}/**/index.ts`,
  ],
  verbose: true,
  modulePaths: ['<rootDir>/src/'],
  setupFiles: [],
  testEnvironment: 'node',
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};
