// 请求两个接口： 先请求login.json;如果登录成功再请求banner.json,并且把响应结果输出到控制台；如果登录失败，alert提示错误；

// 不用promise
/*$.ajax({
    url: 'json/login.json',
    type: 'get',
    cache: false,
    dataType: 'json',
    error(err){
        console.log(err);
    },
    success(data){
        if(+data.code === 0){
            $.ajax({
                url: 'json/banner.json',
                type: 'get',
                dataType: 'json',
                cache: false,
                error(err2){
                    console.log(err2);
                },
                success(data2){
                    console.log(data2);
                }
            })
        }else{
            alert('登录失败： '+ data.msg)
        }
    }
});*/

// 向上面这样不断嵌套，这种写法叫做回调地狱（callback hell）

// Promise专门用来解决回调地狱
let p = new Promise((resolve, reject) =>{
    $.ajax({
        url: 'json/login.json',
        type: 'get',
        cache: false,
        dataType: 'json',
        error(err){
            reject(err);
        },
        success(data){
            if(+data.code === 0){
                resolve(data);
            }else{
                reject(data);
            }
        }
    })
});

// 根据p的状态来采取不同的操作
p.then((result) => {
    // 如果上一步成功才会执行这个回调
    return new Promise((resolve,reject) => {
        $.ajax({
            url: 'json/banner.json',
            cache: false,
            dataType: 'json',
            error(err){
                reject(err);
            },
            success(data){
                if(+data.code === 0){
                    resolve(data);
                }
            }
        })
    })
}, err => {
    console.log(err);
}).then((result2) =>{
    console.log(result2);
}, err2 =>{
    console.log(err2);
});


