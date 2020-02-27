module.exports = {
    root: true,
    env: {
      node: true,
      browser: true,
    },
    extends: [
        // Base extends
        'eslint:recommended',

        // Vue extends
        'plugin:vue/base',
        'plugin:vue/essential',
        'plugin:vue/strongly-recommended',
        'plugin:vue/recommended',
    ],
    rules: {
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
  }