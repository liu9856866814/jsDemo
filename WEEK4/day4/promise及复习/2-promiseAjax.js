let p = new Promise((resolve, reject)=>{
    // 把异步的行为写在这个函数中;
    let xhr = new XMLHttpRequest();
    xhr.open('get', 'json/data.json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200){
            // 满足这个条件时表示ajax成功了,在这里面就可以执行成功以后的处理了;
            let data  = JSON.parse(xhr.responseText);
            resolve(data); // data传给then方法的第一个回调函数了
        }
        if(xhr.readyState === 4 && xhr.status !== 200){
            reject('失败了'); // '失败了'这个字符串传给了then方法的第二个回调函数
        }
    };
    xhr.send();
});
p.then(data =>{
    console.log(data);
    bindHTML(data); // 绑定数据要写在这个函数中
    return data;
}, error =>{
    console.log(error);
}).then(d2 =>{
    return 'abc'
}).then(d3 =>{
    console.log(d3);
});
// ??

function bindHTML(data){
    let str = ``;
    data.forEach(({img,title},index)=>{
        str += `<p>${title}</p>`
    });
    let wrapper = document.getElementById('wrapper');
    wrapper.innerHTML = str;
}

// 1. 把异步处理(定时器、ajax)写在new Promise()时的回调函数中，如果异步处理成功，执行resolve(),如果失败执行reject()

// 2. 把成功以后要做的事情写在then方法的第一个参数里面；把失败以后要做的事情写在then方法的第二个参数中

// 为什么使用异步的ajax？
// 如果页面中只有一个ajax请求，异步和同步没有太大区别，就是代码组织顺序不同；
// 如果页面中有多个ajax请求使用同步，导致后面的ajax必须等前一个ajac结束才能开始下一个，导致用户等待ajax响应的时间会累加；
// 如果使用异步，后面的ajax不用等上一个ajax完成，就可以开始请求下一个请求。（但是也不要一下子请求太多接口，一般一个页面中
// 同时发起的请求不要超过6个）
