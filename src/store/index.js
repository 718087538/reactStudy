import { createStore } from 'redux'  // 引入createStore方法
import reducer from './reducer'

// const store = createStore()          // 创建数据存储仓库
const store = createStore(reducer)

export default store                 //暴露出去