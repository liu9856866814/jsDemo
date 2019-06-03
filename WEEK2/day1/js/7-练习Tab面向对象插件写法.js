function Tab(options) {
    if(!this instanceof Tab){
        console.error('Tab is a constructor which should be called by new');
    }
    if(!options || !options.el){
        console.error('没有option或者options.el');
        return;
    }
    this.options = options;
    this.init();
}

// 获取元素对象
Tab.prototype.queryEle = function () {
    let wrapper = document.querySelector(this.options.el);
    this.headerList = wrapper.querySelectorAll('.headerList>li');
    this.cardList = wrapper.querySelectorAll('div');
    console.log(this.headerList);
    console.log(this.cardList);
};
// 给元素绑定事件
Tab.prototype.bindEvent = function () {
    let headerList = this.headerList;
    for (let i = 0; i < headerList.length; i++) {
        headerList[i].onclick = () => {
            this.clearClass();
            this.addClass(i);
        }
    }
};
// 清除所有元素的样式
Tab.prototype.clearClass = function () {
    let headerList = this.headerList;
    let cardList = this.cardList;
    console.log(headerList);
    console.log(cardList);
    for (let j = 0; j < headerList.length; j++) {
        headerList[j].className = '';
        cardList[j].className = '';
    }
};
// 给当前点击元素添加选中样式
Tab.prototype.addClass = function (index) {
    this.headerList[index].className = 'active';
    this.cardList[index].className = 'active';
};
// 封装插件
Tab.prototype.init = function () {
    this.queryEle();
    this.bindEvent();
};

let t1 = new Tab({
    el: '#tab'
});