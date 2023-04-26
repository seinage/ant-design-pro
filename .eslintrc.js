module.exports = {
  extends: [require.resolve('@umijs/lint/dist/config/eslint')],
  globals: {
    page: true,
    REACT_APP_ENV: true,
  },
  // env: {
  //   es2021: true,
  //   browser: true,
  //   node: true,
  // }
};
