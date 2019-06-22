// jq绑定事件有两种方式

// 1, 把事件名中的on去掉,变成jq对应的方法,事件函数以回调的形式传给对应的方法;如原生的onclick事件,在jq中变成click(事件函数)方法
let $btn2 = $('.btn2');
/*$btn2.click(function(){
    console.log(this); // this还是绑定当前事件的元素,并且是原生的DOM元素对象;
    $(this).css({
        background: 'red'
    })
});*/

// 2.jq中提供了一个on方法,on方法有两个参数,第一个是去掉on的事件名,第二个参数是事件函数
$btn2.on('click', function () {
    console.log(this); // this 是绑定当前事件的元素对象(原生)
});

// 3. off() 方法 解绑事件(移除事件)
// $btn2.off('click');

// 4. trigger() 用代码触发事件执行;
$btn2.trigger('click');




