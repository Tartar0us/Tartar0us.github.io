module.exports = {
  plugins: [
    require('tailwindcss')('./tailwind.config.js'), // 修改这一行
    require('autoprefixer')
  ]
}