import axios from './config'

// 获取收藏夹列表
export let getCollectBook = () => axios.get('/api/collect')

// 从收藏夹中删除图书
export let removeCollect = id => axios.get('/api/rmCollect?id=' + id)
