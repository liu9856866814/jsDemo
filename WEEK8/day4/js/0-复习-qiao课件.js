// 静态资源(html/css/js/图片等),当客户端请求静态资源文件时,提供响应这些请求的服务叫做静态资源服务

// 1. 导入模块
let http = require('http');
let url = require('url');
let fs = require('fs');
let mime = require('mime'); // 第三方的依赖,需要安装 npm install mime --save

// npm cache clean --force 如果安装报错清缓存
let server = http.createServer((req,res) => {
    // 1.1 解析url
    let urlObj = url.parse(req.url, true); // 传true表示把查询字符串变成对象,并且挂载到query上,通过urlObj.query.属性名,获取某个问号传参的值;
    // 1.2 获取 url的请求路径,根据客户端的请求路径返回不同的文件;如果路径是/ 返回index.html;
    let { pathname } = urlObj;
    let filePath = ''; // 记录真实请求文件路径
    let contentType = '';
    if( pathname === '/'){
        // 请求的是index.html
        filePath = __dirname + '/index.html';
        contentType = 'text/html';
    }else{
        filePath = __dirname + pathname;
        contentType = mime.getType(pathname);
    }
    res.setHeader('Content-Type', contentType);
    fs.readFile(filePath, (err, data) => {
        if(err){
            res.statusCode = 404;
            res.end(`the ${pathname} you are looking for is not found`);
        }else{
            res.end(data);
        }
    });
});

// 2. 监听一个端口号
server.listen(8000, () => console.log('port 8000 is on'));