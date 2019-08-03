let express = require("express");
let bodyParser = require("body-parser");
let fs = require("fs");
let d = {
    code: 0,
    data: null,
    msg: "ok"
};
let database = __dirname + "/custom.json";
let app = express();
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use((req, res, next) => {
    fs.readFile(database, "utf8", (err, data) => {
        if (err) {
            console.log("信息读取失败~~~");
        } else {
            req.data = JSON.parse(data);
            next();
        }
    })

});
app.get("/api/getList", (req, res) => {
    d.data = req.data;
    res.send(d);
});
app.get("/api/removeInfo", (req, res) => {
    let { id } = req.query;
    let { data } = req;
    let rId = data.findIndex(item => +item.id === +id);
    if (rId !== -1) {
        data.splice(rId, 1);
        d.data = data;
        fs.writeFileSync(database, JSON.stringify(data), "utf8");
    } else {
        data.code = 1;
        data.msg = "该用户不存在";
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

app.post("/api/addInfo", (req, res) => {
    let { body, data } = req;
    let isIndex = data.find(item => item.name === body.item);
    if (isIndex) {
        data.code = 1;
        data.msg = "该用户名已经存在";
    } else {
        body.id = +(data[data.length - 1].id) + 1;
        data.push(body);
        d.data = data;
        fs.writeFileSync(database, JSON.stringify(data), "utf8");
    }
    res.send(d);
});
app.post("/api/modifyInfo", (req, res) => {
    let { body, data } = req;
    let { id } = body;
    let mId = data.findIndex(item => +item.id === +id);
    if (mId !== -1) {
        data[mId] = body;
        d.data = data;
        fs.writeFileSync(database, JSON.stringify(data), "utf8");
    } else {
        d.code = 1;
        d.msg = "id为" + id + "该用户信息不存在";
    }
    res.send(d);
});
app.listen(8000, () => console.log("port 8000 is on"));