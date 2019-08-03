import axios from './config'

// 新增图书
export let addBook = book => axios.post('/api/add', book)
