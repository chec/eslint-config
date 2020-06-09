module.exports = {
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],
  rules: {
    // Overwritten vue rules:
    "vue/require-default-prop": "off",
    "vue/no-v-html": "off",
    "vue/max-attributes-per-line": ["error", {
      "singleline": 3,
    }],

    // "Uncategorized" vue rules:
    "vue/component-name-in-template-casing": ["error", "PascalCase", {
      "registeredComponentsOnly": true,
    }],
    "vue/html-comment-content-spacing": ["error", "always"],
    "vue/html-comment-indent": ["error"],
    "vue/no-boolean-default": ["error"],
    "vue/no-duplicate-attr-inheritance": ["error"],
    "vue/no-reserved-component-names": ["error"],
    "vue/no-static-inline-styles": ["error"],
    "vue/no-unused-properties": ["error", {
      "groups": ["props", "data", "computed"],
    }],
    "vue/no-useless-mustaches": ["error"],
    "vue/no-useless-v-bind": ["error"],
    "vue/padding-line-between-blocks": ["error"],
    "vue/require-name-property": ["error"],
    "vue/script-indent": ["error"],
  },
};
