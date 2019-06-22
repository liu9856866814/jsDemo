// jq的each可以用来遍历数组和对象

// 1. 遍历一个数组:
let ary = [1, 2, 3, 4, 5];
$.each(ary, function (index, item) {
    // console.log(index, item);
});

// 2.遍历一个对象
let obj = {
    name: 'mabin',
    age: 18,
    title: 'Commander'
};
$.each(obj,function (index,item) {
    console.log(index, item);
});

// 3. jq隐式调用each方法
$('.header li').click(function () {
    // $('.header li') 获取来的是一个集合,jq默认调用each方法,给集合中的每一个都绑定事件;
    console.log($(this).index());
});
let ary2 = ary.forEach((item,index)=>{
    console.log(index,item,'00000000');
});


