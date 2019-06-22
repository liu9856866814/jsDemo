// ajax方法是jQ的静态方法;ajax定义在jQ自己身上,没有定义在原型上,只有jQuery自己能调用
$.ajax({
    url: 'json/data.json', // 接口
    method: 'GET', // http method 请求方式,默认'get'
    async: true, // 是否异步,默认值true,表示异步;
    dataType: 'json', // 数据类型,因为jq的ajax帮我们格式化数据,所以告诉它数据类型
    data: {}, // POST请求的参数,发送给服务器的数据
    success (data){ // 对象的简洁语法
        // 如果ajax请求成功会调用这个函数,data就是请求回来的数据,并且jq会帮我们处理成对象,不用自己JSON.parse()
        console.log(data);
    },
    error (err){
        // 如果ajax请求失败,会调用这个函数
        console.log(err);
    }
});

// 重写一次
$.ajax({
    url: 'json/data.json', // 接口
    method: 'get', // 请求方式
    async: 'true', // 是否异步
    dataType: 'json', // 数据类型
    data: {}, // post请求的参数,发给服务器的数据
    success(data){ // 如果ajax请求成功执行,data数据已经格式化成对象了,不用JSON.parse()
        console.log(data)
    },
    error(err){ // ajax 请求失败执行
        console.log(err)
    }
})