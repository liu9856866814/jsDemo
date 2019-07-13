// session: 是服务端技术,意思是即会话控制;

// 和cookie不同,cookie是存在客户端的,而session是存在服务器上,并且不会随着http传递;
// cookie可以在客户端随意被更改,服务器为了杜绝这种事情,服务器也搞了一个存储用户信息的东西,并且这个东西只在服务器放着,不给
// 别人看;这个东西就是session;

// session 的原理:
// 以登录为例,登录时客户端会把用户名和密码发给服务器,服务端收到请求后会去数据库中匹配,如果匹配成功,就可以登录成功了.
// 接着服务端会在cookie中设置一个表示登录状态的值,例如isLogin=true;同时服务器会生成一份session文件,这个session文件有一个id,
// 这个id叫做session-id.这个session文件中一般会存储用户的id,登录时间等信息;然后把session-id会写到cookie中;然后http协议会带着
// 这些cookie响应给客户端;
// 客户端收到响应后,会自动把响应中的cookie存储在浏览器中,这些cookie就包含了session-id;
//等再次发起请求时,http协议会带着所有的cookie去请求,服务端收到请求后从cookie中找到session-id,然后根据session-id去查找session文件;
// 然后从session文件中获取用户的信息,如果信息有效就继续响应请求,否则认为登录失效;

// session和cookie的区别:
// 1. session是服务端技术,session存在服务器上;
// 2. cookie是http协议的一部分,存在客户端;

// session和cookie的联系: session-id是存在cookie中的,会随着http通信时在客户端和服务端来回传递;



