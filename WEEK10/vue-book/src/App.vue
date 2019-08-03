<template>
  <div id="app">
    <!--这个app.vue 里面用来装导航和 router-view-->
    <!--导航就是 router-link, router--->
    <Tab></Tab>
    <router-view/>
  </div>
</template>

<script>
import Tab from './components/Tab.vue'

export default {
  name: 'App',
  components: {
    Tab
  }
}
</script>

<style>
/*一般app.vue的style标签中写的是全局样式*/
  * {
    margin: 0;
    padding: 0;
  }
  ul, li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  .content{
    /*内容区域的样式*/
    position: absolute;
    top: 40px;
    bottom: 50px;
    width: 100%;
  }
</style>
