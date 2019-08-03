// 和 webpack.config.js 一样, 修改后要重启;
module.exports = {
  outputDir: '../day4/vue-book-server/static',
  lintOnSave: true,
  devServer: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        chnageOrigin: true,
        secure: false
      }
    }
  }
};
