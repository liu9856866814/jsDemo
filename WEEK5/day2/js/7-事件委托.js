// 点击页面中的每个li,输出li里面的内容

document.addEventListener('DOMContentLoaded', function () {
/*    let lis = document.querySelectorAll('#list > li');
    // 循环绑定事件的效率低，而且不适用于动态绑定的数据;
    // 给每一个li绑定事件
    for (let i = 0; i < lis.length; i++) {
        lis[i].onclick = function () {
            console.log(this.innerText);
        }
    }*/

// 事件委托：当遇到对一个元素中的所有子元素绑定相同的事件,并且事件触发时做的事情一样;利用事件的冒泡机制把事件绑定给父元素
// (一般绑定给父绑定,也可以绑定给更高的元素),然后根据事件触发时 事件源 e.target 判断点击的到底是哪个元素;
    let list = document.querySelector('#list');
    list.onclick = function (e) {
        // ??怎么知道你点击的哪个li呢？
        // e.target 是触发事件的目标元素
        console.log(e.target.innerText);
    }
}, false);

// 1. 事件委托的性能比循环绑定性能好;