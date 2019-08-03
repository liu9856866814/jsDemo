<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <el-row>
      <el-col :span="4">
        <el-input v-model="name" placeholder="请输入用户名" clearable></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4">
        <el-input v-model="pwd" :disabled="isDisabled" placeholder="请输入密码"></el-input>
      </el-col>
    </el-row>
    <div>
      <!--:min='1' el-input-number 可以收到一个数字, 不bind, 就会收到一个字符串-->
      <el-input-number v-model="num" :min="1" :max="10"></el-input-number>
    </div>
    <div>
      {{value}}
      <!--label 是 option 上展示的汉字-->
      <!--value 是 option 的value-->
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data () {
    return {
      name: '',
      pwd: '',
      num: 1,
      options: [{
        value: '1',
        label: '黄金糕'
      }, {
        value: '2',
        label: '双皮奶'
      }, {
        value: '3',
        label: '蚵仔煎'
      }, {
        value: '4',
        label: '龙须面'
      }, {
        value: '5',
        label: '北京烤鸭'
      }],
      value: ''
    }
  },
  computed: {
    isDisabled () {
      return !this.name
    }
  },
  components: {
  }
}
</script>
