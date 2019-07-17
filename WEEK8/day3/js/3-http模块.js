// 前端: 发起请求,获取数据,然后拿到数据渲染到页面中

// 后端(服务端): 响应请求,发送数据;

// 前后端通过 http 协议通信,前端通过 http 发请求向服务器要数据;服务端处理 http 请求,通过 http 协议向客户端发送数据;

// http 模块: http 是 Node.js 的内置模块;是用来处理客户端的请求的;

let http = require("http");
let fs = require('fs');
// 1. 处理客户端http请求,首先要创建一个服务;
// http.createServer() 创建一个服务
let server = http.createServer(function (request, response) {
    // 具体的处理http请求的代码要写在这个回调函数中;只要客户端请求一次,这个回调函数就会执行一次
    // request 请求对象 这个对象中包含了客户端的请求中所有的信息;
    // response 响应对象 这个对象中包含了所有用来响应客户端时所需要的方法和属性;
    console.log('请求来了');
    // 把 index.html 响应给客户端
    // 首先需要把index.html 读取出来,然后把读取的结果作为响应内容发送给客户端;
    fs.readFile( __dirname + '/index.html', (err, data) => {
        if(err){
            response.end('读取失败')
        }else{
            response.end(data); // 向客户端发送响应数据
        }
    });
    // 在响应客户端请求时,现在并没有判断客户端请求的是什么;当客户端收到index.html以后会解析html,解析时遇到script标签,而
    // script标签会再向服务器发送请求,而此时我们的服务只会响应index.html的内容,所以script标签收到的就是index.html的内容
});

// 2. 服务还需要监听端口号(练习阶段不要使用3000以下)
// 端口的范围: 0-65535
// server.listen(端口号, 监听端口成功执行的回调)
server.listen(8000, () => console.log('port 8000 is on'));
// 一个端口只能供一个服务监听,当前8000端口被server占用了,其他的服务就不能再用8000端口了;

// 写完脚本以后,还需要到命令行里面启动这个服务: node 文件名
// 去浏览器中访问: localhost:8000
// 为什么用localhost? 因为正常的请求是访问url,然后DNS负责把url解析成ip地址,然后请求ip地址;但是服务是运行在咱们的本地,本地的
// ip 127.0.0.1 ,而127.0.0.1 就是localhost
// 此时我们的电脑上既运行着客户端又运行着服务端;浏览器是客户端,用node启动的js脚本是服务端;

// 修改了服务端,server才要重启

