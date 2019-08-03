// webpack 是基于Node.js的静态资源模块打包器; 它可以根据一个起点,查找各个模块之间的依赖关系,根据这些依赖关系把模块打成一个
// 或者多个包;

// 为什么使用 webpack?
// 1. webpack 对模块化的支持十分强大, 我们可以借助webpack使用模块化开发;
// 2. 可以帮我们处理Less, Sass 等css预处理语言;
// 3. 把基于JS的扩展语言,如 TS 处理成JS;
// 4. 配置代理,解决开发环境跨域问题;

// 全局安装webpack
// 1. webpack-cli: npm install webpack-cli -g
// 2. webpack: npm install webpack -g

// webpack-cli --entry ./app/main.js --output ./public/bundle.js
// --entry 指定入口文件
// --output 指定打包后输出的文件路径及文件名
// 这句命令: 以 ./app/main.js 为入口开始打包,最后把打包后的文件输出到./public/bundle.js

// 配置npm scripts
// 在package.json scripts 下面的start比较特殊, 执行start不需要写run, 直接写npm start
// 其他的命令要npm run 命令

// source-map
// 代码打包后,代码的可读性变的非常差,不利于调试.而浏览器有一种叫做source-map的机制,可以根据我们提供的source-map把打包后的
// 代码虚拟还原成打包之前的样子,方便开发调试;
// webpack可以自动生成source-map,需要配置即可;
// source-map 有很多种,source-map越详细,打包的速度就会越慢;
// source-map 虚拟还原出的js, 可以像调试真实的js一样,可以打断点;

// webpack-dev-server
// webpack 可以启动一个本地服务,主要有以下功能:
// 1. 静态资源服务
// 2. 让浏览器能够监听文件的变化,如果文件变化,页面自动刷新;
// 3. 可以代理客户端的请求,实现开发环境跨域
// 使用前安装webpack-dev-server

// loader: 帮助webpack处理非js的文件,因为webpack原则上webpack只处理js,处理其他文件就需要loaders;
// webpack 中一切皆模块,都可以import, 不是js的就需要loader的力量:

// babel-loader(ES/ES7 转ES5 或者JSX转js)

// css-loader style-loader




