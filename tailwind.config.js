module.exports = {
  content: [
    './themes/landscape/layout/**/*.ejs',
    './source/**/*.md'
  ],
  theme: {
    extend: {},
  },
  corePlugins: {
    // 禁用可能与主题冲突的Tailwind基础样式
    preflight: false,
  }
}