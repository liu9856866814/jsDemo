function design(website,style,color,users,cycle,request,rich) {

}
function design2(options) {
    let web = options.website;
    let style = options.style;
    let color = options.color;
    let {users,cycle,request,rich} = options;// 解构赋值
}
design2({ // 把多个参数放到一个对象中,可以解决传参的顺序问题
    website: 'www.zhufengpeixun.cn',
    style: 'zfstyle',
    color: 'blue',
    users: '学院',
    rich: true,
    request: [''],
    cycle: 2
});