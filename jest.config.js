// import register from "ignore-styles";
// register([".css", ".sass", ".scss"]);

module.exports = {
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?|mjs?)$",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.mjs$": "babel-jest",
  },
  testPathIgnorePatterns: ["<rootDir>/build/", "<rootDir>/node_modules/"],
  moduleFileExtensions: ["js", "jsx", "mjs"],
  testEnvironment: "jest-environment-jsdom",
  verbose: true,
  moduleNameMapper: {
    "\\.(css|less|scss)$": "<rootDir>/src/Mocks/styleMock.js",
  },
};
