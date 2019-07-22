// 这个index.js是运行在浏览器中的
let list = document.getElementById('list');
let searchBtn = document.getElementById('searchBtn');
let keyword = document.getElementById('keyword');
// 点击搜索或者enter键按下搜索查询输入框中id对应的用户信息
searchBtn.onkeydown = function () {
    let { value } = keyword; // 获取input输入的内容
    axios.get('/api/getUser?id=' + value).then((res) => {
        if(res.data.code === 0){
            console.log(res.data);
            bindHTML(res.data.data);
        }else{
            alert(res.data.msg);
        }
    });
};

// 按下enter键触发搜索
keyword.onkeydown = function (e) {
    let { value } = keyword; // 获取input输入的内容
    if(e.keyCode === 13){
        axios.get('/api/getUser?id=' + value).then((res) => {
            if(res.data.code === 0){
                console.log(res.data);
                bindHTML(res.data.data);
            }else{
                alert(res.data.msg);
            }
        });
    }
};

function bindHTML(data) {
    let str = ``;
    for(let key in data){
        str += `<li>${key}: ${data[key]}</li>`;
    }
    list.innerHTML = str;
}

// 用户注册
let username = document.getElementById('username');
let pwd = document.getElementById('pwd');
let registerBtn = document.getElementById('register');

registerBtn.onclick = function () {
    let name = username.value;
    let pwdVal = pwd.value;
    // post 发送给接口
    axios.post('/api/register', {
        name,
        pwd: pwdVal
    }).then((res) => {
        if(res.data.code === 0){
            alert('恭喜你, 注册成功');
        }else{
            alert(res.data.msg);
        }
    })
};
