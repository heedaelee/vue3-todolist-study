// .eslintrc.js
module.exports = {
  root: true,
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  env: {
    node: true,
    browser: true,
  },
  rules: {
    /* eslint:recommended */
    semi: ["error", "always"],
    indent: ["error", 2],
    "comma-spacing": ["error", { before: false, after: true }],

    //...

    /* plugin:vue/vue3-essential */
    "vue/multi-word-component-names": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/max-attributes-per-line": "off",
    "vue/attribute-hyphenation": "off",
    "vue/multiline-html-element-content-newline": "off",
    "vue/html-indent": "off",
    "no-unused-vars": "off",
    "vue/html-closing-bracket-newline": [
      "error",
      {
        singleline: "never",
        multiline: "always",
      },
    ],
    "vue/html-closing-bracket-spacing": ["error"],
    "vue/html-end-tags": ["error"],
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "never",
        },
      },
    ],
  },
  extends: [
    "eslint:recommended",
    // 'plugin:vue/recommended',
    "plugin:vue/vue3-recommended",
  ],
};
