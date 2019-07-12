// 同步是阻塞的,前一个执行不完,后一个不能开始;
// 异步是非阻塞的, 后面的执行不用等前面的执行完; (异步任务放到等待任务队列中,等待任务队列中的任务谁先达到执行条件,谁先执行)

let data = null;
let xhr = new XMLHttpRequest();
xhr.open('get', 'json/banner.json', true);
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200){
      data = JSON.parse(xhr.responseText);
      bindHTML(data);
  }
};
xhr.send();

function bindHTML(data) {
    console.log(data);
}
// bindHTML(data); // null 是因为ajax采用的异步的,而异步的已经被放到等待任务队列中; 但是这个bindHTML() 是同步任务,需要先执行完
// bindHTML,才能执行等待任务队列中的ajax;

// 为什么使用异步?
// 现在有5个接口需要请求
// 1. 1s
// 2. 2s
// 3. 3s
// 4. 4s
// 5. 5s

// 如果使用同步,需要用时15s;因为前一个ajax不完,后一个没办法开始;用户等待时间过长;

// 现在改成异步: 第一个ajax执行,就把它放到等待任务队列中,第二个不用等第一个完,第二个就开始了,...这样做每个接口不用互相等;
// (使用异步就好像同时发了5个请求) 然后总的用时只需要5s就可以了.

// 真实的项目中用异步的多;

// 异步有一个麻烦的问题,当接口互相依赖时,代码组织起来会比较麻烦; 比如说有两个接口,第二个接口依赖于第一个接口;

let d1 = null;
let x1 = new XMLHttpRequest();
x1.open('get','1.json',false);
x1.onreadystatechange = function () {
    if(x1.readyState === 4 && x1.status === 200){
        d1 = JSON.parse(x1.responseText);
    }
};
x1.send();
let id = d1.id;

let x2 = new XMLHttpRequest();
x2.open('get','2.json?id=' + id,false);
x2.onreadystatechange = function () {
    if(x2.readyState === 4 && x2.status === 200){
        d2 = JSON.parse(x2.responseText);
    }
};
x2.send();
