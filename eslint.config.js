import antfu from '@antfu/eslint-config';

export default antfu({
  formatters: true,
  vue: true,
  rules: {
    'style/semi': 'off',
    'semi': ['error', 'always'],
    'vue/block-order': 'off',
    'vue/component-tags-order': [
      'error',
      {
        order: ['template', 'script', 'style'],
      },
    ],
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 2,
      },
      multiline: {
        max: 1,
      },
    }],
  },
});
