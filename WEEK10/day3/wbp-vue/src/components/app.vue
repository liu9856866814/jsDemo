<template>
    <div>
        {{msg}}
        <br>
        <router-link to="/list" tag="button">去列表</router-link>
        <router-link to="/home" tag="button">去首页</router-link>
        <!--app.vue 中一般用来写router-view 和导航或者导航菜单的 -->
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data(){
            return{
                msg: 'hello world'
            }
        }
    }
</script>

<style scoped>
    /*scoped 表示样式只在当前组件生效*/
</style>