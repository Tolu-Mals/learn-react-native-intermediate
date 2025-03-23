module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier", "react-native"],
  rules: {
    "prettier/prettier": "warn",
    "react-native/no-unused-styles": "error",
  },
};
