let http = require('http');
let url = require('url');
let fs = require('fs');
let mime = require('mime');

// 2. 创建一个服务
let app = http.createServer((req,res) => {
    // req 请求对象: req 中有所有的客户端请求信息
    // res 响应对象: 提供属性和方法响应客户端请求
    let urlObj = url.parse(req.url, true);
    let { pathname, query} = urlObj;

    // 判断是静态资源请求还是动态ajax请求
    if(pathname === '/' || /(\.\w+)$/.test(pathname)){
        let filePath = '';
        let contentType = '';

        if(pathname === '/'){
            filePath = __dirname + '/index.html';
            contentType = 'text/html';
        }else{
            filePath = __dirname + pathname;
            contentType = mime.getType(pathname);
        }
        res.setHeader('Content-Type', contentType);
        fs.readFile(filePath,(err, data) => {
            if(err){
                res.statusCode = 404;
                // res.end('Not Found'); // 项目中如果请求内容404,还会返回一个漂亮页面怎么做到的? 当发现请求内容不存在的时候
                // 不是直接返回'not found' ,而是去读取一个404的页面,然后把这个404的页面返回给客户端,客户端就会渲染成404页面;
                let notFoundPage = fs.readFileSync('./404.html', 'utf8');
                res.end(notFoundPage);
            }else{
                res.end(data);
            }
        });
    }else{
        // get 请求
        // 获取所有的客户信息: 客户端请求接口,返回custom.json 中所有的客户信息; 传了id,返回指定id的信息,不传返回全部
        if(pathname === '/api/getList'){
            let d = {
                code: 0,
                data: null,
                msg: 'ok'
            };
            let { id } = query; // 获取客户端问号传参的id值;
            let con = JSON.parse(fs.readFileSync('./custom.json', 'utf8'));
            if(id){
                let itemById = con.find(item => +item.id === +id);
                // console.log(itemById);
                d.data = itemById;
            }else{
                d.data = con;
            }
            res.end(JSON.stringify(d));
        }

        // post
        if(pathname=== 'api/testPost'){
            let dataStr = '';
            req.on('data', chunk => dataStr += chunk);
            req.on('end', () => {
                let data = JSON.parse(dataStr);
                console.log(data);
                res.end(JSON.stringify({
                    code:0,
                    data:{
                        a: 1,
                        b: 2
                    },
                    msg: 'ok'
                }))
            })
        }
    }

});

// 3. 监听端口号
app.listen(8000, () => console.log('port 8000 is on'));