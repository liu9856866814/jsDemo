// HTTP协议在客户端和服务端建立连接和断开连接不是一次就完成的.而是要经历三次握手和四次挥手;

// 三次握手:
// 第一次握手: 客户端向服务端发送syn码数据包,表示客户端要求和服务端建立连接;
// 第二次握手: 服务端收到客户端的连接请求后,会发送ack码数据到客户端,表示你的连接请求已经收到,再次询问客户端是否确认建立连接;
// 第三次握手: 客户端收到ack码以后会检验是否正确,如果正确,客户端会再次发送ack码给服务端,表示确认建立连接;

// 三次握手都成功以后才会建立连接, 然后才会发送数据;

// 四次握手:
// 第一次挥手: 当客户端发送数据结束后,会发送FIN码数据包给服务端,表示告知服务端客户端的数据已经传递完了.
// 第二次挥手: 当服务端收到FIN后,会发送ack给客户端,表示服务端已经知道客户端传完了.客户端收到ack以后就会把传递数据给服务端
// 的通道关闭;
// 第三次挥手: 当服务端把响应的数据发送完毕后,会发送一个fin给客户端,告知客户端响应的数据已经发送完毕;
// 第四次挥手: 当客户端收到fin后,会发送一个ack码数据包给服务端,告知服务端客户端已经知道数据发送完毕;服务端收到ack码后,可以
// 安心的把数据传输通道关闭掉.

// syn/ack/fin 不是客户端和服务端要传递的数据,就是用来测试连得上连不上的东西;

// 我们访问www.baidu.com 客户端真正要传递给服务器的数据是请求百度首页; 服务器真正响应给客户端的也是百度首页的html文件;
// ack / syn / fin 都不是真正传递的内容;




