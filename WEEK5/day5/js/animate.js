// 封装一个动画库: 匀速动画

// 匀速动画:
// 1. 获取动画运动的总时长duration
// 2. 求终点坐标(目标值,如opacity的最终值是1)
// 3. 求起点坐标(起点初始值)
// 4. 求路程: 终点坐标- 起点坐标
// 5. 设置计时curT,记录从开始运动经过的时间
// 6. 设置定时器,累加curT,计算经过curT时间后元素所处的位置,并且把这个位置设置给元素;
// 7. 做过界判断

// 封装一个动画库: 匀速动画

// 效果
const { css } = window.utils;
const Effects = {
    // linear: function(...){...}, 箭头函数还需正常写
    getName: (a,b) => {console.log(a, b);}, // 箭头函数要写全
    linear (curT, begin, change, duration = 2000) {
        return change / duration * curT + begin;
    } // 对象的简洁语法
};

function  animate({ele,target = {},duration = 2000,after}) {
    //1. 做参数合法性校验,如果不合法抛出异常
    if (typeof ele !== 'object') throw TypeError('ele is not a DOM-Element');
    // 2.求动画需要的参数: target 和 duration 已经通过参数的形式传进来了,不用单独求
    // 2.1 求起始位置和路程
    let begin = {}, // 设置空对象用来装target里面对应的属性的初始值
        change = {};
    // 遍历target 把target中的属性取出来
    for(let attr in target){
        if(target.hasOwnProperty(attr)){
            begin[attr] = css(ele, attr); //把target中属性的初始值计算出来 ,保存到begin对象中
            change[attr] = target[attr] - begin[attr]; // 根据终点和起点的值计算该属性路程
        }
    }
/*    // 2.2 求路程: 终点 - 起点
    let change = {}; // 因为target不止有一个属性,每一个属性都有一个路程,所以我们需要一个对象
    for(let key in target){
        if(target.hasOwnProperty(attr)){
            change[key] = target[key] - begin[key];
        }
    }*/

    // 2.3 设置计时器变量
    let curT = 0;

    // 3. 利用定时器启动动画: 通过元素对象自定义属性记录定时器id
    if(ele.timerID) clearInterval(ele.timerID); // 开启下一次动画之前把前面的动画清除掉,防止出现动画累加
    ele.timerID = setInterval(() => {
        // 3.1 累加时间
        curT += 10;
        // 3.2 过界判断
        if(curT >= duration){
            clearInterval(ele.timerID); // 清定时器停止动画
            css(ele,target); // 批量设置元素到终点
            /*if(typeof after === 'function') {
                after.call(ele); // 一般把钩子函数中的this处理成元素对象
            }*/
            typeof after === 'function' && after.call(ele); // 等效于上面的if语句
            return;
        }
        // 3.3 求经过curT时间后元素各个属性所处的位置
        let curState = {}; // 因为target中有多个属性,所以需要把所有的属性经过curT时间后的走过的路程计算出来
        for(let prop in target){
            if(target.hasOwnProperty(prop)) curState[prop] = Effects.linear(curT, begin[prop], change[prop], duration);
        }
        // 3.4 把上一步求出来的位置设置给元素
        css(ele, curState);
    },10)
}



