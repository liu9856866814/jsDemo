// async 和 await 是ES6新增的关键字,用于把异步变同步;
// async 在函数定义时使用,用async定义的函数默认返回一个Promise实例,可以直接.then

async function fx() {
    // console.log(1);
}

let obj = {
    async getName(){ // async还可以定义对象的方法

    }
};
fx().then(() =>{ // 因为async函数返回了Promise实例,所以可以.then
    // console.log(2);
});

function g(){
    return 1;
}

function h(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve('xyz');
        },3000)
    })
}
// await (要求和async一起使用)
async function fn() {
    // await 等待,等右侧的代码执行完;
    // await 用法:
    // let x = await g();
    // console.log(x);
    // 1. 如果await右侧是同步的代码,就会让同步代码执行;如果执行的是一个函数,还会把函数的返回值给到await左边的变量;
    let y = await h();
    console.log(y);
    console.log(123);

    // h().then((res) => console.log(res)) 有了async 和await ,就不用写.then了;因为await可以取得Promise resolve时传入的值

    // 2. 如果await右侧是一个Promise实例,或者一个方法返回了Promise实例,await会等着Promise的实例resolve,并且在实例resolve之前,
    // await后面的代码不执行;并且还会拿到Promise在resolve时传入的值,并且赋值给等号左侧变量;

    // 3. await 会把await面的代码变成微任务;
}
fn();

// 真实项目中, async和await常常结合AJAX和Promise一起使用;

// 用async 和 await改写先请求login.json再请求banner.json,并且在请求结束后,渲染到页面中;
// await后面常跟一个Promise实例或者跟返回Promise实例的方法
function getLogin() {
    return new Promise((resolve,reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('get','json/login.json');
        xhr.onreadystatechange = function () {
            if(xhr.readyState === 4 && xhr.status === 200){
                resolve(JSON.parse(xhr.responseText));
            }
        };
        xhr.send();
    });
}
function getBanner(token) {
    return new Promise((resolve, reject)=>{
        let xhr = new XMLHttpRequest();
        xhr.open('get','json/banner.json?token=' + token);
        xhr.onreadystatechange = function () {
            if(xhr.readyState === 4 && xhr.status === 200){
                resolve(JSON.parse(xhr.responseText));
            }
        };
        xhr.send();
    })
}
async function bindHTML() {
   let login = await getLogin();
   // 从登录信息中取得token,把token传给getBanner; (第二个接口依赖第一个接口中的内容,用await等前面的接口响应完,就可以拿到
    // 数据,然后把你想要的数据从里面拿出来 ,再传给下一个请求)
    let { data: { token } } = login;
    let banner = await getBanner(token);
    console.log(login, banner);
    // 这下面可以执行绑定数据的操作
    // ...
    // 这里可以写开启轮播图的事情

}
bindHTML().then(() =>{
    // 还可以在这个回调函数写开启轮播的事情
});