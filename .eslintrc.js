module.exports = {
  extends: '@mate-academy/eslint-config-react-typescript',
  rules: {
    'no-param-reassign': ['error', {
      props: true, ignorePropertyModificationsForRegex: ['^state'],
    }],
  },
};
