import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState()
  ],
  state: {
    email : '',
    token : '',
  },
  getters : {
    getEmail : state => state.email,
    getToken : state => state.token
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
