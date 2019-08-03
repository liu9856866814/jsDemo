<template>
    <div class="header">
      <slot></slot>
      <i class="iconfont icon-fanhui" v-if="back" @click="goBack"></i>
    </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    back: {
      default: false
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="less">
  .header{
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 100;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: lightblue;
    font-size: 20px;

    .iconfont {
      position: absolute;
      left: 10px;
    }
  }
</style>
