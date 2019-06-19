// 封装一个工具集：增强代码的可复用性，提升开发效率；
// utils 工具包，这里面提供了常用的方法；

window.utils = (function () {
  /**
   * @desc 类数组转数组
   * @param arrLike 类数组对象
   * @returns {Array} 类数组对象转成的数组
   */
  function arrLikeToAry(arrLike) {
    try {
      return Array.from(arrLike);
    } catch (e) {
      var ary = []; //
      for (var i = 0; i < arrLike.length; i++) {
        ary.push(arrLike[i]);
      }
      return ary;
    }
  }

  /**
   * @desc JSON格式字符串转对象
   * @param jsonstr JSON格式字符串
   * @returns {Object} 对象
   */
  function toJSON(jsonstr) {
    if ('JSON' in window) { // 'JSON' in window 返回false表示JSON的方法不可以用
      return JSON.parse(jsonstr);
    } else {
      return eval('(' + jsonstr + ')');
    }
  }

  /**
   * @desc 获取documentElement、document.body的盒子模型属性
   * @param attr 盒子模型属性名
   * @param val 设置的值
   * @returns {*} 获取的盒子模型属性值
   */
  function win(attr, val) {
    if (typeof val === 'undefined') {
      // 如果val是undefined，证明第二个参数没传，没传就是获取
      return document.documentElement[attr] || document.body[attr] // 如果函数法返回值是表达式，它会等着表达式求值，把求出来的值作为返回值返回
    }
    document.documentElement[attr] = document.body[attr] = val;
  }

  /**
   * @desc 获取当前元素相对于body的左上角点坐标（）
   * @param ele 当前元素
   * @returns {{left: number, top: number}} left:元素左外边到body左内边的距离; top: 元素的上外边距离body上内边的距离
   */
  function offset(ele) {
    let left = ele.offsetLeft; // 当前元素的offsetLeft
    let top = ele.offsetTop; // 当前元素的offsetTop
    let parent = ele.offsetParent; // 获取当前元素的offsetParent
    while (parent && parent.nodeName !== 'BODY') {
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
   * @returns {*} css样式计算生效后的值
   */
  function getCss(ele, attr) {
    var value;
    // 1. 判断是否是 IE 浏览器
    if ('getComputedStyle' in window) { // 判断window对象上有getComputedStyle吗
      value = window.getComputedStyle(ele, null)[attr];
    } else {
      // 执行else的时候说明是IE低版本，使用currentStyle属性
      value = ele.currentStyle[attr];
    }
    // 把单位去掉：把数字且带单位的，把单位去掉
    var reg = /^-?\d+(\.\d+)?px|rem|em|pt$/g;
    if (reg.test(value)) {
      value = parseFloat(value);
    }
    return value
  }

  /**
   * @desc 设置元素对象的样式
   * @param ele 元素对象
   * @param attr CSS属性
   * @param val 样式的值
   */
  function setCss(ele, attr, val) {
    let reg = /^(fontSize|width|height|(margin|padding)?(top|right|bottom|left)?)$/i;
    if (reg.test(attr)) {
      if (!isNaN(val)) val += 'px';
    }
    ele.style[attr] = val;
  }

  /**
   * @desc 批量设置CSS样式
   * @param ele
   * @param cssBatch
   */
  function setBatchCss(ele, cssBatch) {
    // 批量设置css样式就是遍历传入的CSS对象，把样式和值依次设置给元素对象即可
    // 检验cssBatch是不是一个对象
    if (typeof cssBatch !== 'object') {
      throw TypeError('cssBatch is not a object')
    }
    for (let key in cssBatch) {
      // hasOwnProperty() 检测某个属性是不是对象私有的，是则true，不是返回false
      if (cssBatch.hasOwnProperty(key)) { // 去复习for in循环、面向对象
        setCss(ele, key, cssBatch[key]);
      }
    }

  }

  /**
   * @desc 封装一个css的方法，根据参数不同有不同的功能
   * @param ele 元素
   * @param param CSS样式或者CSS样式对象
   * @param val CSS样式值
   * @returns {*} 获取时是CSS样式值
   */
  function css(ele, param, val) {
    // 根据传参的不同调用不同的方法
    // 第二个参数是字符串类型，不传val时，就是获取
    // 第二个参数是字符串时，并且第三个参数传了，就是设置单个样式
    // 第二个参数是对象时，就是批量设置CSS样式
    if (typeof param === 'string' && typeof val === 'undefined') {
      return getCss(ele, param);
    }
    if (typeof param === 'string' && typeof val !== 'undefined') {
      setCss(ele, param, val);
      return;
    }
    if (typeof param === 'object') {
      setBatchCss(ele, param);
    }
  }

  /**
   * @desc 判断当前元素有没有某个类名
   * @param ele 元素对象
   * @param className 类名
   * @returns {boolean} 是否有类名
   */
  function hasClass(ele, className) {
    let cN = className.trim();
    // return ele.className.includes(cN);
    return ele.className.indexOf(cN) !== -1;
  }

  /**
   * @desc 为元素添加类名
   * @param ele 元素对象
   * @param className 类名
   */
  function addClass(ele, className) {
    let cN = className.trim();
    if (hasClass(ele, cN)) return;

    // 优化：如果原来的类名末尾有空格，就可以不拼接空格，如果没有时再拼接
    let reg = / $/g;
    // 'box '
    if (reg.test(ele.className)) {
      ele.className += `${cN}`;
    } else {
      ele.className += ` ${cN}`;
    }
  }

  /**
   * @desc 移除类名
   * @param ele 元素对象
   * @param className 类名
   */
  function removeClass(ele, className) {
    let cN = className.trim();
    let reg = new RegExp(cN, 'g');
    ele.className = ele.className.replace(reg, '');
  }

  return {
    arrLikeToAry,
    toJSON,
    win,
    offset,
    getCss,
    setCss,
    setBatchCss,
    css,
    hasClass,
    addClass,
    removeClass
  }
})();

