// express 是node.js的框架,用于快速开发服务端程序,让服务端的代码组织起来更清晰;

// 1. 安装express: npm install express --save
// 2. 导入express

let express = require('express');
let bodyParser = require('body-parser'); // 用来解析post请求数据的中间件
// 3. 创建服务
let app = express();

// 4. 提供静态资源服务
app.use(express.static(__dirname)); // 使用静态资源中间件

// app.use(bodyParser.urlencoded({extended: false})); // body-parser处理form-data的post数据
app.use(bodyParser.json()); // 使用body-parser中间件处理json的post的数据,处理完会挂载到req.body上;

// 5. 处理ajax接口, 根据不同的pathname做不同的处理,这种机制叫做路由;
app.get('/api/getList', (req, res) => {
    // req 是请求对象
    // res 是响应对象
    // 这个req和res是经过express包装过的对象,和原生node.js的req和res不太一样
    console.log(req.query); // req.query 是get请求问号传参的对象
    // req.headers 请求头信息
    console.log(req.path); // req.path 请求路径
    console.log(req.host); //
});

// 处理post请求的接口
app.post('/api/testPost', (req, res) => {
    console.log(req.body); // 使用body-parser中间件以后,通过req.body获取post的数据;
    res.send({
        code: 0,
        data: {post: true},
        msg: 'ok'
    })
});

app.listen(8000, () => console.log('port 8000 is on'));
