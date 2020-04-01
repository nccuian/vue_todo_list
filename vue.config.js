module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue_todo_list/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/variables.scss";
        `
      }
    }
  }
}