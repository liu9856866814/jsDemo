// 求字符串中出现次数最多的字符以及个数
var str = 'Youthisnotatimeoflifei';
// 1. 计数：对象法
// 2. 找到次数最多的是谁，即次数（假设法）
let obj = {};
for (let k = 1; k < str.length; k++) {
    let item = str[k];
    if(obj[item] === undefined) {
        obj[item] = 1;// 此时item代表的字符串中第一次出现
    }else{
        // obj[item] 不是undefined 说明之前已经出现过了，所以此时只需要在原有次数上累加即可
        obj[item]++;
    }
}
// 循环过后，obj中有每个字母和字母出现的次数
console.log(obj);
// 找到出现次数最多的字符，以及出现次数
let count = 0; // 假设出现次数最多的字符的次数
let chars = ''; // 出现次数最多的字符
for(let key in obj){
    // key 就是对象的属性 obj[key];
    // console.log(key, obj[key]);
    if(obj[key] > count){ // 如果当前字母出现次数比count大，就要把假设值修改成这个较大值；
        count = obj[key];
        chars = key;
    }
}
console.log(count, chars);
