/* eslint-disable */
module.exports = {
  root: false,
  env: {
    node: true,
  },
  overrides: [
    {
      files: ["**/*"],
      rules: {
        "vue/multi-word-component-names": 0,
      },
    },
  ],
  extends: ["plugin:vue/vue3-essential", "@vue/standard"],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
