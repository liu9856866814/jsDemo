export default {
    template: `<div>{{msg}} <button @click="changeMsg">修改msg</button></div>`,
    props: {
        msg: {
            type: [String, Number], // 类型校验有多个类型可以用一个数组
        }
    },
    methods: {
        changeMsg(){
            // 把msg 修改成 呵呵
            // this.$emit('change-msg', '呵呵');
            // 配合sync修饰符，简化事件写法：this.$emit('update:prop名'， 数据)
            this.$emit('update:msg', '呵呵')
        }
    }
}