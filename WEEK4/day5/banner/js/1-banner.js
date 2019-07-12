/*
* 轮播图需求：
*   1. 做一个轮播图功能，能够循环自动轮播，当播到最后一张图片时，再播就要播第一张图片；
*   2. 鼠标放到轮播图窗口上，要停止自动轮播，并且左右两个小箭头要出来。点击两个小箭头可以手动切换，点击左侧的小箭头，切换
* 上一张，点击右侧的小箭头切换至下一张；当鼠标滑出时，轮播图还要恢复自动轮播；
*   3. 轮播时，下面的小点要跟着动，上面展示的第几张图片，下面第几个小点要选中；
*   4. 点击这些小点，上面的图片也会跟着切换到对应图片；
*
* */
/*
* 轮播图的原理（左右轮播）：
*   1. 在外层有一个container的盒子，宽高只能展示一张图片，并且设置overflow: hidden;
*   2. 在container下面有一个叫做wrapper的盒子，wrapper相对于container绝对定位；wapper里面有很多张图片，这些图片的尺寸都是
* 相同的，并且在一行排列；
*   3. 所谓轮播： container默认展示第一张图片（索引为0的），wrapper的left值为0；当第一次轮播后，container展示图片第二张图片
* （索引为1的图片），此时wrapper的left值是负的1张图片的宽度；第二次轮播后container展示的第三张图片（索引为2的图片），此时
* wrapper的left的值是多少：负的2张图片的宽度。。。依次类推，
* wrapper的left的值和container正在展示的图片索引的关系是：wrapper的left值 = -1 * 索引 * 图宽
*   4. 实现轮播，我们设置一个变量stepIndex,默认值0 表示container正在展示的图片索引。向后轮播一次，给stepIndex++，然后把
* wrapper的left设置成： -1 * stepIndex * 图宽；
* */
/*
* container正在展示[图片索引 ]  wrapper的left
* 0                                 0
* 1                                 -1 * 图宽
* 2                                 -2 * 图宽
* 3                                 -3 * 图宽
* */

/*
* 获取数据
* 绑定数据
* 实现轮播
*
* */

// 1. 获取元素：jq获取来的集合没有dom映射；
let $container = $('.container'),
    $wrapper = $('.wrapper'),
    $focus = $('.focus'),
    $arrowLeft = $('.arrowLeft'),
    $arrowRight = $('.arrowRight'),
    $sildeList = null,
    $focusList = null;

// 配置轮播参数：
let stepIndex = 0; // 记录container中展示图片的索引，默认展示第一张，第一张图片的索引为0
let autoTimer = null; // 记录定时器ID,以便我们可以清除定时器
let interval = 3000; // 轮播图的轮播间隔

// 2.1 请求数据，绑定数据
$.ajax({
    url: 'json/banner.json',
    method: 'get',
    dateType: 'json',
    async: false,
    error(err){
        console.log('请求数据失败')
    },
    success(data){
        console.log(data);
        //在这里执行绑定数据的方法
        bindHTML(data);
    }
});

// 2.2 绑定数据
function bindHTML(data) {
    // 绑定数据需要搞两部分: 图片和图片下面的小点(焦点)
    let slideStr = ``; // 准备用来拼接图片
    let focusStr = ``; // 准备用来拼接小点
    // 遍历data拼接字符串
    data.forEach(({img, desc},index)=>{
        slideStr += `<div class="slide"><img src="${img}" alt="${desc}"></div>`;
        focusStr += `<li class="${index === 0 ? 'active' : ''}"></li>`;
        // 轮播图默认展示第一张图片,所以第一个小点是默认选中; data中的第一条数据,对应的是第一张图片,第一条数据的索引index是0,
    });
    // 把拼接好的字符串插入到页面元素中
    $wrapper.html(slideStr);
    $focus.html(focusStr);

    // 重新获取slideList和focusList
    $sildeList = $('.slide');
    console.log($sildeList);
    $focusList = $('.focus > li');
    // 动态设置wrapper的宽度
    $wrapper.css({
        width: $sildeList.length * 1000, /*1000 是图片宽度*/
    })
}

// 实现轮播
function autoMove() {
    stepIndex++; // stepIndex记录的container展示图片的索引
    if(stepIndex === $sildeList.length - 1){
        $wrapper.css('left',0);
        stepIndex = 0;
        return;
    }
    // 让wrapper动画到： -1 * stepIndex * 图片宽度
    $wrapper.stop().animate({
        left: -1 * stepIndex * 1000,
    },500);
}
autoTimer = setInterval(autoMove,interval);

// 咱们实现的循环轮播,是最后一下跳过去的.但是人家的是滑动着过去的;这种滑过云的效果,叫无缝轮播;
// 轮播图的无缝轮播原理:
// 向wrapper的末尾多拼接一个第一张图片,当轮播的时候,轮播到最后一张图片时,最后这张图片和第一张图片长得一模一样,此时我们把
// wrapper的left的值设置成0,left为0时,container展示的还是第一张图片,因为设为0的这个操作特别快,给人的感觉就是无缝轮播的;
// 思考: wrapper的left设为0以后,stepIndex应该设置为多少?









