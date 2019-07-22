// 写一个服务,既可以处理静态资源文件请求,又可以响应ajax请求:

// 根据pathname不同,响应不同的内容;
// 静态资源文件请求的pathname: /(index.html) /a/xx.css xx.js xx.png...;

// ajax请求 pathname: /home/help/search; 而ajax接口是不带扩展名的;

let http = require('http');
let url = require('url');
let fs = require('fs');
let mime = require('mime');

// 1. 创建服务
let server = http.createServer((req, res) => {
    let urlObj = url.parse(req.url, true); // 处理url
    let { pathname, query } = urlObj; // 从urlObj 中获取pathname和query(query是客户端get请求时传递的问号传参,经过url模块解析后形成的一个对象)
    // 判断请求是静态资源请求还是动态的ajax请求;
    // 如果是静态资源文件请求pathname会是带有.xxx 扩展名或者是pathname是 /
    if(pathname === '/' || /()\.\w+)$/.test(pathname)){
        // 如何满足这个条件,说明请求的是静态资源文件
        let filePath = '';
        let contentType = '';
        if(pathname === '/'){
            filePath = __dirname + '/index.html';
            contentType = 'text/html';
        }else{
            filePath = __dirname + pathname;
            contentType = mime.getType(pathname);
        }
        // 设置响应头
        res.setHeader('Content-Type', contentType);
        fs.readFile(filePath, (err, data) => {
            if(err){
                res.statusCode = 404;
                res.end('Not Found');
            }else{
                res.end(data);
            }
        })
    }else{
        // else的情况就是ajax请求
        // 根据不同接口返回不同的内容,即根据pathname不同,做不同操作;这种机制叫做路由;
        // 因为现在ajax没有特殊情况,返回的都是json,所以在此处设置;
        // ajax请求的接口也是pathname,因为请求这个pathname不同返回静态资源文件,而是根据客户端的请求返回不同的内容;
        res.setHeader('Content-Type', 'application/json;charset=UTF-8');
        if(pathname === '/api/getBanner'){
            // 这个接口的作用就是返回指定id的banner图信息;
            let { id } = query; // 从query中获取客户端传过来的id,如果获取不到id就是undefined;
            // id存在返回指定id的, 不存在返回全部
            // console.log(typeof id);
            if(id){
                // 如果id存在
                let con = fs.readFileSync(__dirname + '/banner.json', 'utf8'); // 读取回来的结果是json格式的字符串;(现在没有数据库,真实项目中这里要查数据库)
                let itemById = dataArr.find(item => +item.id === +id); // 传过来的id是string类型的,而数组项的id是number类型的;需要转换;
                // find的结果有可能不存在,不存在时是undefined;
                let d = {
                    code: 0,
                    data: {
                        data: null,
                    },
                    msk: 'ok'
                };
                // find的结果有可能不存在,不存在的时是undefined
                if(itemById){
                    d.data.data = itemById;
                }else{
                    d.data.data = {};
                    d.code = -1;
                    d.msg = `id为${id}的banner不存在`
                }
                res.end(JSON.stringify(d)); // res.end() 只能接收Buffer或者字符串;所以需要把对象d转成JSON格式的字符串
            }
        }
    }








});