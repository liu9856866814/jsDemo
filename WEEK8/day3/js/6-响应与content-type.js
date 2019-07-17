// Content-Type:
// 服务端在响应客户端的请求时要设置响应内容的内容类型,即Content-Type; 当客户端收到服务端的响应内容后,会按照这个Content-Type
// 解析响应的内容;

// Content-type 是一个响应头

let http = require('http');
let url = require('url');
let fs = require('fs');
let contentTypes = {
    html: 'text/html',
    css: 'text/css',
    js: 'text/javascript',
    jpg: 'image/jpg',
    ico: 'image/x-ico'
};

let server = http.createServer((req, res) => {

    let urlObj = url.parse(req.url);
    let { pathname } = urlObj;

    // 根据pathname里面的拓展名,判断内容类型是什么; .html -> text/html; .css -> text/css;
    // /a.html
    // /a.css
    // /a.js
    // /banner2.jpg
    let extReg = /\.(\w+)/;
    let types = extReg.exec(pathname); // 正则捕获,如果捕获到返回数组,捕获不到返回null

    if(types){
        let ext = types[1];

        res.setHeader('Content-Type', contentTypes[ext]);
        // res.setHeader(key, value); 设置响应头信息,key和value都是字符串类型的;
    }else{
        // res.setHeader('Content-Type', 'text/html');
    }

    console.log(types);

    let filepath = '';
    if(pathname === '/'){
        filepath = __dirname + '/index.html';
    }else{
        filepath = __dirname + pathname;
    }
    fs.readFile(filepath, (err, data) => {
        if(err){
            res.end('NOT FOUND');
        }else{
            res.end(data);
        }
    })
});

server.listen(8000, () => console.log('port 8000 is on'));