let $ = selector => document.querySelector(selector);
let username = $('#username');
let age = $('#age');
let phone = $('#phone');
let address = $('#address');
let saveBtn = $('#save');

// 区分是新增还是删除: 新增时url没有id的问号传参,修改时url是带有id的问号传参的;
let idReg = /id=(\d+)/g;
let isModify = idReg.exec(window.location.search); //exec 方法如果捕获不到返回null,捕获到返回数组,第一项是大正则捕获的内容,
// 从第二项开始,都是小分组捕获到的内容;

let api = ''; // 根据是新增还是修改,保存不同的接口;
if(isModify){
    // isModify 捕获到的是一个数组; 修改
    // 如果是修改需要回填页面中input的值

    // 回显(回填)用户原有的数据

    // 发送ajax数据指定id的数据:
    let [ , id] = isModify; // 从正则捕获的结果中获取id
    axios.get(`/api/getInfo?id=${id}`).then(({data}) => {
        if(data.code === 0){
            // 通过给input的value赋值,回显原有的数据
            username.value = data.data.name;
            age.value = data.data.age;
            phone.value = data.data.phone;
            address.value = data.data.address;
        }else{
            alert(data.msg);
        }
    });
    api = '/api/modifyInfo'; // api保存修改的接口
}else{
    // isModify 是null; 新增
    api = '/api/addInfo'; // 用于新增的接口
}

saveBtn.onclick = function () {
    // 获取input中的值
    let data = {
        name: username.value,
        age: age.value,
        phone: phone.value,
        address: address.value
    };
    // 如果是修改,需要给data增加一个id属性;
    if(isModify) data.id = isModify[1];

    // 接着把data通过post请求发给接口
    axios.post(api, data).then(({data}) => {
        if(data.code === 0){
            window.location.href = '/';
        }else{
            alert(data.msg);
        }
    });
};








