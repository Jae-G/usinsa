<template>
  <v-app-bar
    elevate-on-scroll
    tile
    color="white"
    flat
    app
  >
    <v-btn
      id="no-background-hover"
      href="/"
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

    <v-toolbar-items>
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
  </v-app-bar>
</template>

<script>
import MainMixin from '../../mixin/index'
export default {
  mixins:[MainMixin],
  data: () => ({

  }),
}
</script>

<style lang="scss" scoped>
</style>
