// eslint.config.js
// @ts-ignore: Missing type definitions
import rn from '@react-native/eslint-config';
import prettier from 'eslint-config-prettier';

export default [
  ...rn,
  prettier,
  {
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'unused-imports/no-unused-imports': 'error'
    },
    plugins: {
      'unused-imports': require('eslint-plugin-unused-imports')
    }
  }
];
