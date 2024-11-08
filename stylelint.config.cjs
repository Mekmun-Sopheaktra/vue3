module.exports = {
  root: true,
  plugins: ['stylelint-order', 'stylelint-less'],
  extends: [
    'stylelint-config-standard', // the standard shareable config for Stylelint
    'stylelint-config-html/html', // the shareable html config for Stylelint.
    'stylelint-config-html/vue', // the shareable vue config for Stylelint.
    'stylelint-config-recess-order', // use the clean order for properties
  ],
  rules: {
    'no-descending-specificity': null,
    'no-empty-source': null,
    'font-family-no-missing-generic-family-keyword': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'function',
          'if',
          'each',
          'include',
          'mixin',
          'extend',
          'content',
          'use',
        ],
      },
    ],
    'function-no-unknown': null,
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    'declaration-property-value-no-unknown': true,
    'selector-no-vendor-prefix': null,
    'keyframes-name-pattern': null,
    'selector-class-pattern': null,
    'value-no-vendor-prefix': null,
    'rule-empty-line-before': ['always', { ignore: ['after-comment', 'first-nested'] }],
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
  overrides: [
    {
      files: ['**/*.(css|html|vue)'],
      customSyntax: 'postcss-html',
      rules: {
        'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['deep', 'global'] }],
        'selector-pseudo-element-no-unknown': [true, { ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted'] }],
      },
    },
    {
      files: ['*.less', '**/*.less'],
      customSyntax: 'postcss-less',
      extends: ['stylelint-config-standard-less'],
      rules: {
        'less/color-no-invalid-hex': true,
        'less/no-duplicate-variables': true,
      },
    },
  ],
};
