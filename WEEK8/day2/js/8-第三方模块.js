// 第三方的模块:
// 我们使用的第三方的模块也称为依赖包.需要使用包管理器npm或者yarn安装(下载);

// 通过npm在没有依赖包的目录中安装依赖的步骤:
// 1. npm生成一个package.json 文件,这个package.json是用来记录当前项目中的依赖包的;

// 2. 安装项目依赖(根据项目需要安装依赖)
// 生产依赖和开发依赖
// 生产依赖: 项目在运行时需要的包,比如jQuery
// 开发依赖: 只在开发的过程中有用的依赖包(大多数都是工具性的包,比如gulp/ webpack等打包工具)

// 3. 安装依赖包的命令: npm install 依赖包名称 参数
// 1. 无参数 安装到node_modulws中,默认当做生产依赖;
// 2. -g 全局安装,全局安装后再命令行里面可以使用;
// 3. -save 安装生产依赖,把依赖包下载node_modules下,并且把这个包的信息添加到package.json下的dependencies中
// 4. -save-dev 安装开发依赖,把依赖包下载到node_modules下,并且把这个包的信息添加到package.json 下的devDependencies

// package.json 中的
// dependencies 记录的当前项目所需要的生产依赖包;
// devDependencies 记录的当前项目所需要的开发依赖包;

// node_modules: 安装依赖时会自动生成这样一个文件夹;所有通过npm或者yarn 安装的依赖都会放在这个里面;

// package.json 记录了当前项目所需的依赖包和版本;
// node_modules 文件夹不会来回传递,如果上线并不会把node_modules传到服务器上;
// 因为package.json文件记录了所有的依赖包,我们只需要在package.json所在的项目目录执行npm install
// npm install 根据package.json中记录的开发依赖和生产依赖去安装对就的依赖包;

// 清除npm的缓存:
// npm cache clean --force

// mac : sudo 以管理员身份运行该命令
// sudo npm install

