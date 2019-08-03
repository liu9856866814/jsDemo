let http = require('http');
let url = require('url');
let fs = require('fs');
let mime = require('mime');

let d = {
    code: 0,
    data: null,
    msg: 'ok'
};
let app = http.createServer((req, res) => {
    let filePath = '';
    let contentType = '';
    let urlObj = url.parse(req.url, true);
    let {pathname, query} = urlObj;
    if( pathname === '/' || /(\.\w+)$/.test(pathname)){
        if (pathname === '/'){
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
                res.end(`路径为${filePath}的路径不存在`);
            }else{
                res.end(data);
            }
        });
    }else{
        res.setHeader('Content-Type', 'application/json;charset:utf-8;');
        let database = __dirname + '/custom.json';
        let con = JSON.parse(fs.readFileSync(database, 'utf8'));
        // /api/getList
        if(pathname === '/api/getList'){
            d.data = con;
            res.end(JSON.stringify(d));
        }
        // /api/addInfo
        let str = '';
        if(pathname === '/api/addInfo'){
            req.on('data', chunk => str += chunk);
            req.on('end', () => {
                let dataStr = JSON.parse(str);
                let con = JSON.parse(fs.readFileSync(database, 'utf8'));
                let isReg = con.some(item => item.name === dataStr.name);
                if(isReg){
                    d.data = 1;
                    d.msg = 'name 为 '+ dataStr.name + '的用户已经存在,请换个名字试试吧';
                }else{
                    dataStr.id = con[con.length - 1].id + 1;
                    con.push(dataStr);
                    fs.writeFileSync(database, JSON.stringify(con), 'utf8');
                }
                res.end(JSON.stringify(d));
            })
        }

        // /api/getInfo
        if(pathname === '/api/getInfo'){
            let {id} = query;
            let con = JSON.parse(fs.readFileSync(database, 'utf8'));
            let curInfo = con.filter(item => +item.id === +id);
            console.log(curInfo+111111111);
            d.data = curInfo;
            res.end(JSON.stringify(d));
        }

        // /api/modifyInfo
        if(pathname === '/api/modifyInfo'){
            req.on('data', chunk => str += chunk);
            req.on('end', () => {
                let dataStr = JSON.parse(str);
                console.log(dataStr);
                let {id} = query;
                let con = fs.readFileSync(database, 'utf8');
                let nId = con.find(item => +item.id === +id);
                con[nId] = dataStr;
                fs.writeFileSync(database, JSON.stringify(con), 'utf8');
                res.end(JSON.stringify(d));
            })
        }

        // /api/removeInfo
        if(pathname === '/api/removeInfo'){
            let {id} = query;
            let con = JSON.parse(fs.readFileSync(database, 'utf8'));
            let rId = con.findIndex(item => +item.id === +id);
            con.splice(rId, 1);
            fs.writeFileSync(database, JSON.stringify(con), 'utf8');
            res.end(JSON.stringify(d));
        }

    }
});

app.listen(8888, () => console.log('8888 port is on'));