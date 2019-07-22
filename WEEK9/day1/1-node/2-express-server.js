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

// 动态路由: 就是接口有一部分不再是定死的了, 带有: 的就是动态的; 将来这一部分是由客户端传递的
app.get('/order/details/:orderId', (req, res) => {
    // console.log(req.params); // {orderId: 具体的值} // req.params 是动态路由的值, 是一个对象, 对象中的属性是动态路由冒号
    // 后面的, 值是客户端请求时传递的啥,这里收到的就是什么; 例如客户端请求 /order/details/123 req.params 就是{orderId: 123}

    // 作用: 简化url, 客户端不用再问号传参了;
    res.send({
        code: 0,
        data: req.params,
        msg: 'ok'
    })

});

// app.param() 方法: 拦截带有指定动态路由的请求
app.param('orderId', (req, res, next) => {
    console.log(req.params);
    // 拦截一般都是对动态路由做校验,如果校验通过,要执行next() 放行;否则客户端的请求一直处于挂起状态;如果校验失败,可以通过
    // res.send 提前结束响应
    // 验证orderId必须是纯数字
    if(/~\d+$/.test(req.params.orderId)){
        next();
    }else{
        res.send({
            code: 1,
            data: req.params,
            msg: 'no ok'
        })
    }
});

app.listen(8000, () => console.log('port 8000 is on'));
