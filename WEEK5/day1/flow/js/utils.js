window.utils = (function () {
    /**
     * @desc 类数组转数组
     * @param arrLike
     * @returns {any[]}
     */
   function arrLikeToAry(arrLike) {
       var arr = [];
       try{
           arr = Array.from(arrLike);
        }catch (e) {
           for (var i = 0; i < arrLike.length; i++) {
               arr[i].push(arrLike[i]);
           }
     }
     return arr;
   }

    /**
     * @desc json格式转数组
     * @param data
     * @returns {number | any|any}
     */
   function toJSON(data) {
       if('JSON' in window){
           return JSON.parse(data);
       }else {
           return eval('(' + data + ')');
       }
   }

    /**
     * @desc 获取或者设置属性值
     * @param attr
     * @param val
     * @returns {*}
     */
   function win(attr, val) {
       if (typeof val === 'undefined'){
           return document.documentElement[attr] || document.body[attr];
       }else{
           document.documentElement[attr] = document.body[attr] = val;
       }
   }

    /**
     * @desc 获取元素在页面中的位置;
     * @param ele
     * @returns {{top: number, left: number}}
     */
   function offset(ele) {
       let left = ele.offsetLeft;
       let top = ele.offsetTop;
       let parent = ele.offsetParent;
       while (parent && parent.nodeName !== 'BODY'){
           left += parent.clientWidth + parent.offsetLeft;
           top += parent.clientHeight + parent.offsetTop;
           parent = parent.offsetParent;
       }
       return {
           left,
           top
       }
   }
   return{
       arrLikeToAry,
       toJSON,
       win,
       offset
   }
})();