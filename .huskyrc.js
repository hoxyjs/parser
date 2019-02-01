module.exports = {
  hooks: {
    "pre-commit": "npm run lint && npm run lint-configs && npm run test",
    "pre-push": "npm run lint && npm run lint-confings"
  }
};
