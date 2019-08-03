let express = require('express');
let bodyParser = require('body-parser');

// 用express 创建一个服务
let app = express();

// 使用中间件
app.use(express.static(__dirname)); // 静态资源服务
app.use(bodyParser.json()); // 用bodyParser处理post的数据

// 写接口
app.post('/api/addUser', (req, res) => {
    console.log(req.body);
    // 电话和姓名必填: 要求电话和姓名不能为空, 如果为空返回参数错误
    let {name, phone} = req.body;
    if(!name.trim() || !phone.trim()){
        res.send({
            code: 1,
            data: null,
            msg: '请输入姓名和电话'
        })
    }else{
        res.send({
            code: 0,
            data: null,
            msg: 'ok'
        })
    }

});

app.listen(8000, () => console.log('port 8000 is on'));
