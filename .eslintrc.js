module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: [
    // Base extends
    "eslint:recommended",

    // Vue extends
    "plugin:vue/base",
    "plugin:vue/essential",
    "plugin:vue/strongly-recommended",
    "plugin:vue/recommended",
    "prettier",
    "prettier/vue"
  ],
  // ignorePatterns: [".eslintrc.js", "node_modules/"],
  rules: {
    // Disable console logs on production branch
    "no-console": process.env.NODE_ENV === "prod" ? 2 : 1,
    "no-debugger": process.env.NODE_ENV === "prod" ? 2 : 1,

    // Order of component details (default)
    "vue/order-in-components": [
      1,
      {
        order: [
          "el",
          "name",
          "parent",
          "functional",
          ["delimiters", "comments"],
          ["components", "directives", "filters"],
          "extends",
          "mixins",
          "inheritAttrs",
          "model",
          ["props", "propsData"],
          "data",
          "computed",
          "watch",
          "LIFECYCLE_HOOKS",
          "methods",
          ["template", "render"],
          "renderError"
        ]
      }
    ],
    // Order in component attributes (default)
    "vue/attributes-order": [
      "warning",
      {
        order: [
          "DEFINITION",
          "LIST_RENDERING",
          "CONDITIONALS",
          "RENDER_MODIFIERS",
          "GLOBAL",
          "UNIQUE",
          "TWO_WAY_BINDING",
          "OTHER_DIRECTIVES",
          "OTHER_ATTR",
          "EVENTS",
          "CONTENT"
        ],
        alphabetical: false
      }
    ],
    "vue/max-attributes-per-line": [
      1,
      {
        singleline: 2,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],

    "vue/singleline-html-element-content-newline": 0,
    "vue/require-default-prop": 0,
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "any"
        }
      }
    ],

    // Non-vue rules
    "comma-dangle": [1, "only-multiline"]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
