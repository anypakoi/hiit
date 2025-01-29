module.exports = {
  preset: 'jest-expo',
  testEnvironment: 'node',
  setupFiles: ['./jest.setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|expo-av|@expo|expo|redux-mock-store)'
  ],
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect']
};