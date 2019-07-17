// 当用户请求的路径不存在时,返回状态码404,并且返回NOT FOUND 文字;

let http = require('http');
let url = require('url');
let fs = require('fs');
let mime = require('mime');

// 1. 创建一个服务
let server = http.createServer((req, res) => {
    // 1.1 解析url
    let urlObj = url.parse(req.url, true);
    let { pathname } = urlObj; // 获取当前请求的路径


    fs.stat(__dirname + pathname, (err, status) => {
        // fs.stat() 方法验证路径是否存在
        // 如果路径不存在err就是一个对象,如果存在err就是null
        if(err){
            // 如果代码运行到这里,说明err是个对象;即路径不存在;
            res.statusCode = 404; // res.statusCode 是一个表示HTTP status的属性,通过修改这个属性,来设置HTTP-status;
            // 404 表示请求的资源不存在;
            res.setHeader('Content-Type','text/plain;charset=UTF-8'); // text/plain;是普通文本的内容类型; 返回汉字时要设置编码;
            res.end('你要看的页面飞了,去看看别的吧~~~~');
        }else{
            // 如果代码执行到这里，说明路径有效，我们就需要返回对应的内容
            let filePath = "";
            // 因为访问localhost:8000 时pathname 是 /, 此时 需要返回index.html
            if(pathname === '/'){
                filePath = __dirname + '/index.html';
                res.setHeader('Content-Type', 'text/html')
            }else{
                filePath = __dirname + pathname;
                res.setHeader("Content-Type", mime.getType(pathname))
            }
            fs.readFile(filePath,(err, data) => {
                if(err){
                    res.statusCode = 500;
                    res.setHeader('Content-Type','text/plain;charset=UTF-8');
                    res.end('服务器去约会了，等会再来吧~~~')
                }else{
                    res.end(data);
                }
            })
        }
    })

});

// 2. 监听一个端口
server.listen(8000, () => console.log('port 8000 is on'));