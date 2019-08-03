// main.js 是 Vue 应用的主入口, 这个文件就是创建 Vue 的实例, 在创建实例的时候把该配置的属性都要配置, 如 router, store, el

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueAwesomeSwiper from 'vue-awesome-swiper' // 导入第三方的插件不需要写路径
import 'swiper/dist/css/swiper.css' // 导入 swiper 需要的样式
// 使用vue-awesome-swiper 要导入然后use
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
