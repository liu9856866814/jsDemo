// 和 webpack.config.js 一样, 修改后要重启;
// 开发完以后,要上线; 上线前要把前端的代码打包到后端的项目中, 需要 webpack, 我们只需要告诉 webpack 把打包后的结果输出到服务端
// 项目的某个目录就可以了;

module.exports = {
  outputDir: '../day4/vue-book-server/static', // 指定后打包后文件输出的目录
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
