let HtmlWebpackPlugin = require('html-webpack-plugin'); // html-webpack-plugin 是第三方依赖,需要单独安装

module.exports = {
    entry: __diranme + '/app/main.js', // webpack 打包的起点， 从这个起点查找依赖关系
    output: {
        path: __diranme + 'public', // 指定打包以后文件的输出路径
        filename: 'bundle[hash:5].js', // 打包以后输出后的文件名，后面如果有[hash:5], 表示文件名后面跟5位的md5戳记，为了区
        // 别上一次打包的文件，如果被打包的文件没有发生变更，hash不变（hash是由文件内容计算出来的）
    },
    devtool: 'eval-source-map', // souce-map 是浏览器的机制，可以把打包后的文件虚拟还原成打包之前的样子，source-map越详细，
    // 打包的速度越慢; webpack可以生成source-map
    devServer: { // webpack-dev-server 是webpack在开发中开启的本地服务
        contentBase: './public', // 启动server加载html所在的路径
        port: 8080, // webpack启动的端口
        historyApiFallback: true, // SPA(单页面应用)切换路由时页面不刷新;
        inline: true, // 文件发生变化时,浏览器自动刷新
        proxy: {
            '/api': { // /api 就是一个标识符,如果接口中包含 /api 就采用对应的代理策略
                target: 'http://www.itozi.com', // 目标域
                changeOrigin: true, // 当target 是一个域名时要设置
                secure: false // 不校验安全与否
            },
            '/order': {

            }
        }
    },
    // module 用来配置loaders的
    // loader 需要单独安装:
    // babel-loader => babel-core babel-loader@7.1.5 babel-preset-env babel-preset-react
    // css-loader => style-loader css-loader
    // less-loader => less-loader
    // url-loader => url-loader
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: {
                    loader: 'url-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __diranme + '/public/index.html' //会按照这个模拟生成html,并且把打包后的文件引入进去
        })
    ]
};