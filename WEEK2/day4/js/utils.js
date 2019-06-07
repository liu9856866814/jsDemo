// 封装一个工具集：增强代码的可复用性，提升开发效率；
// utils 工具包，这里面提供了常用的方法；

window.utils = (function () {
    /**
     * @desc 类数组转数组
     * @param arrLike 类数组对象
     * @returns {Array} 类数组对象转成的数组
     */
   function arrLikeToary(arrLike) {
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
   return {
       arrLiketoAry: arrLikeToary,
       toJSON: toJSON
       // arrLikeToary 两种写法等价
   }
})();
