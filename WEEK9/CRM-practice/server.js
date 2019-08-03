// 1. 导入内置/第三方模块
let http = require('http');
let url = require('url');
let fs = require('fs');
let mime = require('mime');

// 2. 创建服务
let server = http.createServer((req, res) => {
    let urlObj = url.parse(req.url, true);
    let { pathname, query } = urlObj;
    let filePath = '';
    let contentType = '';

    if(pathname === '/' || /(\.\w+)$/.test(pathname)){
        // 静态资源服务

        if(pathname === '/'){
            filePath = __dirname + '/index.html';
            contentType = 'text/html';
        }else{
            filePath = __dirname + pathname;
            contentType = mime.getType(pathname);
        }
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
        // ajax请求
        res.setHeader('Content-Type', 'application/json;charset:utf-8;');
        let database = __dirname + '/custom.json';
        let d = {
            code: 0,
            data: null,
            msg: 'ok'
        };

        // 请求首页列表的接口
        if(pathname === '/api/getList'){
            let content = JSON.parse(fs.readFileSync(database, 'utf8'));
            d.data = content;
            // console.log(d.data);
            res.end(JSON.stringify(d));
        }

        // 删除接口
        if(pathname === '/api/removeInfo'){
            let {id} = query;
            let content = JSON.parse(fs.readFileSync(database, 'utf8'));
            let delIndex = content.findIndex(item => +item.id === +id);
            content.splice(delIndex, 1);
            fs.writeFileSync(database, JSON.stringify(content), 'utf8');
            console.log(d.data);
            res.end(JSON.stringify(d));
        }

        // 新增接口
        if(pathname === '/api/addInfo'){
            let dataStr = '';
            req.on('data', (chunk) => {
                dataStr += chunk;
                console.log(chunk);
            });

            req.on('end', () => {
                let dataObj = JSON.parse(dataStr);
                let content = JSON.parse(fs.readFileSync(database, 'utf8'));
                let isReg = content.some(item => item.name === dataObj.name); // 结果是true/false
                if(isReg){
                    d.code = 1;
                    d.msg = '该用户名已经注册啦，换个名字试试吧';
                }else{
                    dataObj.id = +content[content.length-1].id + 1;
                    console.log(dataObj);
                    content.push(dataObj);
                    fs.writeFileSync(database, JSON.stringify(content), 'utf8');
                }
                console.log(d);
                res.end(JSON.stringify(d));
            })
        }

        // getInfo 获取需要修改信息id的接口
        if(pathname === '/api/getInfo'){
            let {id} = query;
            console.log(query.id);
            let content = JSON.parse(fs.readFileSync(database, 'utf8'));
            let curInfo = content.filter(item => +item.id === +id);
            d.data = curInfo;
            res.end(JSON.stringify(d));
        }

        // modifyInfo
        if(pathname === '/api/modifyInfo'){
            let dataStr = '';
            req.on('data', (chunk) => dataStr += chunk);
            req.on('end', () => {
                let dataObj = JSON.parse(dataStr);
                let content = JSON.parse(fs.readFileSync(database, 'utf8'));
                let dataIndex = content.findIndex(item => +item.id === +dataObj.id);
                content[dataIndex] = dataObj;
                fs.writeFileSync(database, JSON.stringify(content), 'utf8');
                res.end(JSON.stringify(d));
            });
        }
    }

});

// 3. 监听端口号
server.listen(8001, () => console.log('port 8001 is on'));