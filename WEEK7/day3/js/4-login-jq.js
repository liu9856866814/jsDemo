let submit = $('#submit');
let uName = $('#uName');
let pwd = $("#pwd");

/*submit.click(function () {
    let nameValue = uName.val();
    let passValue = pwd.val();
    $.ajax({
        url: `json/login.json?user_name=${nameValue}&password=${passValue}`, // url相对于html的路径
        type: 'get',
        cache: false,
        error(err){
            // http-status-code为4xx或者5xx时才会执行
            console.log(err);
        },
        success(data){
            if(data.code === 0){
                alert('登录成功')
            }else{
                alert('登录失败' + data.msg)
            }
        }
    })
});*/

submit.click(function () {
    let nameValue = uName.val(); // jq val() 方法获取input的值
    let passValue = pwd.val();
    // console.log(nameValue, passValue);
    $.ajax({
        url: `json/login.json`, // url是相对于html的路径
        type: 'POST',
        data: {
            // 这个data是post时的请求体中的数据
            user_name: nameValue,
            password: passValue
        },
        cache: false,
        error(err) {
            // 这个error函数会在http-status-code为4xx或者5xx时才会执行
            console.log(err);
        },
        success(data) {
            if (data.code === 0) {
                alert('登录成功')
            } else {
                alert('登录失败：' + data.msg)
            }
        }
    })
});