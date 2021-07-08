module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/recommended'
  ],
  plugins: [
    'vuetify'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'vuetify/no-deprecated-classes': 'error',
    'vuetify/no-legacy-grid': 'error',
    indent: ["error", 2],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
