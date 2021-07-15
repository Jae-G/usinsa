<template>
  <v-app-bar
    elevate-on-scroll
    tile
    :color="scrollVal > 0 ? 'white' : 'transparent' "
    flat
    app
  >
    <v-btn
      id="no-background-hover"
      color="transparent"
      class="elevation-0 black--text"
      :ripple="false"
      x-large
      @click="moveToPage_mixin('/')"
    >
      <h2>
        USINSA
      </h2>
    </v-btn>

    <v-spacer />

    <v-toolbar-items v-if="!isLogin">
      <v-btn
        v-ripple="false"
        color="transparent"
        class="elevation-0 black--text"
        @click="moveToPage_mixin('/auth/sign-in')"
      >
        <h3>로그인</h3>
      </v-btn>
      <v-btn
        color="transparent"
        class="elevation-0 black--text"
        @click="moveToPage_mixin('/auth/sign-up')"
      >
        <h3>회원가입</h3>
      </v-btn>
    </v-toolbar-items>

    <v-toolbar-items v-else>
      <v-btn
        v-ripple="false"
        color="transparent"
        class="elevation-0 black--text"
      >
        <h3>장바구니</h3>
      </v-btn>
      <v-btn
        v-ripple="false"
        color="transparent"
        class="elevation-0 black--text"
        href="/"
      >
        <h3>로그아웃</h3>
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
import firebase from 'firebase'
import mainMixin from '../../mixin/index'

export default {

  mixins:[mainMixin],
  data: () => ({
    scrollVal : "",
    isLogin : false,
    tabIdx: -1,
  }),
  created() {
    window.addEventListener("scroll",this.getScrollVal)
    this.chkToken()
  },
  methods : {
    getScrollVal() {
      this.scrollVal = window.scrollY
    },
    getScroll() {
      console.log(this.scrollVal)
    },
    chkToken() {
      firebase.auth().onAuthStateChanged((user) => {
        if (this.$store.state.token === user.uid){
          this.isLogin = true
          console.log("true")
        }
        else {
          this.isLogin = false
          console.log("false")
        }
      })
    },
    signOut() {
      firebase.auth().signOut().then(() => {
        this.$store.dispatch('setUserEmail','')
        this.$store.dispatch('setUserToken','')
        this.isLogin = false
      }).catch(err => {

      })
    }
  }
}
</script>

<style lang="scss" scoped>
.white {
   background-color: white!important;
   opacity: 0.8;
   border-color: transparent!important;
 }
</style>
