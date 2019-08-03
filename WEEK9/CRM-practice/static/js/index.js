let tbody = document.getElementById('tbody');
function queryList() {
    axios.get('/api/getList').then(({data}) => {
        if(data.code === 0){
            bindHTML(data.data);
        }else{
            alert(data.msg);
        }
    });
}
queryList();
function bindHTML(data) {
    // console.log(data);
    let str = ``;
    data.forEach((item) => {
        console.log(item.id);
        str += `<tr id="list">
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.age}</td>
                <td>${item.phone}</td>
                <td>${item.address}</td>
                <td><a href="/modify.html?id=${item.id}">修改</a> <a href="javascript:void 0;" del-id="${item.id}">删除</a></td>
            </tr>`
    });
    tbody.innerHTML = str;
}

// 删除客户信息
tbody.onclick = function(e){
    let removeId = e.target.getAttribute('del-id');
    if(e.target.nodeName.toUpperCase() === 'A' && removeId){
        let isDel = confirm('Are you sure to delete id is '+ removeId + ' information ?');
        if(isDel){
            axios.get('/api/removeInfo?id=' + removeId).then(({data}) => {
                if(data.code === 0){
                    // window.location.href = '/';
                    queryList();
                }else{
                    alert(data.msg);
                }
            })
        }
    }
};