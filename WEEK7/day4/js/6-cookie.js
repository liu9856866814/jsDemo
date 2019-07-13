// cookie可以和localStorage/sessionStorage一并用作本地存储;但是cookie主业不是做本地存储,它是用来保存http状态;

// HTTP协议是无状态的: 即服务器向客户端发送数据结束后,连接就会关闭,而服务器不会记录发生的这一切; 这就会有一个问题,如果我们
// 登录后向服务器请求了一次资源,等服务器响应结束就会把连接断开,但是我们第二次请求一个其他资源,但是服务器已经忘记了你已经登录过;
// 所以服务器要求你重新登录,这就导致每次请求东西都要登录;

// 为了解决这个问题,http协议发明了cookie;cookie是http协议的一部分,既不属于客户端技术也不属于服务端技术;但是客户端和服务端都有
// 操作cookie的技术;

// cookie是用来保存http状态;
// cookie是存在客户端的,但是客户端和服务端都可以操作cookie; 在客户端发起请求时,http协议会从客户端把所有的cookie读取出来,然
// 后带着这些cookie去请求服务器;服务器收到请求后,服务器收到请求里面是包含cookie的,服务器就可以任意操作cookie了.服务器响应时
// 会让http协议把cookie再带给客户端(浏览器检测到响应中有cookie,浏览器会自动把cookie保存起来);

// 以登录为例,第一次我们带着用户的用户名和密码去请求服务器,服务端拿到用户名和密码去数据库中匹配,如果匹配成功就成功登录,与此同时,
// 服务端会在cookie中设置一个值表示登录成功, 等响应时,这个cookie就会带到客户端,浏览器会自动把它存起来;下一次再请求时,http协议
// 会自动带着cookie去请求;

// 浏览器操作cookie:

// 1. js获取cookie -> document.cookie
console.log(document.cookie);

// 2. js设置cookie -> document.cookie = 'key=value;'配置属性

// document.cookie = 'name=mabin;';
// document.cookie = 'name=bingo;';
document.cookie = 'age=18;';
document.cookie = 'title=宇宙集团军总司令;';

console.log(document.cookie);

// 设置cookie时的注意事项:
// 1. 如果设置多个,就需要多次给document.cookie赋值
// 2. 如果同名cookie,后面的会覆盖前面的;

// cookie的配置属性;
// domain 可以访问这个cookie的域是哪个
// path 可以访问当前cookie的路径, 一般设置为/ 表示根目录;所有根目录下面的路径都能访问这个cookie;

document.cookie = 'name=bingo;path=/'; // 如果同各cookie配置属性不同不能互相覆盖;

// expires cookie的过期时间; cookie是有时效性的, 如果过期,浏览器就会删除这个cookie;expires的值是一个GMT时间;
// *** 删除cookie的原理: 把cookie的expires设置为一个过去的时间,浏览器会自动删了它;
document.cookie = 'age=18;expires=Sat, 13 Jul 2019 08:54:00 GMT';
// maxAge: cookie的有效期,表示cookie在多长时间之内是有效的,如1小时,1分钟;单位是ms; (服务端设置的)

// *** http-only: 只能给http协议使用,前端不能获取也不能修改;(服务端设置的)






