// Node.js

// Node.js
// 模块化: 例如b.js 需要a.js中的方法或者某些信息时,在客户端需要先与b.js通过script标签引入a.js;但是在Node.js中没有html,所以需要
// 把a做成模块把b需要的信息导出;然后b.js中导入a.js;

function fn() {}
function gn() {}
module.exports = fn; // 直接导出了一个函数
exports.fn = fn;  // 导出一个对象,对象中有一个属性fn;

// 导出多个
module.exports = {
    fn,
    gn
}; // 导出一个对象

// b.js
// 导入时需要用变量接收导入的结果然后再通过变量使用导入信息
let obj = require("./a"); // 导入js或者json文件可以不写扩展名 .js或者.json

// npm 包管理器
// 我们第三方的模块称为依赖包;npm专门用来管理这些依赖包的; 依赖包分为开发依赖(devDependencies)和生产依赖(dependencies)
// 1. npm init -y 初始化项目, 生成一个package.json 文件
// 2. npm install 依赖包名称 参数:
// 2.1 参数为空或者-save 安装生产依赖;(就是代码在运行时需要的依赖)
// 2.2 -save-dev 安装开发依赖
// 2.3 -g 全局安装 (全局安装就是安装成cmd的一个命令)

// npm install 或者 npm i 安装package.json中的devDependencies 和dependencies 的依赖包;

// npm uninstall 依赖包的名称 卸载依赖包

// 项目路径中,尽量不要有中文.文件夹不要用 node npm node_modules

// 清npm缓存(当安装依赖包失败的时候先清缓存)
// npm cache clean --force  (force 是强制的意思)

// Node.js的模块:
// 1. 内置模块: Node.js中在安装时已经存在 模块,这些模块都是核心的模块,例如fs,http,url模块等,不用咱们写,直接导入就可以使用;
// 2. 自定义模块: 就是自己写的模块;
// 3. 第三方的模块: 通过npm或者yarn安装的第三方模块;

// 无论是哪种模块在使用之前都需要导入;







