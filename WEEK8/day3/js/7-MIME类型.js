// MIME: 多用途互联网邮件拓展; 每种文件都有自己特有的MIME类型,这个类型就是在响应时需要设置的内容类型;

// mime 依赖包, 是一个第三方的模块, 其中包含了绝大多数的文件的MIME类型;

// 使用第三方的依赖包:
// 1. 安装mime: yarn add mime --save
// 2. 引入第三方模块

let mime = require('mime');
let http = require('http');
let url = require('url');
let fs = require('fs');

let server = http.createServer((req, res) => {

    let { pathname }= url.parse(req.url);

    // 使用mime设置内容类型: mime.getType(pathname);
    // getType方法会返回pathname对应的内容类型

    let filepath = '';
    if(pathname === '/'){
        filepath = __dirname + '/index.html';
        res.setHeader('Content-Type', 'text/html'); // mime.getType() 不能处理/ 所以需要单独设置
    }else{
        filepath = __dirname + pathname;
        res.setHeader('Content-Type', mime.getType(pathname));
    }
    fs.readFile(filepath, (err, data) => {
        if(err){
            res.end('NOT FOUND');
        }else{
            res.setHeader('set-cookie','name=mabin;path=/;'); // 在服务端操作cookie;就是设置set-cookie的响应头
            res.end(data);
        }
    })
});

server.listen(8000, () => console.log('port 8000 is on'));