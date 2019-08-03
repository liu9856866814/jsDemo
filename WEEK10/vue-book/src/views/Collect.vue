<template>
  <div>
    <Header :back="true">收藏页</Header>
    <div class="content">
      <ul class="container">
        <router-link v-for="(item, index) in collectBooks"
                     :key="index"
                     tag="li"
                     :to="{name: 'detail', params: {id: item.bookId}}">
          <img :src="item.bookCover" alt="">
          <div class="right">
            <h4>{{item.bookName}}</h4>
            <p>{{item.bookInfo}}</p>
            <p class="price">{{item.bookPrice}}</p>
            <button class="btn" @click.stop="remove(item.bookId)">删除</button>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import { getCollectBook, removeCollect } from '../model/collect'

export default {
  name: 'Collect',
  data () {
    return {
      collectBooks: []
    }
  },
  created () {
    this.getAllBook()
  },
  methods: {
    async getAllBook () {
      this.collectBooks = await getCollectBook()
    },
    async remove (id) {
      await removeCollect(id)
      this.getAllBook() // 删除后,要重新请求列表数据
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
        margin-left: 20px;
        padding-top: 20px;

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
