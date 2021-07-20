module.exports = {
  extends: "plugin:jest-dom/recommended",
  parser: "@babel/eslint-parser",
  rules: {
    "jest-dom/prefer-checked": "error",
    "jest-dom/prefer-enabled-disabled": "error",
    "jest-dom/prefer-required": "error",
    "jest-dom/prefer-to-have-attribute": "error",
    "no-shadow": "off",
    "no-param-reassign": "off",
    "eol-last": "off",
    "import/extensions": [
      1,
      {
        js: "always",
        json: "always",
      },
    ],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
  },
};
