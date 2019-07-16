// 目录中不要有汉字,文件和文件夹不要写 node/npm

// console.log(module);
// console.log(require);

// 在浏览器中/ JSON / setTimeout ... 都是定义在window对象中;
// console.log(window); node中没有window对象;
// console.log(global); // node中的全局对象是global
// node 天生自带模块化, node会给js文件外面套一个自执行函数,并且给自执行函数传入几个实参: exports, module, require, __dirname,
// __filename ;
(function (exports, module, require, __dirname, __filename) {
  // 这里面才是前端写的js代码
})(exports, module, require, __dirname, __filename);
// console.log(exports); // 导出
// console.log(module); // 模块
// console.log(require); // 导入模块的方法
console.log(__dirname); // 是当前js文件所在的目录的绝对路径
console.log(__filename); // 当前js的文件名,带绝对路径和扩展名


