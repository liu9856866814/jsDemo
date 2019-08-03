import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import List from './views/List.vue'
import Detail from './views/Detail.vue'
import Collect from './views/Collect.vue'
import Add from './views/Add.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
      // alias: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/list',
      component: List
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/collect',
      component: Collect
    },
    {
      path: '/add',
      component: Add
    }
  ]
})

// router.js 作用在于配置路由映射表， 导出 VueRouter 的实例， 为什么导出 VueRouter 的实例？
// 因为最后创建根实例时, 要把 VueRouter 的实例作为配置项传给 Vue 的实例;
