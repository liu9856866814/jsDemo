
function Tab(options) {
    if(!options || !options.el){
        console.log('缺少options或者option.el');
        return;
    }
    this.options = options;
    this.init();
}
//获取元素
Tab.prototype.getEle = function (){
    let wrapper = document.querySelector(this.options.el);
    this.headerList = wrapper.querySelectorAll('.headerList>li');
    this.cardList = wrapper.querySelectorAll('div');
};
//绑定事件
Tab.prototype.bindEvent = function (){
    let headerList = this.headerList;
    let cardList = this.cardList;
    for (let i = 0; i < headerList.length; i++) {
        headerList[i].onclick = () => {
            this.clearStyle();
            this.addClass(i);
        }
    }
};
//清除样式
Tab.prototype.clearStyle = function (){
    let {headerList,cardList} = this;
    for (let i = 0; i < headerList.length; i++) {
        headerList[i].className = '';
        cardList[i].className = '';
    }
};
//添加选中样式
Tab.prototype.addClass = function (index){
    this.headerList[index].className = 'active';
    this.cardList[index].className = 'active';
};
Tab.prototype.init = function(){
    this.getEle();
    this.bindEvent();
};



let t1 = new Tab({
    el: '#tab'
});