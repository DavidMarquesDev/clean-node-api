import type { Config } from "jest";

const config: Config = {
  roots: ["<rootDir>/src"],

  testEnvironment: "node",

  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.d.ts"
  ],

  coverageDirectory: "coverage",

  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },

  moduleFileExtensions: ["ts", "js", "json"]
};

export default config;