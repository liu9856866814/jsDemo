// 中间件: middleware
// 一个在请求之后,响应之前,被调用的函数; 中间件可以访问请求对象和响应对象;一般都是有某些固定功能,如express静态资源服务中间件;
// 或者使用中间件做某些拦截, 例如登录状态的拦截;

// app.use() 使用中间件的方法;

let express = require('express');
let bodyParser = require('body-parser'); // 用来解析post请求数据的中间件
// 3. 创建服务
let app = express();

app.use(function (req, res, next) {
    // req 是请求对象; 可以向req上面扩展东西;
    // res 是响应对象
    // next 交出控制权, 把请求交给下一个中间件或者交给真正响应这个请求的函数;
    console.log(1);
    req.now = "It's time to battle"; // 在前面的中间件扩展内容,后面中间件可以获取这个属性
    next(); // next() 把请求交给下一个中间件,或者真正响应这个请求的程序; 如果不next,请求一直处于被挂起的状态;
});

app.use(function (req, res, next) {
    // console.log(2);
    console.log(req.now);
    res.send({
        where: '第二个中间件'
    }); // 在中间件中可以提前结束响应
});

app.get('/api/getList', function (req, res) {
    console.log(3);
});

app.listen(8000, () => console.log('port 8000 is on'));
