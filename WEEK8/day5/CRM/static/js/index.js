let list = document.getElementById('list');

function queryList() {
    axios.get('/api/getList').then(({ data }) => {
        if( data.code === 0){
            // 这里数据请求成功
            bindHTML(data.data);
        }else{
            alert(data.msg);
        }
    });
}
queryList();
function bindHTML(data) {
    let str = ``;
    data.forEach(({id, name, age, phone, address}) => {
        str += `<li>
            <span class="w50">${id}</span>
            <span class="w150">${name}</span>
            <span class="w50">${age}</span>
            <span class="w200">${phone}</span>
            <span class="w200">${address}</span>
            <span class="w150">
                <a href="/modify.html?id=${id}">修改</a>
                <a href="javascript: void 0" del-id="${id}">删除</a>
            </span>
        </li>`
    });
    list.innerHTML = str;
}

// 删除: 点击删除按钮,弹出confirm框,如果点击confirm的确定,发送ajax请求,让服务端删除它;

// 采用事件委托处理删除
list.onclick = function (e) {
    // 事件委托需要确定点击的到底是不是删除按钮
    // 事件源必须是a标签且带有del-id属性
    let cId = e.target.getAttribute('del-id');
    if(e.target.nodeName.toUpperCase() === 'A' && cId){
        let isDel = confirm(`确定要删除id为${cId}的客户吗?`); // confirm是确认弹框,如果用户点击确定,返回true,否则返回false;
        if(isDel){
            // 确认删除; 需要请求接口,因为数据保存在服务器上,所以需要请求接口,让服务器去删除;
            axios.get(`/api/removeInfo?id={cId}`).then(({data}) => {
                if(data.code === 0){
                    // 删除成功后刷新列表
                    // 有两种方式刷新:
                    // 1. 重新加载页面: window.location.reload() 或者 window.location.href = window.location.href;
                    // 2. 局部刷新: 重新发送ajax请求,然后渲染数据(推荐使用这种方式);
                    queryList();
                }else{
                    alert(data.msg);
                }
            })
        }
    }
};