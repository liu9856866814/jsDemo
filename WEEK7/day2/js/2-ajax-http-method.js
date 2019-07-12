let xhr = new XMLHttpRequest();
// 要给banner.json 传递几个参数
// name: mb
// age: 18
// job: teacher
// let rand = Math.random();
let rand = Date.now(); // Date.now() 获取当前的时间戳
xhr.open('GET','json/banner.json?name=mb&age=18job=teacher&clear_cache= '+ rand , true);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200){
        // xhr.readyState为4表示已经彻底的结束;
    }
};
xhr.send(); // send() 方法执行时还可以传参,这些参数是放在请求体中的

// GET 请求的参数 在控制台的headers最下面 QueryStringParameters


// 常用的HTTP请求方法
// 在ajax中,http请求方式就是open() 方法的第一个参数

// => 1. GET get请求用于从服务器获取数据,但是也可以少量的向服务器传递数据;

// get 请求的特点:

// 1.1 get请求通过向url末尾问号传参的形式向服务器传递数据,形如?name=mb&age=18&job=teacher 向url末尾拼接参数(这些参数也叫
// 查询字符串)时,如果原有的url中有?,就不需要再写问号,直接用&符号和之前的分隔;
// 这些参数以key=value的形式存在,key一般都是服务端的人定好的,听从服务端说传什么就传什么;
// 1.2 因为get发送数据给服务端,都是把数据拼接在url末尾,但是url的总长度是有限的;一般IE是2k,Chrome是8k;总之GET请求发送的数据很小;
// 1.3 get请求传递数据是以明文的形式传递,不安全;
// 1.4 get请求容易产生缓存,一般情况下访问接口的数据不需要缓存; 一般情况下,我们在url末尾拼接随机数或者时间戳来清除缓存;(
// 是因为浏览器如果发现url变化了,就不会用缓存的内容,而是重新请求);

// => 2. POST 一般用于把数据传递给服务器或者需要传递大量数据
// POST请求的特点:
// 2.1 post请求把数据放到请求体中传递给服务器;
// 2.2 因为发送给服务器的数据是放到请求体中的,所以大小没有限制;
// 2.3 post请求是把数据放到请求体里面,相对来说安全一点
// 2.4 post请求不会走缓存;

let xhr2 = new XMLHttpRequest();
// 要给banner.json 传递几个参数：
// name: mb
// age: 18
// job: teacher
// let rand = Math.random();
let data = {
    name: 'mb',
    age: 18,
    job: 'teacher'
};
xhr2.open('POST', 'banner.json', true);
xhr2.onreadystatechange = function () {
    if (xhr2.readyState === 4 && xhr2.status === 200) {
        // xhr.readyState为4表示已经彻底的结束；
    }
};
xhr2.send(JSON.stringify(data)); // 请求体中只能放字符串
// POST 请求的参数在headers最下面的RequestPayload


// 接口是后端的人定出来的,后端会给一个接口文档;接口文档中会对请求方法,传递的参数以及返回值的结构和类型;

/*
* 示例:
* 接口: /home/help/search
* 功能: 爱投资帮助中心根据输入关键查询相关内容
* 请求方式: get
* 参数: keyword string 用户输入关键字
* type 0 类型
* limit 10 每一页条数
* 返回值:
*   {
*     code: 0, 0 成功
*     data: {
*       listInfo: [{
*         id: 0,
*         title: '' 问题的标题
*       }]
*     }
*   }
* */

// 其他请求方式

// DELETE: 从服务器上删除数据
// HEAD 只获取响应头,不要响应体
// PUT 修改某些内容
// OPTIONS 查询服务器支持的HTTP请求方式
// TRACE 回显请求的内容,一般用于测试
// PATH 对PUT的补充,用于修改某些内容


console.log(1);
setTimeout(() =>{
    console.log(2);
    Promise.resolve().then(() => {
        console.log(3);
    })
},0);
Promise.resolve().then(() => {
    console.log(4);
}).then(() => {
    console.log(5);
});
console.log(6);


var num = 1;
var a = {
    num: 2,
    func1: function () {
        console.log(this.num)
    },
    func2: function () {
        setTimeout(function(){
            this.func1();
        },100)
    }
};
a.func2();
