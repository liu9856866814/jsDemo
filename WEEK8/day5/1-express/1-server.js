// 服务端程序:
// 1. 创建服务
// 2. 监听端口
// 3. 提供静态资源服务
// 4. 处理ajax接口

// express 是Node.js的一个框架, 用来快速开发服务端应用程序;
// express可以让服务端的代码组织更简单,更清晰;

// express 是node的和第三方依赖,需要安装然后导入使用;

// 1. 安装express
// npm install express --save 或者 yarn add express --save

// 2. 导入express
let express = require('express'); // express 是第三方的依赖,不用写路径;
let fs = require('fs');
let bodyParser = require('body-parser'); // 导入body-parser
// 3. 创建服务
let app = express(

);

// 4. 提供静态资源服务
app.use(express.static(__dirname)); // app.use() 是express使用中间件的方法,中间件可以理解成工具,使用这个工具就可以让咱们的
// 服务有了某个功能;

// express.static(path) express提供静态资源服务的中间件; path是一个路径,告知express静态资源文件保存的目录;
app.use(bodyParser.json()); // 使用body-parser 解析客户端post语法发送过来的参数, body-parser解析完会在req增加一个body属性,
// body属性值存储了所有的post数据(body-parser只能解析json或者form表单数据不能解析二进制的文件流)

// 5. 配置路由(写接口)

// 5.1 GET 请求
app.get('/api/getUser', function (req, res) {
    // req 和res 是express包装过的对象
    // req.query 客户端get请求的参数;
    console.log('/api/getUser 请求了');
    console.log(req.query);
    let d = {
        code: 0,
        data: null,
        msg: 'ok'
    };
    let con = JSON.parse(fs.readFileSync('./user.json', 'utf8'));
    let itemById = con.find(item => +item.id === +req.query.id);
    d.data = itemById;
    res.send(d); // res.send() 方法和原生end不同, send可以直接传对象 end只能字符串或者Buffer
});

// 5.2 POST 请求
app.post('/api/register', function (req, res) {
    // express post 请求获取客户端post过来的数据需要使用body-parser中间件
    // 使用body-parser:
    // 1. 第三方的依赖,需要安装 : npm install body-parser --save
    // 2. 导入
    // 3. app.use(中间件)
    // console.log(req.body);
    let newUser = req.body;
    let users = JSON.parse(fs.readFileSync('./user.json', 'utf8'));

    // 为新用户添加id
    newUser.id = users[users.length - 1].id + 1;

    // 把newUser 添加到users中
    users.push(newUser);

    // 写入user.json
    fs.writeFileSync('./user.json', JSON.stringify(users), 'utf8');
    res.send({
        code: 0,
        data: null,
        msg: 'ok'
    })
});

// 5.3 无论post和get 都会处理:
app.all('/abc/xyz', function (req, res, next) {
   // 这个回调,无论get和post请求,都会执行

});

// 监听端口
app.listen(8000, () => console.log('port 8000 by express is on'));