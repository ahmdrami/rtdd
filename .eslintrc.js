module.exports = {
  extends: ['eslint:recommended', "plugin:jest/recommended"], 
  parserOptions: {
    ecmaVersion: 6
  }, 
  env: {
    node: true,
    "jest/globals": true
  },
  plugins: ['jest']
}