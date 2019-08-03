import axios from 'axios'

// axios 拦截器 （中间件）

// 请求拦截器: 给请求增加通用配置， 例如在头信息中增加Token
axios.interceptors.request.use((config) => {
  // http 请求的配置信息, 可以在这里配置请求头等信息
  // 配置完要return 出去
  return config
})

// 响应拦截器: 对处理服务端响应的数据进行通用处理;
axios.interceptors.response.use((res) => {
  // 1. 对响应数据进行处理
  // 2. 对返回的状态码做统一处理: 例如接口返回 -10010 code 表示登录状态失效, 前端可以在拦截器中做统一处理,例如重定向到登录页
  if (res.data.code === -10010) {
    // 重定向到登录页
    return
  }
  return res.data
})

// 把配置后的 axios 导出
export default axios
