// git: 最流行的版本控制工具
// svn: 比较悠久的版本管理工具;

// 版本是什么?
// 版本: 版本是修改,添加到版本库之后这个修改就成为了一个版本;
// 版本库: 版本库记录所有的修改的库;

// 版本的作用:
// 当代码出现问题时,可以让代码快速回退到没有问题的版本,而不用一行一行的撤销回去;(回滚)
// 此外版本库不记录谁改动的,什么时间修改的,修改了哪里方便对比和管理;(code-review)

// git和svn的区别:
// git分布式版本控制工具
// svn集中式版本控制工具

// 集中式: svn有一个中央服务器,所有的版本库和成员的代码都在中央服务器上放着;svn要想生成版本,直接把修改提交到服务器上,在服
// 务器上生成版本;

// 分布式: git也有一个中央服务器,git的中央服务器也存储了版本库和代码;但是在成员本地也有一个版本库生成版本时先在本地生成一
// 个版本,然后再同步到中央服务器;

// svn必须通过网络把变更同步到服务器上才能生成版本,所以svn是依赖网络的,大多数情况下svn服务器部署在内网;

// git 生成本地版本不需要网络,但是把本地版本同步到远程时是需要网络的;

// git 使用的Linux的命令行




