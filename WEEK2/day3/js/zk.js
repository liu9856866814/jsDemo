/**
 * @desc 截取数组
 * @param n 截取起始位置索引
 * @param m 截取结束位置索引
 * @returns {Array} 返回截取后的字符串，无参返回原数组克隆体
 */
Array.prototype.mySlice=function mySlice(n,m){
    var begin,end,ary=new Array();
    //不传参数时或者只传如一个非有效数字的时候,克隆数组
    if((n==undefined && m==undefined)||(isNaN(Number(n))&&arguments.length===1)){
        for(let i=0;i<this.length;i++){
            ary[ary.length]=this[i];
        }
        return ary;
    }
    //传入两个参数的时候，第二个参数不能是非有效数字类型,可以是带小数点的数字，但是可以是undefined
    if(m!=undefined&&isNaN(Number(m))) {
        return ary;
    }
    //第二个参数没传就是默认数组长度，考虑到可能传入小数，所以使用parseInt转整数
    end=m===undefined?this.length:parseInt(m);
    //传入两个参数时如果第一个是非有效数字则做0计算
    begin=isNaN(Number(n))?0:n;
    //考虑到可能传入的是负数索引，需要进行倒数截取
    begin=begin<0?this.length-Math.abs(n):parseInt(begin);
    end=end<0?this.length-Math.abs(end):end;
    var ary=[];
    for(var i=0;i<this.length;i++){
        if(i>=begin&&i<end){
            ary[ary.length]=this[i];
        }
    }
    return ary;
}
