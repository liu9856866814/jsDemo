let express = require('express');
let bodyParser = require('body-parser');
let fs = require('fs');

let app = express();
let database = __dirname + '/custom.json';
let d = {
    code: 0,
    data: null,
    msg: 'ok'
};

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use((req, res, next) => {
    fs.readFile(database, "utf8", (err, data) => {
        if (err) {
            console.error("信息读取失败");
        } else {
            req.data = JSON.parse(data);
            next();
        }
    })
});

app.get('/api/getList',(req, res) => {
    d.data = req.data;
    res.send(d);
});

app.get('/api/removeInfo', (req, res) => {
    let {id} = req.query;
    let {data} = req;
    let cId = data.findIndex(item => +item.id === +id);
    if(cId !== -1){
        data.splice(cId, 1);
        fs.writeFileSync(database, JSON.stringify(data), 'utf8');
        d.data = data;
    }else{
        d.code = 1;
        d.msg = 'id错误';
    }
    res.send(d);
});

app.get("/api/getInfo", (req, res) => {
    let { id } = req.query;
    let { data } = req;
    let isIndex = data.find(item => +item.id === +id);
    if (isIndex) {
        d.data = isIndex;
    }
    res.send(d);
});

app.post('/api/addInfo', (req, res) => {
    let {body, data} = req;
    console.log(body);
    let isReg = data.find(item => item.name !== body.name);
    body.id = data[data.length - 1].id + 1;
    data.push(body);
    d.data = data;
    fs.writeFileSync(database, JSON.stringify(data), 'utf8');
    res.send(d);
});

app.post('/api/modifyInfo', (req, res) => {
    let {body, data} = req;
    let {id} = body;
    let cId = data.findIndex(item => +item.id === +id);
    data[cId] = body;
    fs.writeFileSync(database, JSON.stringify(data), 'utf8');
    res.send(d);
});

app.listen(8000, () => console.log('port 8000 is on'));