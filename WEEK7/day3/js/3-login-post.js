
let uName = document.getElementById('uName');
let pwd = document.getElementById('pwd');
let btn = document.getElementById('submit');

// 2. 用post请求
btn.onclick = function(){
    let nameValue = uName.value;
    let passValue = pwd.value;
    let xhr = new XMLHttpRequest();
    // 2. 用post请求
    xhr.open('post','json/login.json');
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200){
            let res = JSON.parse(xhr.responseText);
            if(res.code === 0){
                alert('恭喜登录成功');
            }else{
                alert('登录失败' + res.msg);
            }
        }
    };
    // 处理post请求需要的数据:,但数据中的key要根据接口文档中的参数名来写;
    let data = {
        user_name: nameValue,
        password: passValue
    };
    xhr.send(JSON.stringify(data)); // post通过send方法把数据放到请求体,但是也只能接收字符串形式的,所以需要JSON.stringify
    // 把对象转成字符串;
};