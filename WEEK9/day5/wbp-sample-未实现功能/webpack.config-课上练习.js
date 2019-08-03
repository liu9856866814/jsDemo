// 真实项目中,我们采用webpack配置文件的方式来配置webpack打包的具体行为;
// 在项目的根目录下面新建一个webpack.config.js的文件; webpack运行时会自动加载这个文件,然后按照这个文件中的配置打包;

// 学习webpack,就是学习webpack配置文件的编写;webpack需要基于CommonJS风格导出一个配置对象;
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 把所有的配置写在这个对象中
    entry: __dirname + '/app/main.js', // entry 是webpack打包的起点, 从这个文件开始查找依赖关系
    output: {
        // path: __dirname + '/public', // 打包后文件输出的路径
        path: __dirname + '/dist', // 打包后文件输出的路径
        fileName: 'bundle2.js' //打包后输出的文件名
    }, // output 是webpack打包后,输出的文件路径和文件名;
    devtool: 'eval-source-map', // 生成source-map
    devServer: {
        // 配置webpack-dev-server
        contentBase: './public',
        historyApiFallback: true, // 单页面应用路由切换时不跳转页面, 这个东西很重要
        inline: true, // 当文件变化时,浏览器实时刷新
        proxy: {
            '/api': { // 当dev-server 检测到接口中包含 /api 它会帮你代理这个请求
                target: 'http://localhost:8000', // 目标域(目标源),dev-server会把带有 / api 的接口请求全部代理到target指向的域
                changeOrigin: true, // 当target是一个域名时需要配置此项
                secure: false // 设置https代理,不检查安全与否
            },
            '/home': {
                target: 'https://www.itouzi.com',
                changeOrigin: true,
                secure: false
            }
        },
        port: 8080,
    },
    // module 是配置loader的
    module: {
        rules: [
            {
                // 这一条就是一个规则
                test: /\.(jsx|js)$/, // 告知loader要处理的文件扩展名的规则
                use: { // use 是使用什么loader
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                },
                exclude: /node_modules/
            },
            {
                // 配置css-loader
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },{
                    exclude: /node_modules/
                    }
                ]
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                // 配置 url-loader 加载图片
                test: /\.(png|jpg|gif)$/,
                use: {
                    loader: "url-loader"
                }
            }
        ]
    },

    // 配置插件, 添加一个插件的实例
    plugins: [
        new HtmlWebpackPlugin({                                         
            template: __dirname + '/public/index.html' // 指定一个模板,webpack按照这个模板生成一个html,并且把打包后的js引入进去;
        })
    ]
};
