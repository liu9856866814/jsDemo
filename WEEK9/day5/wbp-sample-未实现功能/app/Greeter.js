/* // CommonJS
let config = require('./config.json');
module.exports = function () {
    var greeter = document.createElement('div');
    greeter.innerText = config.textContent;
    return greeter;
};
*/

import config from './config'; // 用ESModule 导入JSON文件
export default function () {
    var greeter = document.createElement('div');
    greeter.innerText = config.textContent;
    return greeter;
}