window.utils = (function () {
    function arrLikeToAry(arrLike) {
        var arr =[];
        try{
            return Array.from(arrLike);
        } catch (e) {
            for (var i = 0; i < arrLike.length; i++) {
                arr.push(arrLike[i]);
            }
        }
        return arr;
    }
    function win(attr, val) {
        if(typeof val === 'undefined'){
            return document.documentElement[attr] || document.body[attr];
        }else{
            document.documentElement[attr] = document.body[attr] = val;
        }
    }
    function toJSON(jsonStr) {
        if('JSON' in window){
            return JSON.parse(jsonStr)
        }else{
            return eval('('+ jsonStr +')');
        }
    }
    function offset(ele) {
        let left = ele.offsetLeft;
        let top = ele.offsetTop;
        let parent = ele.offsetParent;
        while( parent && parent.nodeName !== 'BODY' ){
            left += parent.clientLeft +　parent.offsetLeft;
            top += parent.clientTop + parent.offsetTop;
            parent = parent.offsetParent;
        }
        return {
            top,
            left
        }
    }
    return {
        arrLikeToAry,
        win,
        toJSON,
        offset
    }
})();
