// url 模块也是Node.js的内置模块,是用来解析url的;
let http = require('http');
let url = require('url');
let fs = require('fs');

// 1. 创建一个服务
let server = http.createServer((req, res) => {
    // console.log(req.url); 客户端请求的url
    // console.log(req.headers.cookie); 客户端带来的cookie
    let urlObj = url.parse(req.url, true); // url.parse() 解析请求url的方法,第二个参数传true,把url问号传参格式化成一个对象,
    // 并挂载在query属性上;
    console.log(urlObj);
    // pathname 客户端请求的路径
    // search 客户端问号传参的内容(带问号)
    // query 客户端传递的查询字符串(不带问号)
    console.log(111);
});

// 2. 监听端口号
server.listen(8000, () => console.log('port 8000 is on'));