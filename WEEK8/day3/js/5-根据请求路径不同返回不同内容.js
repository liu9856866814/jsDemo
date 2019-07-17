// 根据请求的路径不同返回不同的html
// 获取当前的请求路径,读取路径对应的html然后返回给客户端即可;

let http = require('http');
let url = require('url');
let fs = require('fs');

// 创建一个服务
let server = http.createServer((req, res) => {
    // 1.1 解析url
    let urlObj = url.parse(req.url, true);
    let { pathname } = urlObj;

    // server启动时所在的路径,就是根目录 /
    // /a.html -> 读取 /a.html 文件
    // /b.html -> 读取 /b.html 文件
    console.log('pathname is' + pathname);
    console.log(__dirname + pathname);
    // 当我们访问localhost:8000时 pathname是/, 此时并没有/ 的html
    // 加一个判断,判断pathname是不是/ ,如果是/ 就要读index.html;
    let filePath = '';
    if(pathname === '/'){
        filePath = __dirname + '/index.html'
    }else{
        filePath = __dirname + pathname;
    }
    console.log(filePath);
    fs.readFile(filePath, function (err, data) {
        if(err){
            res.end('NOT FOUND')
        }else{
            res.end(data);
        }
    })
});

// 2. 监听一个端口号
server.listen(8000, () => console.log('port 8000 is on'));

// 服务端响应如html/css/js/图片等文件服务称为静态资源服务,html/css/js等文件称为静态资源;

// 如果pathname 类似 /home/help/search, 这种请求路径不是具体文件,一般都是ajax接口;一般都是处理动态的请求,根据客户端传递的
// 数据返回不同的内容;


