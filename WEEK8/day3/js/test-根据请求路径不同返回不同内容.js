let http = require('http');
let url = require('url');
let fs = require('fs');

let server = http.createServer((req, res) => {
    let urlObj = url.parse(req.url);
    let { pathname } = urlObj;
    let filepath = '';
    if(pathname === '/'){
        filepath = __dirname + '/index.html';
    }else{
        filepath = __dirname + pathname;
    }
    fs.readFile(filepath, (err, data) => {
        if(err){
            res.end('NOT FOUND');
        }else{
            res.end(data);
        }
    })
});

server.listen(8000, () => console.log('port 8000 is on'));