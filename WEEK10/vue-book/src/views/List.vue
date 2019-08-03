<template>
  <div>
    <Header :back="true">列表页</Header>
    <div class="content">
      <ul class="container">
<!--        <li v-for="(item, index) in allBooks"
            :key="index"
            @click="go(item.bookId)">
          <img :src="item.bookCover" alt="">
          <div class="right">
            <h4>{{item.bookName}}</h4>
            <p>{{item.bookInfo}}</p>
            <p class="price">{{item.bookPrice}}</p>
            <button class="btn" @click.stop="remove(item.bookId)">删除</button>
            <button class="btn" @click.stop="collect(item)">收藏</button>
          </div>
        </li>-->
        <router-link v-for="(item, index) in allBooks"
                     :key="index"
                     tag="li"
                     :to="{name: 'detail', params: {id: item.bookId}}">
          <img :src="item.bookCover" alt="">
          <div class="right">
            <h4>{{item.bookName}}</h4>
            <p>{{item.bookInfo}}</p>
            <p class="price">{{item.bookPrice}}</p>
            <button class="btn" @click.stop="remove(item.bookId)">删除</button>
            <button class="btn" @click.stop="collect(item)">收藏</button>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import { getAllBooks, deleteBook, collectBook } from '../model/list'

export default {
  name: 'List',
  data () {
    return {
      allBooks: []
    }
  },
  created () {
    this.getAllBook()
  },
  methods: {
    async getAllBook () {
      this.allBooks = await getAllBooks()
    },
    async remove (id) {
      await deleteBook(id)
      this.getAllBook() // 删除后,要重新请求列表数据
    },
    async collect (book) {
      await collectBook(book)
      // 在这里还可以提示收藏成功
    },
    go (id) {
      // this.$router.push('/detail/' + item.bookId) 方法1
      this.$router.push({
        name: 'detail',
        params: {
          id
        }
      })
    }
  },
  components: {
    Header
  }
}
</script>

<style scoped lang="less">
  .container {
    margin-bottom: 50px;
    li {
      padding: 10px;
      overflow: hidden;
      img {
        width: 160px;
        float: left;
      }
      .right {
        float: left;
        padding-top: 20px;
        margin-left: 20px;

        .price {
          margin-bottom: 10px;
          font-size: 20px;
          color: red;
        }
        .btn {
          border: none;
          outline: none;
          border-radius: 5px;
          width: 60px;
          height: 30px;
          color: #ffffff;
          background: red;
          font-size: 18px;
          &:nth-of-type(1) {
            margin-right: 5px;
          }
        }
      }
    }
  }
</style>
