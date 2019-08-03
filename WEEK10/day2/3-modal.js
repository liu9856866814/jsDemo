let modalTpl = `
    <div class="modal" v-show="open">
        <div class="content">
            <button @click="closeModal">关闭</button>
        </div>
    </div>
`;

export default {
    template: modalTpl,
    methods: {
        closeModal(){
            this.$emit('update:open', false);
        }
    },
    props: ['open'],
    mounted(){
        console.log('x');
    }
};