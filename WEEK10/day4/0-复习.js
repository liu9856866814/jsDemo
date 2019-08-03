// 导航守卫: 验证用户到底该不该看到它想看到的页面, 验证权限和登录状态;
/* 1. 全局前置导航守卫: router.beforeEach((to, from, next) => {
*     to 要去往路由的信息
*     from 当前下要离开的路由信息, to 和 from 都是路由对象, 动态路由的参数和问号传参、当前的路由
*  })
*
*
 */

// 2. 路由独享的导航守卫: 在路由映射表中配置独享的守卫
/**/
let home = {};
let user = {};
let routes = [
    {
        path: "/user",
        component: user,
        beforeEnter(to, from, next){
            // 路由独享守卫
        }
    }
];

// 3. 组件内的导航守卫
// 3.1 beforeRouteEnter (to, from, next) {} 不能访问this实例
// 3.2 beforeRouteUpdate (to, from, next) {} 动态路由,组件被复用, 路由参数发生改变时调用
// 3.3 beforeRouteLeave (to, from, next) {} 离开当前页时触发, 提醒用户数据是否已经保存;

// webpack-vue: 需要以下东西:
// 安装 vue-template-compiler 依赖
// 配置 vue-loader 和 vue-loader 的插件
// ** 修改 webpack 配置文件后如果是开发中, 要重启 dev-server; 如果是生产环境, 要重新打包

// npm run dev 是因为在 package.json 的 scripts 下面配置了;
// scripts 下面的 start 命令比较特殊, 直接 npm start (不用写 run )

// vue-cli 官方的脚手架, 可以快速搭建项目, 默认了很多的 webpack 配置



