let flowRender = (function () {
    // 获取工具方法
    const { offset, win, toJSON, arrLikeToAry} = window.utils;
    // 获取元素
    let flowBox = document.getElementById('flowBox'),
        flowList = flowBox.getElementsByTagName('li');
    let winH = win('clientHeight');

    let page = 0;
    let data = null;
    function queryData() {
        page++;
        if (page >10){
            console.log('没数据了');
            return;
        }
        let p = new Promise((resolve,reject)=>{
            let xhr = new XMLHttpRequest();
            xhr.open('get', `json/data.json?page={page}`, false);
            xhr.onreadystatechange = function () {
                if(xhr.readyState === 4 && xhr.status){
                    data = toJSON(xhr.responseText);
                    resolve(data);
                }
                if(xhr.readyState === 4 && xhr.status !== 200){
                    reject('数据获取失败')
                }
            };
            xhr.send();
        });
        p.then(result =>{
            bindHTML(result);
            lazyLoad();
        }, error =>{
            console.log(error);
        });
    }
    function bindHTML(data) {
        for (let i = 0; i < data.length; i+= 3) {
            let dataArr = [
                data[i],
                data[i+1],
                data[i+2]
            ];
            let flowListAry = arrLikeToAry(flowList);
            flowListAry.sort((a,b) =>{
                return a.offsetHeight - b.offsetHeight;
            });
            flowListAry.forEach((item,index) =>{
                dataArr[index]?item.innerHTML += queryHTML(dataArr[index]): null;
            });
        }
    }
    function queryHTML({pic, link, title}) {
        return `<a href="${link}">
                <div><img data-src="${pic}" alt=""></div>
                <span>${title}</span></a>`;
    }

    // 图片懒加载
    function lazyLoad() {
        let imgList = document.querySelectorAll('img');
        arrLikeToAry(imgList).forEach((item) =>{
            if (item.src) return;
            let imgOffsetTop = offset(item).top;
            let winScrollTop = win('scrollTop');
            if(imgOffsetTop - winScrollTop - winH <= 200){
                let newImg = new Image();
                let dataSrc = item.getAttribute('data-src');
                newImg.src = dataSrc;
                newImg.onload = function () {
                    item.src = dataSrc;
                    newImg = null;
                }
            }
        })
    }

    let timer = null;
    function handleScroll() {
        window.onscroll = function(){
            lazyLoad();
            let pageH = win('scrollHeight');
            let winScrollT = win('scrollTop');
            if(pageH - winH - winScrollT <= 200){
                if(timer) clearInterval(timer);
                timer = setTimeout(() => {
                    queryData();
                    lazyLoad();
                },300)
            }
        }
    }

    return {
    init(){
        queryData();
        lazyLoad();
        handleScroll();
    }
}
})();
flowRender.init();