import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import * as parserVue from 'vue-eslint-parser';
import configPrettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';
import { defineFlatConfig } from 'eslint-define-config';

export default defineFlatConfig([
  {
    ...js.configs.recommended,
    ignores: ['src/assets/**'],
    languageOptions: {
      globals: {},
    },
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      ...configPrettier.rules,
      ...pluginPrettier.configs.recommended.rules,
      'import/no-extraneous-dependencies': 0,
      'import/extensions': 0,
      'import/no-unresolved': 0,
      'import/prefer-default-export': 0,
      'no-var': 'error',
      'no-new': 1,
      'no-shadow': 0,
      'no-console': 0,
      'no-underscore-dangle': 0,
      'no-confusing-arrow': 0,
      'no-plusplus': 0,
      'no-param-reassign': 0,
      'no-restricted-syntax': 0,
      'no-use-before-define': 0,
      'no-prototype-builtins': 0,
      'no-unneeded-ternary': 'error',
      'no-duplicate-imports': 'error',
      'no-useless-computed-key': 'error',
      'no-useless-escape': 0,
      'no-continue': 0,
      indent: ['error', 2, { SwitchCase: 1 }],
      camelcase: 0,
      'class-methods-use-this': 0,
      'new-cap': 0,
      'func-style': 0,
      'max-len': 0,
      'consistent-return': 0,
      'default-case': 2,
      'rest-spread-spacing': 'error',
      'prefer-const': 'error',
      'arrow-spacing': 'error',
      'prefer-destructuring': ['error', { object: true, array: false }],
    },
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      globals: {},
      parser: parserVue,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        extraFileExtensions: ['.vue'],
        sourceType: 'module',
      },
    },
    plugins: {
      vue: pluginVue,
    },
    processor: pluginVue.processors['.vue'],
    rules: {
      ...pluginVue.configs.base.rules,
      ...pluginVue.configs['vue3-essential'].rules,
      ...pluginVue.configs['vue3-recommended'].rules,
      'vue/multi-word-component-names': 0,
      'vue/one-component-per-file': 0,
    },
  },
]);
