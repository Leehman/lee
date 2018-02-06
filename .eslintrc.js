module.exports = {
    extends: ['last',
    "standard",
    "plugin:vue/base",
    "plugin:vue/essential",
    "plugin:vue/recommended"

    //"plugin:vue/strongly-recommended"
    ],
    rules: {
      // override/add rules settings here, such as:
      // 'vue/no-unused-vars': 'error'
      "comma-dangle": ["error", "never"]
    }
  };