/*
* 目标:
*   1. 掌握ajax基本使用
* */

// AJAX: Asynchronous Javascript And XML(异步的javascript和xml)

// AJAX 四步:

// 1. 第一步 创建ajax实例对象
let xhr = new XMLHttpRequest();

// 2. 调用xhr的open方法配置请求信息
// HTTP METHOD 请求方式:GET/POST/PUT/DELETE/OPTIONS...
// URL: 请求的服务端的接口地址 是一个地址
// 异步 或者同步: false 表示同步, true 表示异步
xhr.open('GET', './js/data.json',false);

// 3, 监听xhr的onreadyStatechange事件
xhr.onreadystatechange = function(){
  if(xhr.readyState === 4 && xhr.status ===200){
  //    xhr.readyState 为4, xhr.status 为200 时表示请求成功
  //    请求成功后,可以拿到服务端返回的数据,这些数据挂载到xhr.responseText 上;
  //     console.log(xhr.responseText); // 拿到的数据是JSON格式的字符串,所以需要处理成对象;
      // console.log(typeof xhr.responseText); //string
      let data = JSON.parse(xhr.responseText);
      console.log(data);
  //    拿到数据后,需要把这些数据绑定到页面中
  }
};

// 4. 发送请求
xhr.send();




