<template>
    <div>
        <h1>{{page}}</h1>
        <p class='p1'>这是home.vue</p>

    </div>
</template>

<script>
    export default {
        name: "home",
        data(){
            return{
                page: 'HOME'
            }
        }
    }
</script>

<style scoped>
    .p1{
        font-size: 30px;
        color: lightblue;
    }
</style>