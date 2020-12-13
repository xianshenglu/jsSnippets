module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "root": true,
  "extends": ['@xianshenglu/eslint-config/javascript'],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "sourceType": "module"
  },
  "globals": {
    "test": false,
    "expect": false,
    "describe": false
  },
  "rules": {
    'array-callback-return':['off'],
    'default-case':['off'],
    'consistent-return':['off']
  }
}
