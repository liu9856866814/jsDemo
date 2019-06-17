// 封装一个工具集：增强代码的可复用性，提升开发效率；
// utils 工具包，这里面提供了常用的方法；

window.utils = (function () {
    /**
     * @desc 类数组转数组
     * @param arrLike 类数组对象
     * @returns {Array} 类数组对象转成的数组
     */
   function arrLikeToAry(arrLike) {
       try{
           return Array.from(arrLike);
       } catch (e) {
           var ary = []; //
           for(var i = 0;i<arrLike.length;i++){
               ary.push(arrLike[i]);
           }
           return ary;
       }
   }
    /**
     * @desc JSON格式字符串转对象
     * @param jsonstr JSON格式字符串
     * @returns {object} 对象
     */
    function toJSON(jsonstr) {
        if('JSON' in window){ // 'JSON' in window 返回false表示JSON的方法不可以用
            return JSON.parse(jsonstr);
        }else{
            return eval('('+ jsonstr + ')');
        }
    }

    /**
     * @desc 获取documentElement、document.body的盒子模型属性
     * @param attr 盒子模型属性名
     * @param val 设置的值
     * @returns {*} 获取的盒子模型属性值
     */
    function win(attr, val) {
        if(typeof val === 'undefined'){
            // 如果val是undefined，证明第二个参数没传，没传就是获取
            return document.documentElement[attr] || document.body[attr]; // 如果函数返回值是表达式，它会等着表达式求值，把求出来
            // 的值作为返回值返回
        }
        document.documentElement[attr] = document.body[attr] = val;
    }

    /**
     * @desc 获取当前元素相对于body的左上角点坐标
     * @param ele 当前元素
     * @returns {{top: number, left: number}} left : 元素左外边到body左内边的距离； top:元素上外边距离body上内边的距离
     */
    function offset(ele) {
        let left = ele.offsetLeft; // 当前元素的offsetLeft
        let top = ele.offsetTop; // 当前元素的offsetTop
        let parent = ele.offsetParent; //
        while (parent && parent.nodeName !== 'BODY'){
            left += parent.clientLeft + parent.offsetLeft;
            top += parent.clientTop + parent.offsetTop;
            parent = parent.offsetParent;
        }
        return {
            left,
            top
        }
    }

    /**
     * @desc 获取元素的计算生效的样式值
     * @param ele 元素对象
     * @param attr css属性
     * @returns {string | number} css样式 计算生效后样式 ，兼容IE
     */
    function getCss(ele, attr) {
        var value;
        // 1. 判断是否是IE浏览器
        if('getComputedStyle' in window){ // 判断window对象上有getComputedStyle属性
            value = window.getComputedStyle(ele,null)[attr];
        }else{
            value = ele.currentStyle[attr];
        }
        // 把单位去掉: 把数字且带单位的，把单位去掉
        var reg = /^-?\d+(\.\d+)?(px|rem|em|pt)$/g;
        if (reg.test(value)){
            value = parseFloat(value);
        }
        return value;
    }
   return {
       arrLikeToAry: arrLikeToAry,
       // arrLikeToAry 两种写法等价
       toJSON,
       win,
       offset,
       getCss
   }
})();

