<template>
    <div>
        <h1>{{page}}</h1>
        <ul>
            <li v-for="(item, index) in ary" :key="index">
                名字: {{item.name}} <br>
                年龄: {{item.age}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "list",
        data(){
            return{
                page: 'LIST',
                ary: [
                    {
                        name: 'mabin',
                        age: 18
                    },
                    {
                        name: 'xiaofei',
                        age: 17
                    },
                    {
                        name: 'xzh',
                        age: 17
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>