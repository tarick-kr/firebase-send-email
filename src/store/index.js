import Vue from 'vue'
import Vuex from 'vuex'
import order from './order'
import cart from './cart'
import general from './general'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    order,
    cart,
    general
  }
})
