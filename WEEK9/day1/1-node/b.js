let a = require('./a'); // .js 和 .json 可以省略扩展名
// console.log(a);
let customs = require('./custom'); // 导入一个json文件，nodejs自动把json处理成对象（这和fs.readFile不同，fs从文件中读取，如果设置编码，读取json时，得到的是字符串）

console.log(customs);
console.log(typeof customs);
console.log(Array.isArray(customs));
let fs = require('fs');
let cons = fs.readFileSync('./custom.json', 'utf8');
console.log(cons);
console.log(typeof cons);
console.log(Array.isArray(cons));
