// 获取元素:
let $ = selector => document.querySelector(selector);
let username = $("#username");
let pwd = $("#pwd");
let loginBtn = $('#loginBtn');

// 2. 给loginBtn绑定点击事件
loginBtn.onclick = function () {
    // 获取表单的值
    let usernameValue = username.value;
    let pwdValue = pwd.value;
    axios.post('/api/login',{
        username: usernameValue,
        pwd: pwdValue
    }).then((res) => {
        // 根据返回内容,如果登陆成功就alert提示登录成功,如果登录失败alert提示登录失败的原因;
        if(res.data.code === 0){
            alert('登录成功');
        }else{
            alert(res.data.msg);
        }
    })
};