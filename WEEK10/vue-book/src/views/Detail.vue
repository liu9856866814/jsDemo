<template>
  <div>
    <Header :back="true">详情页</Header>
    <div class="content">
      <div class="container">
        <ul>
          <li>
            <label>书名</label>
            <input type="text" v-model="book.bookName">
          </li>
          <li>
            <label>信息</label>
            <input type="text" v-model="book.bookInfo">
          </li>
          <li>
            <label>价格</label>
            <input type="text" v-model="book.bookPrice">
          </li>
        </ul>
        <button class="btn" @click="updateBook">确认修改</button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import { getOneBook, updateBook } from '../model/list'

export default {
  name: 'Detail',
  data () {
    return {
      book: {
        bookName: '',
        bookPrice: '',
        bookInfo: ''
      }
    }
  },
  async created () {
    let { id } = this.$route.params
    this.book = await getOneBook(id)
  },
  methods: {
    async updateBook () {
      let result = await updateBook(this.book)
      if (result.code === 0) this.$router.push('/list')
    }
  },
  components: {
    Header
  }
}
</script>

<style scoped lang="less">
  .container{
    position: absolute;
    top: 40px;
    left: 0;
    z-index: 101;
    padding: 20px;
    height: 100%;

    li {
      padding-left: 10px;
      label {
        display: block;
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
      }
      input {
        display: block;
        width: 260px;
        height: 35px;
        line-height: 35px;
        padding-left: 15px;
        margin-bottom: 10px;
        font-size: 20px;
      }
    }
    button {
      width: 260px;
      height: 40px;
      margin: 20px;
      display: block;
      font-size: 20px;
      color: #fff;
      background: red;
      border: none;
      border-radius: 5px;
      line-height: 40px;
      text-align: center;
    }
  }
</style>
