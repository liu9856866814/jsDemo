let form = document.getElementById('login');
// 不使用ajax向服务器请求数据时,,
form.onsubmit = function (e) {
    console.log('SUBMIT');
    e.preventDefault(); // 表单提交有默认跳转的默认行为,阻止后就不会跳转了
}