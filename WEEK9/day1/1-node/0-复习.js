// a.js 中要把其他模块需要的方法或者属性导出
function fn() {}
function sum() {}
// module.exports = fn; // 这样导出，直接导出的就是fn这个函数本身，如果导入a.js模块，得到的也是fn函数；

// exports.fn = fn; // 这样导出，直接导出的是一个对象，对象中有一个fn属性，它的值是fn这个函数；如果导入a.js 得到一个对象，
// 需要 对象.fn 调用fn函数；

module.exports.fn = fn; // 这样导出，导出的也是一个对象

// b.js 导入 ： 导入使用require方法


// 包管理器: npm / yarn
// npm / yarn 用来管理依赖包: 记录项目中的依赖包有哪些(package.json);安装依赖.卸载依赖;

// 新建的项目(还没安装依赖的项目), 需要首先在项目中生成一个package.json文件
// 开发依赖: 只在开发时有用,大多数情况下都是一些工具性的东西; webpack; package.json -> devDependencies
// 生产依赖: 代码在运行时需要的依赖就是生产依赖; package.json -> dependencies

// npm 安装开发和生产依赖
// 开发依赖: npm install 依赖包 --save--dev
// 生产依赖: npm install 依赖包 或者 npm install 依赖包 --save

// node-modules 文件夹
// 通过npm 或者yarn安装的依赖都会安装到node_modules
// 真实项目中,项目在发版上线时并不会上传node_modules,而是到了服务器上,执行npm install, 这个命令会按照package.json文件中的
// 记录的依赖重新安装所有的依赖;

// npm install 命令
// package.json 中记录了哪些依赖, npm install 会把其中记录的所有依赖都安装;

// npm uninstall 依赖包 卸载 依赖

// yarn
// 安装开发依赖: yarn add 依赖包 --dev
// 安装生产依赖: yarn add 依赖包 --save
// 移除: yarn remove 依赖包
// 按照package.json 安装 yarn

// Node.js 内置模块
// 1. http 用来提供http服务的模块
// 1.1 创建服务 http.createServer(callback);

// 2. fs 文件读写模块
// 2.1 fs.readFile(path, option, callback); 异步读取
// 2,2 fs.readFileSync(path, option); 方法会返回同步读取的内容
// 2.3 fs.writeFile(path, data, option, callback); 异步写入文件
// 2.4 fs.writeFileSync(path, data, option); 同步写入;  同步/异步写入都是覆盖式写入
// 2.5 fs.appendFile(path, data, option, callback); 异步追加写入文件
// 2.6 fs.appendFileSync(path, data, option); 同步追加内容

// 3. url 解析请求的url
// url.parse(req.url, true) 第二个参数传true表示把问号传参解析成对象;
// let urlObj = url.parse(req.url, true);
// console.log(urlObj.query);


