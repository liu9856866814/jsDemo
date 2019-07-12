// 接口 login.json
// 参数: user_name 用户名 password 密码
// 返回值:
/*
* {
*   code: 0, // 0 表示登录成功
*   data: {},
*   msg: 'ok'
* }
*
* */
// 点击登录时把用户名和密码传递给服务器,如果登录成功,alert提示登录成功,否则alert登录失败,并且把服务器返回的内容一并alert出来

// 1. 绑定点击事件
// 2. 在点击事件函数中,获取用户输入的密码和用户名
// 3. 把上一步获取的数据传递给接口(get / post请求怎么传)
// 4. 根据接口的code值作出不同的操作:

let uName = document.getElementById('uName');
let pwd = document.getElementById('pwd');
let btn = document.getElementById('submit');
/*btn.onclick = function(){
    let nameValue = uName.value; // 获取用户名input中输入的内容
    let passValue = pwd.value; // 获取密码input输入的内容
    let xhr = new XMLHttpRequest();
    // 1. 用get请求
    xhr.open('get',`json/login.json?user_name=${nameValue}&password=${passValue}`,true); // 问号传参时要写key=value; key不能
    // 瞎写,接口文档中规定了参数的名字user_name、password,传参时key必须和接口文档上写的一样;参数的值就是对应页面中用户输入的值；
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200){
            // ajax请求已经完成，并且服务端正确响应
            // 服务器通过响应告知我们登录的结果如何,根据登录的结果采取不同操作
            let res = JSON.parse(xhr.responseText);
            console.log(res.code);
            if(res.code === 0){
                alert(res.msg);
            }else{
                alert('登录失败' + res.msg);
            }
        }
    };
    xhr.send();
};*/

/*btn.onclick = function () {
    let nameValue = uName.value;
    let passValue = pwd.value;
    let xhr = new XMLHttpRequest();
    xhr.open('get',`json/login.json?user_name=${nameValue}&password=${passValue}`);
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200){
            let res = JSON.parse(xhr.responseText);
            if(res.code === 0){
                alert('登录成功')
            }else{
                alert('登录失败'+ res.msg);
            }
        }
    };
    xhr.send();
};*/

btn.onclick = function () {
    let nameValue = uName.value;
    let passValue = pwd.value;
    let xhr = new XMLHttpRequest();
    xhr.open('post',`json/login.json`);
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200){
            let res = JSON.parse(xhr.responseText);
            if(res.code === 0){
                alert('登录成功')
            }else{
                alert('登录失败'+ res.msg);
            }
        }
    };
    let data = {
        user_name: nameValue,
        password: passValue
    };
    xhr.send(JSON.stringify(data));
};
