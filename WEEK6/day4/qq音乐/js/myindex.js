/*
* qq音乐的功能：
*   1. 响应式布局，采用rem布局解决方案
*   2. 音乐自动播放（audio、video标签）
*   3. 音符按钮用来控制播放，根据播放状态有不同的操作；如果当前是播放的，就暂停播放。如果是暂停状态，触摸后就是播放；处于
* 播放状态下，这个按钮是旋转的，暂停的状态下是不转的；
*   4. 歌词是跟随播放进度走的，会有高亮样式
*   5. 随着播放，进度条也要更新
*   6. 随着播放，已经播放的时长也要更新
*
* */

// zepto 是和jq很相似的一款类库,轻量,专门给移动端用的.常用的方法,如获取元素/css/addClass/removeClass等方法都有.用法和jq一样;

// 1. 获取元素: 用zepto获取元素和jq获取元素一样
let musicAudio = $('#audio')[0]; // 用$(selector) 获取来的是jq对象,需要通过[0],转成原生对象;
// console.log(musicAudio);
// console.log($('#audio'));
let $header = $('.header');
let $musicBtn = $('.musicBtn'); // 音符按钮
let $main = $('.main'); // 装歌词的容器元素
let $wrapper = $('.wrapper'); // wrapper是相对于$main定位的
let $footer = $('.footer');
let $current = $('.current');
let $duration = $('.duration');
let $already = $('.already');

let autoTimer = null;

// 2.动态设置main部分的高度
// main部分的高度= 浏览器可视窗口的高度 - header的高 - footer的高 - 0.6rem的padding值;
function computedMain() {
    let fontSize = parseFloat(document.documentElement.style.fontSize); // 带单位的去单位;
    let winH = document.documentElement.clientHeight; // 可视窗口的高
    let headerH = $header[0].offsetHeight; // header的高
    let footerH = $footer[0].offsetHeight; // footer的高
    // winH headerH footerH 都是以px为单位计量的

    // 如何把px换算成rem? 获取html的fontSize,然后把这些以px为单位除以
    let curH = (winH - headerH - footerH) / fontSize - 1.6; // 多减1 是为了给footer留一点距离
    $main.css({
        height: curH + 'rem'
    })
}
computedMain();
window.addEventListener('resize',computedMain); // 当页面大小发生改变时

// 3. 动态获取歌词,并且绑定到页面中;
$.ajax({
    url: 'json/lyric.json',
    type: 'get', // type 是http method : get post put delete options
    error(err){
        console.log(err);
    },
    success({lyric}){
        // 处理数据的操作写在success中;
        // console.log(lyric);
        bindHTML(lyric);
    }
});

// 4.绑定数据
function bindHTML(data) {
    // 4.1 分析歌词,解决歌词第一行
    // 我的梦(华为手机主题曲) - 张靓颖
    let d1 = data.replace(/&#(\d+);/g, function (res,a) {
        // 正则结合replace执行替换,回调函数中的参数: 第一个参数res是整个正则捕获到的内容,从第二个开始就是分组捕获的内容;
        // 正则结合replace替换,正则能够捕获多少次,回调函数就要执行多少次,很像遍历,项目中常用这种方式来遍历字符串;
        // replace写回调函数时用回调函数的返回值替换匹配的内容;

        // 根据分组捕获的数字不同 返回不同的内容;
        switch (parseFloat(a)) {
            case 32:
                return ' ';
            case 40:
                return '(';
            case 41:
                return ')';
            case 45:
                return '-';
        }
        return res; // 注意,replace使用回调的返回值替换匹配到的内容,但是现阶段只处理32 41 40 45 其他的不处理,所以需要原样返回;
    });

    // 4.2 接着处理每一秒的歌词
    let reg =/\[(\d+)&#58;(\d+)&#46;(?:\d+)\]([^&#]+)&#10;/g;
    let ary = [];
    // 用正则和replace遍历字符串
    // console.log(d1);
    d1.replace(reg, function (res, minute, second, value) {
        ary.push({
            minute,
            second,
            value
        })
    });
    // console.log(ary);

    // 遍历ary把数据绑定到页面中
    let str =``;
    ary.forEach(({minute, second, value}) => {
        str += `<p data-min="${minute}" data-sec="${second}">${value}</p>`
    });
    $wrapper.html(str);

    // 歌词就绪后播放音乐
    musicAudio.play(); // audio元素自带的方法,播放; pause
    // 音符按钮转起来
    $musicBtn.addClass('select');

    // 开户定时器，计算时间更新播放进度、高亮歌词
    autoTimer = setInterval(computedTime, 1000);
    // audio 标签有一个 ontimeupdate 事件,当currentTime发生变更时,会触发这个事件,但是currentTime特敏感,事件触发的特别频繁,
    // 如果要用注意使用节流处理;

}

// 5. 给音符按钮绑定事件,根据播放状态采取不同的操作
// zepto 中有一个 tap方法,给元素绑定触摸事件
$musicBtn.tap(function () {
   // ?如何知道音频是在播放还是暂停? audio 元素上有一个paused属性,是否暂停, 布尔值, 为true暂停, false表示正在播放
    if(musicAudio.paused){
        // 处于暂停
        musicAudio.play();
        $(this).addClass('select');
        autoTimer = setInterval(computedTime, 1000); // 播放后要重启定时器
    }else{
        // 处于播放
        musicAudio.pause();
        clearInterval(autoTimer); // 暂停后要停止定时器
        $(this).removeClass('select');
    }
});

// 6. 根据播放进度,更新进度条、高亮歌词、已经播放的时间
let step = 0; // 记录走过多少行
let curTop = 0; // wrapper的高度;

function computedTime() {
    // 1. 更新当前播放进度
    // 获取当前音频播放进度/总时长, audio自带, currentTime 是当前已经播放了的时间; duration 是音频的总时长; 单位是秒
    let {currentTime, duration} = musicAudio;
    let curTime = formatTime(currentTime); // 格式化后的当前时间
    let durTime = formatTime(duration); // 格式化后的总时间
    // console.log(curTime, durTime);
    // 插入到页面元素中
    $current.html(curTime);
    $duration.html(durTime);

    // 更新进度条
    $already.css({
        width: currentTime / duration * 100 + '%'
    });

    // 高亮歌词; 从wrapper下的p标签中找到行内属性存储的分钟娄和秒数和当前播放进度时间相同的p元素,设置它为选中(添加select类名),
    // 还要移除其兄弟们的选中样式;
    let [min, sec] = curTime.split(':');
    // 找data-min = min 并且data-sec = sec的p标签
    /*let ps = document.querySelectorAll('.wrapper > p');
    let right = null;
    for (let i = 0; i < ps.length; i++) {
        let m = ps[i].getAttribute('data-min');
        let s = ps[i].getAttribute('data-sec');
        if(+m === +min && +sec === +s) right = ps[i];
        // +字符串 把字符串转成数字
    }
    console.log(right);*/

    // 用filter 方法
    let highLight = $('.wrapper > p').filter(`[data-min="${min}"]`).filter(`[data-sec="${sec}"]`);
    // console.log(highLight);
    if(highLight.length){
        highLight.addClass('select').siblings().removeClass('select');
        step++; // 找到一次和当前时间对应的歌词就给step++;
        if(step > 5){ // 前四行不动
            curTop -= .84; // .84 rem是一个p标签的高度
            $wrapper.css({
                top: curTop + 'rem'
            })
        }
    }

    // 当前播放进度大于等于总时间时,应该清除定时器
    if(currentTime >= duration){
        clearInterval(autoTimer);
        step = 0;
        curTop = 0;

    }

}
function formatTime(time) {
    // 格式化时间 xx:xx
    let min = Math.floor(time / 60); // 获取分钟数
    let sec = Math.round(time - min * 60); // 获取秒数;

    // 补零
    if(min < 10){
        min = '0' + min;
    }
    if(sec < 10){
        sec = '0' + sec;
    }
    return `${min}:${sec}`
}