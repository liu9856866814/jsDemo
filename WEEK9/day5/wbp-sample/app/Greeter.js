let config = require('./config.json');
console.log(config);
export default function () {
    let greeter = document.createElement('div');
    greeter.innerText = config.textContent;
    return greeter;
}