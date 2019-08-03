// main.js 是Vue 页面的主入口
// components 下面放的都是 .vue 文件 (一个文件就是一个组件)

// 这个js 主要的任务就是创建 Vue 实例
import App from './components/app.vue';

import Vue from 'vue';

import router from './router';

// 创建Vue 实例

new Vue({
    el: '#app',
    // template: `<App />`,
    render: (h) => h(App), // h 是createElement 方法, render 函数是用来替代 template 属性的, webpack + 配置 Vue 时, 不能
    // 使用template,
    router
});


// 现阶段目标: main.js app.vue router.js 这三者是如何联系起来的;
// main.js 是创建一个 vue 实例, 最终只把 app.vue 这个组件挂载到 DOM 节点上; 而 app.vue 中用 router-view, 而 router-view 可以
// 根据路由展示组件; 组件通过路由映射表和路由关联起来, 最后把路由映射表传给 new VueRouter;

// 最后把 VueRouter 的实例传给 Vue 的实例;


