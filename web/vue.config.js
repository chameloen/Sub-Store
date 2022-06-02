module.exports = {
  publicPath: process.env.PUBLIC_PATH || (process.env.NODE_ENV === 'production'
    ? '/Sub-Store/'
    : '/'),
  "transpileDependencies": [
    "vuetify",
    'vue-echarts',
    'resize-detector'
  ]
}