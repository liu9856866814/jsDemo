/*  // CommonJS
let greeter = require('./Greeter');  // 可以不写.js
document.querySelector('#root').appendChild(greeter());
console.log(12334);*/
import axios from 'axios'; // 有了webpack以后,再用axios等第三方的库,用npm安装后, 在哪儿用,直接在哪import即可
// ESModule
import greeter from './Greeter'; // 可以不写.js

let render = () => {
    document.getElementById('root').appendChild(greeter());
};
render();

// 此时 webpack-dev-server并没有/api/addUser这个接口,但配置后,它可以帮你转发到指定的服务上; (代理)
axios.post('/api/addUser', {
    name: 'mabin',
    phone: '1242343'
}).then((res) => {
    console.log(res.data);
});

axios.post('/help/home/', {

});

import './index.css'; // 向js中导入css文件
import './index.less'; // 向js中导入less文件