module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue_todo_list/dist'
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