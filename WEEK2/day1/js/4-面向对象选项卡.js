/*
* 目标：
*   1. 用面向对象的方式封装选项卡
*   2. 分析哪些属性和哪些方法是私有和公有的
* */

// 1. 分析哪些属性和方法是私有的
// 1.1 从页面获取来的html元素对象是Tab类的实例私有的

// 1.2 获取元素对象的方法是公有的
// 1.3 给元素绑定事件的方法是公有的
// 1.4 移除类名的方法是公有的
// 1.5 移除类名的方法是公有的

function Tab(options) {
    // 把配置对象保存实例上
    // 在存之前做参数的合法性校验
    if(!options || !options.el){
        // 实参没有传递options或者options对象中没有el属性
        console.error('缺少options或者option.el属性');
        return;
    }
    this.options = options;

    // 2. 执行获取元素对象
    this.queryEle();// this 就是Tab类的实例

    // 3. 绑定事件
    this.bindEvent();
}

// 1. 获取元素对象方法
Tab.prototype.queryEle = function (){
    // this 当前Tab的实例,实例的options保存着配置对象
    // 获取容器元素
    const EL_ID = this.options.el;// 从实例中取出options.el
    let wrapper = document.querySelector(EL_ID);

    // 获取选项卡头,并且保存到实例上
    this.headerList =wrapper.querySelectorAll('.header > li');

    // 获取选项卡卡片,并且保存到实例上
    this.cardList = wrapper.querySelectorAll('div');
    console.log(this.headerList);
    console.log(this.cardList);
};
// 2. 绑定事件方法
Tab.prototype.bindEvent = function (){
    // 给上一步获取来的选项卡头绑定事件
    // ？我们获取来的元素对象存哪里了？ 上一步已经将选项卡头和卡片保存在实例中
    let headerList = this.headerList; // 缓存headerList
    // 事件函数this改变解决方案1： 缓存this;
    let that = this;// 此时that缓存的是Tab类的实例
    for (let i = 0; i < headerList.length; i++) {
        headerList[i].onclick = function () {
            // 这样写有一个问题，这个事件函数中的this是被点击的li,我们希望this是Tab类的实例，因为只有Tab类的实例才能调用
            // clearClass和addClass方法；
            // 1. 清除选中样式
            this.clearCLass();
            // 2. 给被点击的添加选中样式
            that.addClass(i);
        }

    }
};
// 3. 移除类名的方法
Tab.prototype.clearClass = function (){

};
// 4. 添加类名的方法
Tab.prototype.addClass = function (){};

let t1 = new Tab({el: '#tab1'}); // 传入一个配置对象;传递对象参数,可以忽略传参的顺序
let t2 = new Tab({el: '#tab2'});




