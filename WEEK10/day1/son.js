// 儿子组件依赖孙子组件: 儿子组件要用孙子组件

// 导入grandson.js
import grandson from './grandson.js';

export default {
    template: `<div>{{gen}} <grandson></grandson></div>`,
    data (){ // 每个组件都可以有data, data里面的数据是这个组件私有的数据; 当然,组件也可以接收来自父组件的数据.
        return {
            gen: 'Son'
        }
    },
    components: {
        grandson
    }
}

// 组件嵌套时： 先把这个组件导入进来，然后注册组件，最后用时在template里面写组件对应的标签即可;