function Tab(options) {
    if(!this instanceof Tab){
        console.error("Tab is a constructor which should be called by new.");
    }
    if(!options || !options.el){
        console.error('缺少options或者options.el');
        return;
    }
    this.options = options;
    this.init();
}
// 获取元素
Tab.prototype.getEle = function (){
    let wrapper = document.querySelector(this.options.el);
    this.headerList = wrapper.querySelectorAll('.header>li');
    this.cardList = wrapper.querySelectorAll('div');
    console.log(this.headerList);
    console.log(this.cardList);
};
// 绑定事件
Tab.prototype.bindEvent = function (){
    let headerList = this.headerList;
    for (let i = 0; i < headerList.length; i++) {
        headerList[i].onclick = () => {
            this.clearClass();
            this.addClass(i);
        }
    }
};
// 清除样式
Tab.prototype.clearClass = function (){
    let headerList = this.headerList;
    let cardList = this.cardList;
    for (let i = 0; i < headerList.length; i++) {
        headerList[i].className='';
        cardList[i].className='';
    }
};
// 添加选中样式
Tab.prototype.addClass = function(index){
    this.headerList[index].className = 'active';
    this.cardList[index].className = 'active';
};
Tab.prototype.init = function(){
  this.getEle();
  this.bindEvent();
};
let t1 = new Tab({ el: '#tab1'});