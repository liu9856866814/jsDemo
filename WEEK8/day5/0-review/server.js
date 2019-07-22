// 1. 导入模块
let http = require('http');
let url = require('url'); // url 模块解析客户端请求的url的；
let fs = require('fs');
let mime = require('mime'); // 第三方的模块，需要用npm或者yarn安装

// 2. 创建服务
let server = http.createServer((req, res) => {
    // 2.1 解析客户端的请求的url
    let urlObj = url.parse(req.url, true);
    console.log(urlObj.query); // urlObj.query一直都有,parse时第二个参数传true,将会得到一个对象,如果不传将得到一个形如
    // key1=value1&key2=value2字符串;

    // 2.2 要获取请求的路径和url问号传参
    let { pathname, query } = urlObj;

    // 2.3 处理静态资源服务(响应html/css/js/图片等静态文件的服务)
    if( pathname === '/' || /(\.\w+)$/.test(pathname)){
        // 条件表示: 客户端请求的pathname是/ 或者pathname中带有扩展名
        // 满足这些条件就是静态资源服务
        let filePath = ''; // 设置一个变量保存客户端请求的文件的绝对路径
        let contentType = '';

        if(pathname === '/'){
            filePath = __dirname + '/index.html';
            contentType = 'text/html';
        }else{
            filePath = __dirname + pathname;
            contentType = mime.getType(pathname);
        }
        res.setHeader("Content-Type", contentType);

        fs.readFile(filePath,(err, data) => {
            if(err){
                res.statusCode = 404;
                res.end('Not Found');
            }else{
                res.end(data); // end方法只能传入字符串或者Buffer
            }
        })
    }else{
        // 这个else都是处理的ajax接口
        // ajax接口对于服务端也是pathname,只不过服务端响应这个pathname不再返回静态的资源了，而是根据客户端传递的参数返回
        // 客户端需要的内容；
        res.setHeader('Content-Type','application/json;charset=UTF-8;');
        // GET 返回指定id的用户
        if(pathname === '/api/getUser'){
            let d = {
                code: 0,
                data: null,
                msg: 'ok'
            }; // 初始化数据结构
            // 获取客户端传递过来的id
            let { id } = query; // 从query中解构id
            if (id) {
                console.log(JSON.parse(fs.readFileSync('./user.json', 'utf8')));
                let con = JSON.parse(fs.readFileSync('./user.json', 'utf8'));
                console.log('con', con);
                let userById = con.find(item => +item.id === +id);
                // 根据查找的结果userById判断有没有这个id对应的用户,如果userById为undefined说明没有找到
                if(userById){
                    d.data = userById;
                    res.end(JSON.stringify(d));
                }else{
                    d.code = -1;
                    d.msg = `id为${id}用户不存在`;
                    res.end(JSON.stringify(d));
                }
            }else{
                // id没能解构到,id是undefined
                d.code = 1;
                d.msg = '请传递用户id';
                res.end(JSON.stringify(d));
            }
        }

        // POST 用户注册
        if(pathname === '/api/register'){
            // 参数: name pwd
            let d2 = {
                code: 0,
                data: null,
                msg: 0
            };

            // 获取post过来的参数;
            let dataStr = '';
            req.on('data', (chunk) => dataStr += chunk);
            req.on('end', () => {
                // post数据接收完,就会执行这个回调
                // 解析用户psot过来的数据
                let dataObj = JSON.parse(dataStr);
                let {name} = dataObj; // 获取用户注册输入的用户名

                // 在注册前先判断这个用户是否已经被注册了;
                let users = JSON.parse(fs.readFileSync('./user.json', 'utf8'));
                // 从users中查找有没有k叫name的用户名,如果没有才注册
                let isReg = users.find(item => item.name === name);

                // 如果找到,isReg是一个对象,如果找不到是undefined
                if(isReg){
                    d2.code = 2;
                    d2.msg = '该用户名已经存在';
                    res.end(JSON.stringify(d2));
                }else{
                    // 此时说明用户名没有被注册,可以注册
                    // 给新数据生成一个id: 数据库中的最后一条数据的id + 1
                    dataObj.id = users[users.length -1].id + 1;

                    // 把数据push到user中
                    users.push(dataObj);

                    // 把数据写入到json文件中
                    fs.writeFileSync('./user.json', JSON.stringify(users),'utf8');
                    res.end(JSON.stringify(d2));
                }
            })
        }
    }


});

// 3. 监听端口号
server.listen(8000, () => console.log('port 8000 is on'));

/*
* 1. 进入到这个项目目录中
* 2. 用node启动server: node 服务脚本名
* 3. 进入浏览器访问localhost: 端口号
*
* !!! VSCode不要用go live; webStorm 不要用点击右上角的浏览器的方式打开
* npm install supervisor -g 不用重启服务 也可以查看服务端变更后的代码
* */