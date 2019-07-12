// 1. 锤子手机模态框：我们第一次打开页面时，弹出了模态框，我们点击遮罩层会消失，并且我们再次刷新页面，这个框不再出现；但
// 是我们之前做的模态框关闭后再刷新还是会出现；这就说明一个问题，锤子记录了你已经关闭过模态框，以及关闭的时间；

// 2. 京东的购物车不登录也可以添加到购物车。而我没有登录的时候，京东服务器是不知道我是谁，所以不可能把数据存在服务器上；
// 那么这些东西存在哪儿了？

// 3. 一个网站有N多个页面，我们只需要在其中一个登录了，其他页面就可以拿到我的登录信息了；那么其他页面怎么拿到的呢？

// 以上问题都是用本地存储技术解决；

// 我们在浏览器中每次打开一个页面都会形成一个新的独立全局作用域；所以在浏览器打开两个页面，一个A，另一个B;因为A和B都会形成
// 不同的作用域，所以A和B不能互相访问变量；但实际项目中又多有这样的需求，比如在A页面中登录了，B页面可以拿到登录信息；

// 页面都是在浏览器中打开的，我们可以让浏览器充当中介，让A页面把信息存储到浏览器，B页面需要的时候就去浏览器上取；
// 这种操作就是本地存储；

// 常见的本地存储：
// 1. cookie (cookie 是http协议的一部分)
// 2. localStorage 本地存储 （HTML5新增的，浏览器技术）
// 3. sessionStorage 会话存储 （HTML5新增的，浏览器技术）

// localStorage: 本地永久存储(除用户或者我们手动删除)
// localStorage: 是挂载在window上的对象
// console.log(window.localStorage);

// localStorage.setItem(key, value) 向localStorage中添加数据
// key: 名
// value: 值
// key 和 value要求是字符串或者数字,如果不是就会默认转换成字符串;

localStorage.setItem('name','mabin');
localStorage.setItem('age', '18');
localStorage.setItem('age', '19'); // 注意不能设置两个同名的属性，如果同名，后面的会覆盖前面的
localStorage.setItem('title', '顺顺利利开开心心');
localStorage.setItem({name: 1}, {name: 2});// '[object Object]' 如果存的key和value不是字符串类型的，它会把他们转成字符串，调用
// toString() 方法,对象toString -> '[object Object]';

// localstorage.getItem(key) 根据key获取localStorage中存储的数据
let title = localStorage.getItem('title');
console.log(title);

let sex = localStorage.getItem('sex');
console.log(sex); // null 获取localStorage中不存在的key会返回null;

// 项目中经常会有把对象或者数组存储到localStorage中的需要,就是需要把对象或者数组变成JSON格式的字符串再存;
// 等用时,要记得JSON.parse() 变成对象;
let auth = {
    code: 0,
    data: [
        {
            auth: 'operator',
            auth_desc: '业务员',
            path: '/list'
        },
        {
            auth: 'operator',
            auth_desc: '业务员',
            path: '/orders'
        }
    ],
    msg: 'ok'
};
// JSON.parse() 把JSON字符串变成对象
// JSON.stringify() 把对象变成JSON格式的字符串
localStorage.setItem('auth', JSON.stringify(auth));

// localStorage.removeItem(key);  删除指定key的数据

localStorage.removeItem('title');

// localStorage.clear(); 清空localStorage
// localStorage.clear();

// sessionStorage 是客户端本地存储的一种,叫做会话存储
// session 是服务端技术,存在服务器上的;

// 打开一个页卡就是和服务器形成了一个会话; sessionStorage只在当前会话中有效; 不能在其他会话中使用另外会话中的数据;

// sessionStorage 的操作
// setItem(key, value); 存储, key和value是字符串类型的
// getItem(key) 获取指定key的值
// removeItem(key) 删除指定key的数据

// Unix 时间戳是以秒为单位的,js的时间戳是以毫秒为单位; PHP的时间戳就是unix时间戳; 如果服务端让你传给他时间戳,要问一下是毫秒
// 还是秒.如果服务端要秒,要用js时间戳除以1000,如果服务端返回给你的是时间戳,如果是unix时间戳,需要乘以1000转换js时间戳;
// [unix时间戳比js少三位,一看比较短就是uninx的]

// 注意会话存储: 刷新,并不会使sessionStorage失效,但是关闭页面后sessionStorage中的数据就没有了;

// localStorage 和 sessionStorage的区别:
// 1. localStorage(简写ls) 是永久存储(如果用户或者开发删除了,就没有了), sessionStorage是会话存储,只在当前会话有效不能跨会话使用;
// 2. 打开2个页卡(相同的源(也称域) 就是一个网站),打开两个页面;如果用localStorage在A页卡中设置,在B页卡中可以获取到;但是
// sessionStorage不行;


