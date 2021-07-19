import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueFullPage from 'vue-fullpage.js'
import axios from 'axios'
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_URL,
  authDomain: "usinsa-4be58.firebaseapp.com",
  databaseURL: "https://usinsa-4be58-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "usinsa-4be58",
  storageBucket: "usinsa-4be58.appspot.com",
  messagingSenderId: "48688437796",
  appId: "1:48688437796:web:bbec7b8292260f91ab16b1",
  measurementId: "G-0X9NBBD58V"
}

firebase.initializeApp(firebaseConfig)


Vue.prototype.$axios = axios
Vue.use(VueFullPage)



Vue.config.productionTip = false
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
