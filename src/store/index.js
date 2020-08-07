// import data from './data.json'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    newsList: []
  },
  mutations: {
    SET_NEWS_LIST: (state, payload) => state.newsList = payload
  },
  actions: {
    getNewsList: ({ commit }) => {
      commit('SET_NEWS_LIST', [])
    }
  }
})
