import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    email : '',
    token : '',
  },
  mutations: {
    SET_CURRENT_EMAIL(state,email) {
      state.email = email
    },
    SET_CURRENT_TOKEN(state,token) {
      state.token = token
    }
  },
  actions: {
    setUserEmail(context,email) {
      context.commit('SET_CURRENT_EMAIL',email)
    },
    setUserToken(context,token) {
      context.commit('SET_CURRENT_TOKEN',token)
    }
  },
  modules: {
  }
})
