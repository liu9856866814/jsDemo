let flowRender = (function () {
    // 1. 导入工具方法和获取元素
    const {offset, win, arrLikeToAry, toJSON} = window.utils;
    let flowBox = document.getElementById('flowBox'),
        flowList = flowBox.getElementsByTagName('li'),
        winH = win('clientHeight'),
        flowListArr = arrLikeToAry(flowList);

    // 2. 向服务器请求数据
    let page = 0;
    let data = null;
    function queryData() {
        page++;
        if (page >10){
            console.log('没数据了');
            return;
        }
        let p = new Promise((resolve,reject) =>{
            let xhr = new XMLHttpRequest();
            xhr.open('get', `json/data.json`, true);
            xhr.onreadystatechange = function () {
                if(xhr.readyState === 4 && xhr.status === 200){
                    data = toJSON(xhr.responseText);
                    resolve(data);
                }
                if(xhr.readyState === 4 && xhr.status !== 200){
                    reject('请求数据失败了');
                }
            };
            xhr.send();
        });
        p.then(result => {
            bindHTML(result);
            lazyLoad();
        },err => {
            console.log(err);
        })
    }
    // 3. 绑定数据
    function bindHTML(data) {
        for (let i = 0; i < data.length; i+=3) {
            let dataArr = [
                data[i],
                data[i+1],
                data[i+2]
            ];
            flowListArr.sort((a,b) =>{
                return a.offsetHeight - b.offsetHeight;
            });
            flowListArr.forEach((item,index) => {
                dataArr[index] ? item.innerHTML += queryHTML(dataArr[index]) : null;
            })
        }
    }

    // 拼接li的内容
    function queryHTML({link, pic, title}) {
        return `<a href="${link}">
                    <div><img data-src="${pic}" alt=""></div>
                    <span>${title}</span>
                </a>`
    }

    // 图片懒加载
    function lazyLoad() {
        let imgList = document.getElementsByTagName('img');
        arrLikeToAry(imgList).forEach((item) => {
            if(item.src) return;
            let imgOffsetTop = offset(item).top;
            let winScrollTop = win('scrollTop');
            if(imgOffsetTop - winScrollTop - winH <= 100 ){
                let newImg = new Image();
                let dataSrc = item.getAttribute('data-src');
                newImg.src = dataSrc;
                newImg.onload = function () {
                    item.src = dataSrc;
                    newImg = null;
                }
            }
        });
    }
    // 滚动加载图片
    let timer = null;
    function handleScroll() {
        window.onscroll = function () {
            lazyLoad();
            let pageH = win('scrollHeight');
            let winScrollTop = win('scrollTop');
            if(pageH - winH - winScrollTop <= 100){
                if(timer) clearTimeout(timer);
                timer = setTimeout(() =>{
                    queryData();
                    lazyLoad();
                }, 300)
            }
        }
    }
    return{
        init(){
            queryData();
            lazyLoad();
            handleScroll();
        }
    }
})();
flowRender.init();