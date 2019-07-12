// URI / URN / URL
// URI: 统一资源标识符
// URN: 统一资源名称
// URL: 统一资源定位符

// 重点讲URL:
// http://www.dahai.com:443/courseMode.html?id=1@key=value&name=mb#top

// http/https 协议
// www.dahai.com 域名
// :443 端口号
// /courseMode.html 路径
// ?id=1@key=value&name=mb 问号传参（可有可无），是客户端传给服务端的数据；
// #top 锚点（哈希）

// 只请求一个www.baidu.com 域名时，相当于请求 www.baidu.com/index.html
// www.baidu.com 对应的是服务器上的一个文件夹，访问www.baidu.com 时，服务器会默认把这个文件夹下的html文件给客户端；
