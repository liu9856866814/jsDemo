let flowRender = (function () {
    // 1. 从工具库找中导入方法
    const {win, offset, toJSON, arrLikeToAry} = utils;
    // 2. 获取基本数据值
    let winH = win('clientHeight');
    // 3. 获取元素
    let flowBox = document.getElementById('flowBox');
    let flowList = flowBox.getElementsByTagName('li');
    // let flowListAry = arrLikeToAry(flowList);

    // 4. 获取数据
    let page = 0;
    function queryData() {
        if (page > 10) {
            console.log('没有更多数据了');
            return;
        }
        page++;
        let xhr =  new XMLHttpRequest();
        xhr.open('GET', `json/data.json?page=${page}`, false);
        xhr.onreadystatechange =  () =>{
            if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
                let data = toJSON(xhr.responseText);
                bindHTML(data);
            }
        };
        xhr.send();
    }
    // 5. 绑定数据
    function bindHTML(imgData) {
        for (let i = 0; i < imgData.length; i+=3) {
            let dataArr = [
                imgData[i],
                imgData[i + 1],
                imgData[i + 2]
            ];
            // 2. 给页面中三列排序
            let flowListAry = arrLikeToAry(flowList);
            flowListAry.sort((a, b) => a.offsetHeight - b.offsetHeight);
            // 3. 按照排好的顺序，依次给flowList中的每个li插入数据
            flowListAry.forEach((liItem, liIndex) => {
                console.log(liItem, liIndex);
                dataArr[liIndex] ? liItem.innerHTML += queryHTML(dataArr[liIndex]) : null;
            })
        }
    }
    // 6. 声明拼接字符串的方法
    function queryHTML({pic, link, title}) {
        return `<a href="${link}">
      <div>
        <img alt="" data-src="${pic}">
      </div>
      <span>${title}</span>
    </a>`
    }
    // 7. 图片懒加载
    function lazyLoad() {
        // 7.1 获取所有的图片
        let imgList = document.querySelectorAll('img');
        [...imgList].forEach(img => {
            if (img.src) return;
            let dataSrc = img.getAttribute('data-src');
            let imgOffsetTop = offset(img).top;
            let winScrollTop = win('scrollTop');
            if (imgOffsetTop - winH - winScrollTop <= 100) {
                let newImg = new Image();
                newImg.src = dataSrc;
                newImg.onload = function () {
                    img.src = dataSrc;
                    newImg = null;
                }
            }
        })
    }

    // 8.加载更多+处理滚动
/*    let timer = null;
    function handleScroll() {
        window.onscroll = function () {
            lazyLoad();
            let pageH = win('scrollHeight');
            let scrollTop = win('scrollTop');
            let winH = win('clientHeight');
            if (pageH - scrollTop - winH <= 100) {
                if(timer) clearTimeout((timer));
                timer = setTimeout(() => {
                    queryData();
                    lazyLoad();
                },300);
            }
        }
    }*/
    return {
        init () {
            queryData();
            lazyLoad();
            handleScroll();
        }
    }
})();
flowRender.init();