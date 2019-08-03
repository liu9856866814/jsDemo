let $ = selector => document.querySelector(selector),
    name = $('#name'),
    age = $('#age'),
    phone = $('#phone'),
    address = $('#address'),
    saveBtn = $('#save-btn');

// 先区分是修改还是新增，通过有没有问号传参
let isId = /id=(\d+)/g;
let isModify = isId.exec(window.location.search);
let api = '';
if (isModify){
    let [, id] = isModify;
    axios.get('/api/getInfo?id=' + id).then(({data}) => {
        console.log(data);
        if(data.code === 0){
            name.value = data.data[0].name;
            age.value = data.data[0].age;
            phone.value = data.data[0].phone;
            address.value = data.data[0].address;
        }else{
            alert(data.msg);
        }
    });
    api = '/api/modifyInfo';
}else{
    api = '/api/addInfo';
    console.log(222);
}

saveBtn.onclick = function () {
    console.log(1);
    let data = {
        name: name.value,
        age: age.value,
        phone: phone.value,
        address: address.value
    };
    console.log(data);
    if (isModify) data.id = isModify[1];
    axios.post(api, data).then(({data}) => {
        if(data.code === 0){
            console.log(data);
            window.location.href = '/';
        }else{
            alert(data.msg);
        }
    });
};