// 方法封装的目的是提高代码的复用度，提高开发效率；

// jq的ajax
/*$.ajax({
    url: 'banner.json',
    type: 'GET',
    cache: false, // 在接口末尾拼接一个随机数或者时间戳
    dataType: 'json',
    async: 'true',
    data: {}, // 放在请求体中发送给服务器的数据
    /!*error: function (err) {},*!/
    error(err){
        // 对象的简洁语法,可以把:function省略;省略后error仍然是对象的一个属性,error的属性值仍然是一个函数;
        // 这个error 是在网络请求失败后执行; http-status-code 表示http请求是失败还是成功,4xx和5xx是失败;

        // 网络请求失败和数据失败是两个概念,网络请求失败根本拿不到数据;
        // 数据失败时网络请求是成功的,只不过服务器响应给客户端的东西,不是我们想要的;
    },
    success (data){
        console.log(data);
    }
});*/


// 封装方法要想好这个方法做什么用,它需要什么参数,它返回什么值;

ajax({
    url: 'json/banner.json',
    type: 'get',
    async: 'true',
    cache: false,
    dataType: 'json',
    data:{
        // 做一个优化,无论get还是post在调用ajax方法时都传入键值对;在ajax内部要做处理,get请求时把键值对变成问号传参,post把
        // 对象转成json格式的字符串
        key1: 'value1',
        key2: 'value2'
    },
    error(err){
        console.log(err);
    },
    success(data){
        console.log(data);
    }
});

function ajax({ url = '/', type = 'GET', async = true, cache = false, dataType = 'json', data = null, error, success }) {
    // 1. 判断,如果是get请求要把data这个对象转换成问号传参
    // URLSearchParams
    if(type.toUpperCase() === 'GET'){
        // get 请求: 需要处理问号传参和缓存
        let qs = new URLSearchParams();
        for(let key in data){
            qs.append(key, data[key]);
        }
        // 判断是否要清缓存: 在问号传参后面拼接一个时间戳或者随机数
        if(!cache){
            qs.append('_', Date.now());
        }
        let qsStr = qs.toString(); // 把qs变成查询字符串;
        // console.log(qsStr);
        // 判断原有url末尾是否有问号,如果有问号就拼接&,如果没有拼接问号;
        url.includes('?') ? url += `&${qsStr}`: url += `?${qsStr}`;
        data = null; // 因为下面send时,还会把data发送给服务器,但是get请求不需要这些东西,所以把data置为null;
    }else{
        // post 因为post放在请求体里面的数据必须是字符串类型的,需要把data对象变为json格式的字符串
        data && (data = JSON.stringify(data));

    }
    let xhr = new XMLHttpRequest();
    xhr.open(type, url, async);
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                success && success(JSON.parse(xhr.responseText));
            }else{
                // xhr.status http响应状态码,如果失败就是失败的状态码
                // xhr.statusText 状态码对应的结果短语
                // if(typeof error === 'function') error(xhr);
                error && error(xhr); // 这和写if等效
            }
        }
    };
    xhr.send(data);
}

