// 导入内置模块
let http = require('http');
let url = require('url');
let fs = require('fs');
let mime = require('mime');

// 2. 创建服务
let app = http.createServer((req, res) => {
    // 2.1 解析url
    let urlObj = url.parse(req.url, true);
    let { pathname, query } = urlObj;

    // 2.2 根据pathname判断是否是静态资源服务
    if( pathname === '/' || /(\.\w+)$/.test(pathname)){
        // 静态
        let filePath = '';
        let contentType = '';
        if(pathname === '/'){
            filePath = __dirname + '/index.html';
            contentType = 'text/html'
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
        // ajax 接口
        res.setHeader("Content-Type", 'application/json;charset=UTF-8;');
        let database = __dirname + '/custom.json'; // 存储数据库的绝对路径
        // 请求首页列表的接口
        if(pathname === '/api/getList'){
            let d = {
                code: 0,
                data: null,
                msg: 'ok'
            };

            // 读取全部信息
            let con = fs.readFileSync(database,'utf8');
            d.data = JSON.parse(con);
            res.end(JSON.stringify(d));
        }

        // 删除接口
        if(pathname === '/api/removeInfo'){
            let d2 = {
                code: 0,
                data: null,
                msg: '删除成功'
            };
            let { id } = query; // 获取客户端要删除的用户id

            // 把json文件读取出来
            let con = JSON.parse(fs.readFileSync(database, 'utf8'));

            // 用filter实现删除:
            // con = con.filter(item => +item.id !== +id);

            // 用splice删除: splice(index, 个数)
            let delIndex = con.findIndex(item => +item.id === +id); // 利用findIndex找到指定id的这一项的索引;
            // findIndex 返回满足条件的数组项的索引, 如果没有找到符合条件的 返回 -1;
            con.splice(delIndex, 1); // 删除这一项

            // 把删除完之后的结果写到json中
            fs.writeFileSync(database, JSON.stringify(con), 'utf8');

            // 删除完成后,返回删除是否成功
            res.end(JSON.stringify(d2));
        }

        // 获取指定id的用户信息
        if(pathname === '/api/getInfo'){
            let { id } = query;
            let con = JSON.parse(fs.readFileSync(database, 'utf8'));
            let itemById = con.find(item => +item.id === +id);
            let d3 = {
                code: 0,
                data: null,
                msg: 'ok'
            };
            if(itemById){
                d3.data = itemById;
            }else{
                d3.code = -1;
                d3.msg = `id为${id}的不存在`
            }
            res.end(JSON.stringify(d3));
        }

        // 新增用户
        if(pathname === '/api/addInfo'){
            let dataStr = '';
            req.on('data', (chunk) => dataStr += chunk);
            req.on('end', () => {
                let d4 ={
                    code: 0,
                    data: null,
                    msg: 'ok'
                };
                let data = JSON.parse(dataStr);
                // 判断用户名是否已经被注册
                let con = JSON.parse(fs.readFileSync(database, 'utf8'));
                let isReg = con.some(item => item.name === data.name); // 如果该用户名已经被注册,isReg是true,否则是false;
                if(isReg){
                    d4.code = 1;
                    d4.msg = '用户名已经被注册';
                    res.end(JSON.stringify(d4));
                }else{
                    // 自动生成id
                    data.id = +con[con.length-1].id + 1;
                    con.push(data);
                    fs.writeFileSync(database, JSON.stringify(con), 'utf8');
                    res.end(JSON.stringify(d4));
                }
            })
        }

        // 修改客户信息
        if(pathname === '/api/modifyInfo'){
            let d5 = {
                code: 0,
                data: null,
                msg: 'ok'
            };
            let dataStr = '';
            // 客户端post的数据处理
            req.on('data', chunk => dataStr += chunk);
            req.on('end', () => {
                let data = JSON.parse(dataStr); // 解析post数据
                let con = JSON.parse(fs.readFileSync(database, 'utf8'));

                // 修改: 把客户端指定id的那一条数据直接替换成客户端传递过来的;
                let itemIndex = con.findIndex(item => +item.id === +data.id); // 找到要修改的那一条数据的索引
                data.id = +data.id;
                con[itemIndex] = data; // 替换成客户端传过来的数据

                // 把修改完的数据,写入数据库
                fs.writeFileSync(database, JSON.stringify(con), 'utf8');
                res.end(JSON.stringify(d5));
            })
        }
    }
});

// 3. 监听服务
app.listen(8000, () => console.log('port 8000 is on'));