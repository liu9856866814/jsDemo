console.log(111000);
function fn() {
    return 1 + 1;
}

console.log(fn());
let xxxx = 12;
// 因为node没有html,如果js文件互相依赖,就要使用模块化把这个js文件中的内容导出,需要这些内容的模块导入 ;

// 所谓模块化: 把别人需要的东西导出去,如果不导出,别人拿不到;把自己需要的东西导入进来;别人的模块导出什么,我们导入的时候就能
// 拿到什么,别人没导出的我们拿不到;

// 导出方式:
// 1. 直接导出fn
// module.exports = fn;
// module.exports = xxxx;

// 2. exports.fn = fn; 导出一个对象,对象中有一个属性fn,属性的值是fn这个函数;
// 如果要导出多个,使用exports.属性名 = 属性值 形式;其中属性名自定义;但是导出时叫什么,导入时属性名要一致;
exports.fn = fn;
exports.abc = xxxx;


// 在nodejs中运行js
// 1. 找到要运行的js文件的目录
// 2. 在js文件所在的目录中,按住shift键 点击鼠标右键 选择 在此处打开powershell 窗口(win7 在此处打开命令行窗口)
// 3. 在命令行界面中输入: node 文件名 enter

// 在WebStorm/vscode中使用terminal(终端运行)
// 1. 在项目中找到js所在的文件夹
// 2. 右键'Open in Terminal' (在终端中打开)
// 3. node 文件名 回车

// 插件运行:
// 1. 安装 code runner插件,然后右键 run code
// 2. webStorm 右键 Run
