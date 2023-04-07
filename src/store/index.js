import { createStore } from 'vuex'
import prodList from './modules/prodList'


export default createStore({
  modules: {
    prodList
  }
})
