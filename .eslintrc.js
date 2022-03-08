module.exports = {
    env: {
        node: true,
        browser: true,
        es6: true,
    },
    parser: 'babel-eslint',
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'prettier/prettier': ['warn', { endOfLine: 'auto' }],
        'no-unused-vars': ['warn', { vars: 'all', args: 'none' }],
        'react/jsx-key': 'warn',
        'array-element-newline': 0,
        'default-case': 'warn',
        'no-loop-func': 'warn',
        camelcase: [2, { properties: 'always' }],
        // suppress errors for missing 'import React' in files
        'react/react-in-jsx-scope': 'off',
        // allow jsx syntax in js files (for next.js project)
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    },
    settings: {
        react: { version: 'detect' },
    },
};
