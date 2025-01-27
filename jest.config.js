module.exports = { preset:'react-native',
    transformIgnorePatterns: [
        'node_modules/(?!(react-native|@react-native|@react-navigation)/)',
    ],
    setupFilesAfterEnv: ['./jest-setup.js'], //opcional si necesitas configuraciones iniciales
};
