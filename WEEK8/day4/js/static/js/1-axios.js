// 1. axios 是一个基于Promise的ajax库,用于客户端发送ajax请求;

// 2. 安装 axios
// npm install axios --save
// 因为ESModule 实现不完全,浏览器不能直接使用ESModule 语法
// CommonJS : 导出: module.exports.fn = fn;  导入: require(模块);
// ESModule: 导出 export 导入 import

// 所以需要使用script标签在使用之前引入到html中;

// 3. 常用的axios方法

// 3.1 get 请求
// axios.get(url?key=value&key2=value2);
// 返回Promise实例,可以直接.then
/*axios.get('/banner.json?key=1&name=mabin').then((res) => {
    console.log(res);
    // res 不是服务器返回的数据,而是一个经过包装后的对象;
    // res.data 属性保存着服务器返回给我们的数据
    // res.status http 请求的响应状态码
    // res.statusText 就是status对应的结果短语 200 是 OK

});*/

// 或者: 直接把参数放到一个对象中;
/*
axios.get('/banner.json',{
    params:{
        key1: 'value1',
        name: 'mabin',
        age: 18
    }
}).then((res) => {
    console.log(res);
});*/

// 3.2 post 请求
// axios.post(url, data)
// url 是接口
// data 对象, post的数据
// 返回Promise实例, 直接.then

/*axios.post('/banner.json', {
    name: 'mabin',
    age: 18,
    title: '宇宙集团军总司令'
}).then((res) => {
    console.log(res);
    // post 请求的res也是包装过的,其中的res.data 才是服务端真正返回的数据
});*/

// 并发多个请求,这些请求都结果之后再做处理;
// axios.all([axios请求1, axios请求2....])
// 返回Promise实例可以直接.then
// 但是then方法中要传入 axios.spread(callback)

axios.all([axios.get('/banner.json'), axios.get('/login.json')]).then(axios.spread((banner, login) =>{
    // spread 的回调参数是有特点的：
    // 第一个参数是all方法数组中第一个axios请求的结果
    // 第二个参数是all方法数组中第二个axios请求的结果
    // 以此类推, all方法数据里面有多少请求,spread回调就会对应有多少参数
    
    console.log(banner);
    console.log(login);
}));



