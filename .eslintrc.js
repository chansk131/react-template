/** @format */

module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  extends: ["airbnb-typescript-prettier", "react-app"],
  plugins: ["react-hooks"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": [
      "warn",
      {
        additionalHooks: "useRecoilCallback",
      },
    ],
  },
};
