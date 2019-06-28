// 1. 导入工具方法和获取元素
const {offset, win, arrLikeToAry, toJSON} = window.utils;
let flowBox = document.getElementById('flowBox'),
    flowList = flowBox.getElementsByTagName('li'),
    winH = win('clientHeight');

// 2. 向服务器请求数据
let page = 0;
let data = null;
function queryData() {
    page++;
    if (page >10){
        console.log('没数据了');
        return;
    }
    let xhr = new XMLHttpRequest();
    xhr.open('get', `json/data.json`, false);
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200){
            data = toJSON(xhr.responseText);
            console.log(data);
            bindHTML(data);
        }
    };
    xhr.send();
}
queryData();

// 绑定数据
function bindHTML(data) {
    for (let i = 0; i < data.length; i+=3) {
        let dataArr = [
            data[i],
            data[i+1],
            data[i+2]
        ];
        let flowListArr = arrLikeToAry(flowList);
        flowListArr.sort((a,b) =>{
            return a.offsetHeight - b.offsetHeight;
        });
        flowListArr.forEach((item,index) => {
            dataArr[index] ? item.innerHTML += queryHTML(dataArr[index]) : null;
        })
    }
}
// 插模板字符串
function queryHTML({link, pic, title}) {
    return `<a href="${link}">
                    <div><img data-src="${pic}" alt=""></div>
                    <span>${title}</span>
                </a>`
}