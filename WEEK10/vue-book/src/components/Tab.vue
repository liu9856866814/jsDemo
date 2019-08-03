<template>
  <div class="footer">
    <router-link to="/home">
      <i class="iconfont icon-home"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/list">
      <i class="iconfont icon-chazhaobiaodanliebiao"></i>
      <span>列表</span>
    </router-link>
    <router-link to="/collect">
      <i class="iconfont icon-shoucang"></i>
      <span>收藏</span>
    </router-link>
    <router-link to="/add">
      <i class="iconfont icon-tianjia-xue"></i>
      <span>添加</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Tab'
}
</script>

// scoped表示组件私有的样式 lang="less" 表示style标签中是less
<style scoped lang="less">
  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    border-top: 1px solid #ccc;
    background: #fff;
    z-index: 100;
    display: flex;

    a {
      display: flex;
      flex-direction: column;
      flex: 1; /* 让每个a平分宽度 */
      align-items: center;
      font-size: 18px;
      color: #aaa;
    }
    .router-link-active {
      // vue-router 会给当前选中的路由，一个选中的类名，如果添加选中样式，给这个类名添加样式就行了
      color: #4cae4c;
    }
  }
</style>
