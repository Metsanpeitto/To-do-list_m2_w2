module.exports = {
  verbose: true,
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleDirectories: ["node_modules", "src"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  //setupFiles: ["./src/test/add_remove_li.test.js"],
  setupFilesAfterEnv: ["<rootDir>/jest-setup.js"],
};
