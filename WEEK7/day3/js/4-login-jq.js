let submit = $('#submit');
let uName = $('#uName');
let pwd = $("#pwd");

submit.click(function () {
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
});