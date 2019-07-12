$.ajax({
    url: 'json/banner.json?key=value&a=11',
    type: 'get',
    dataType: 'json',
    cache: false, // cache是否缓存,一般设为false,表示不要走缓存
    data:{}, // post请求时,传递的数据,会放到请求体中;
     async: true, // 同步or异步,默认是true表示异步
    error(err){
        // ajax请求失败时执行的回调
    },
    success(data){
        // ajax请求成功时执行的操作
    }
});