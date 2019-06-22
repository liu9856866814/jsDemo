/*
* 同步异步： js代码在执行时，浏览器会把这些代码分为同步执行和异步执行；
*   同步执行：按照顺序执行，前一个任务执行完下一个任务才能执行。
*   异步任务：当前任务需要过一会儿执行或者执行时机不确定（定时器就是过一会儿才执行；事件的执行时机是不确定的），浏览器不会等着
* 这些任务执行完，而是先把这些任务记录在一个地方（等待任务队列），等所有的同步任务都执行完，再去看这些异步任务；
*
*   常见的异步：
*   1. 所有的事件函数
*   2. 定时器的回调函数
*   3. ajax的异步情形
*   4. 回调函数也可以异步执行
*
*   浏览器实现异步的原理: js是单线程的，异步的实现依赖于浏览器的任务队列机制；
*   主任务队列：当前需要立即执行的同步任务
*   等待任务队列：不需要立即执行的异步任务；
*
*   当js代码执行时，如果遇到同步任务立刻执行它，如果遇到一个异步任务，就把这个异步任务放到等待任务队列中，当主任务队列中的任务
* 都执行完了，再去看等待任务队列中哪些达到执行条件，就把这个任务拿到主任务队列中执行它，等执行完再去等待任务队列找，找到就执行
* ，如此循环
*
* */

let n = 0;
setTimeout(()=>{
    n++;
});
console.log(n); // => 0
console.log(n); // => 0

// 回调函数：把函数A当做实参传给函数B(A是实参)；此时B叫做宿主函数。

let fn = (callback) =>{
    // fn 是宿主函数
    // 1. callback可以根据宿主函数的需要，无限次执行
    callback();
    callback();
    // 2. 在宿主函数中可以给回调函数传递参数
    callback(1, 2);
    // 3. 在宿主函数中也可以修改回调函数中的this
    let obj = {
        id: 17
    };
    callback.call(obj, 'a', 'b');
    // 4. 回调函数可以异步执行
    setTimeout(()=>{
        callback('x', 'y');
    },10000)
};
fn(function (n,m) {
    console.log(n, m);
    return n + m;
}); // function(n, m){...} 是回调

/*
// 异步的ajax
let value = null;
let xhr = new XMLHttpRequest();
xhr.open('get','json/data.json', true);
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        value = JSON.parse(xhr.responseText);
        callback(value); // callback就是bindHTML,value是实参，传递给bindHTML的形参data
    }
};
xhr.send();
// console.log(value); // null 因为ajax现在是异步的，在同步的里面是无法拿到ajax的数据的；
// setTimeout(()=>{
//     console.log(value); // 因为3秒后，在等待任务中的ajax已经跑完了，所以全局变量value就已经是拿回来的数据了
// },3000);*/

// 回调函数的解决方案：
function ajax(callback){
    // 异步的ajax
    let value = null;
    let xhr = new XMLHttpRequest();
    xhr.open('get','json/data.json', true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            value = JSON.parse(xhr.responseText);
            // console.log(value);
            callback(value); // callback就是bindHTML,value是实参，传递给bindHTML的形参data
        }
    };
    xhr.send();
}
function bindHTML(data){
    let str = ``;
    data.forEach(({title},index)=>{
        str += `<p>${title}</p>
            <span>￥3899</span><br>
            <span>热度：999</span><br>
            <span>日期：2019-9-9</span>`
    });
    let wrapper = document.getElementById('wrapper');
    wrapper.innerHTML = str;
}
ajax(bindHTML);

// 异步的ajax它获取的数据，我们在同步任务中是无法获取的；而回调函数又可以异步执行，所以我们把拿到数据以后的操作放到一个函数
// bindHTML中,把这个函数传给ajax方法，此时bindHTML就成为ajax的回调函数，ajax就可以在请求结束后调用回调函数；


// 重写一遍
/*
function ajax(callback) {
    let value = null;
    let xhr = new XMLHttpRequest();
    xhr.open('get', 'json/data.json', 'true');
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            value = JSON.parse(xhr.responseText);
            callback(value);
        }
    }
    xhr.send();
}
function bindHTML(data){
    let str = ``;
    data.forEach(({title,link},index) => {
        str += `<p>${title}</p>
            <a>${link}</a>`;
    let wrapper = document.getElementById('wrapper');
    wrapper.innerHTML = str;
    })
}
ajax(bindHTML);*/
