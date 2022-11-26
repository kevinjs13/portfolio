const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        '^.+\\.ts?$': 'ts-jest',
        '.+\\.(css|styl|less|sass|scss|png|jpeg|jpg|ttf|woff|woff2|svg|pdf)$': 'jest-transform-stub',
    },
    moduleNameMapper: {
        ...pathsToModuleNameMapper(compilerOptions.paths || {}, {
            prefix: '<rootDir>/',
        }),
    },

    setupFilesAfterEnv: ["./setupTests.ts"]

};
