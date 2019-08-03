<template>
  <div>
    <Header :back="true">添加图书</Header>
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
          <li>
            <label>封面</label>
            <input type="text" v-model="book.bookCover">
          </li>
        </ul>
        <button class="btn" @click="addBook">添加图书</button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import { addBook } from '../model/add'

export default {
  name: 'Add',
  data () {
    return {
      book: {
        bookName: '',
        bookPrice: '',
        bookInfo: '',
        bookCover: ''
      }
    }
  },
  methods: {
    async addBook () {
      let result = await addBook(this.book)
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
    z-index: 100;
    padding: 20px;
    /*height: 100%;*/

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
