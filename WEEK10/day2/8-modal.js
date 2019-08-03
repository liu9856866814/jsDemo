let modalTpl = `
    <div class="modal" v-show="open">
        <div class="content">
            <!--<slot name="before"></slot>
            <button @click="closeModal">关闭</button>
            <slot></slot>--> <!--匿名slot-->
            <slot name="header"></slot> <!--具名slot-->
            <slot name="body"></slot>
            <slot name="footer"></slot>
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