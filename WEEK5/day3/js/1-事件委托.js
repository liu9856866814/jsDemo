// 点击增加给ul增加一个li.li的内容'新建li 大白菜真便宜 n' n是ul中最后一个li中的数字+1;
let list = document.getElementById('list');
let items = list.getElementsByTagName('li');
let add = document.getElementById('add');

// 给增加按钮绑定事件
add.onclick = function () {
  // 1. 创建一个li
  let n = items.length + 1;
  let newli = document.createElement('li');
  newli.innerText =  `新建 li 大白菜真便宜 ${n}`;
    list.appendChild(newli);
};
/*// 传统方式绑定事件
for (let i = 0; i < items.length; i++) {
    items[i].onclick = function () {
        console.log(this.innerText);
    }
}*/

// 动态创建的li,没有点击事件;因为点击增加创建元素时,绑定事件的for循环早就跑完了.导致新建的元素没有给它绑事件.

// 事件委托
list.onclick = function (e) {
    console.log(e.target.innerText);
};
// 1. 性能好,不用循环;
// 2. 动态添加的元素也可以有效果;

// 元素的点击事件都存在,给元素事件属性赋值为一个函数只不过是监听这个事件,当事件发生时,浏览器会把事件执行;当不给事件属性赋值
// 一个函数时,就是没有监听这个事件,当元素被点击时,点击事件还会发生,只不过发生时不会执行你的事件函数;

