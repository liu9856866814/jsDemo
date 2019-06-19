let value = null; // 接收数据
let xhr = new XMLHttpRequest();
xhr.open('get','json/data.json', true);
xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200){
        value = JSON.parse(xhr.responseText);
    }
};
xhr.send();
console.log(value); // value的值是null,为啥? 因为ajax现在是异步的,不会等着ajax完成再执行console.log(value);

// ?????????????
// 使用回调函数解决这个问题: 要作用回调函数首先要创建函数,并且实参需要传函数;

function ajax(callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('get','json/data.json', true);
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200){
            value = JSON.parse(xhr.responseText);
            callback(value); // 在这里执行回调函数,并且把ajax拿到的数据作为 实参传递给回调函数,此时回调函数执行时就能拿吧
            // 拿到ajax获取到的数据;
        }
    };
    xhr.send();
}
function bindHTML(){
    // 绑定数据:
}
ajax(function (ajaxData) {
    console.log(ajaxData);
});
bindHTML(); // ??? 在这里绑定数据能不能行?那么可以在哪里执行?