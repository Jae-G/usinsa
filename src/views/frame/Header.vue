<template>
  <v-card
    flat
    tile
    class="overflow-hidden"
  >
    <v-app-bar
      tile
      color="black"
    >
      <v-btn
        dark
        href="/"
        x-large
        color="black"
      >
        <h2>
          USINSA
        </h2>
      </v-btn>

      <v-tabs
        :value="tabIdx"
        optional
        dark
        hide-slider
      >
        <!-- <v-tab>
          NEW
        </v-tab>
        <v-tab>
          정장
        </v-tab> -->
      </v-tabs>

      <v-btn
        v-ripple="false"
        dark
        href="/sign-in"
        color="black"
      >
        로그인
      </v-btn>
      <v-btn
        dark
        href="/sign-up"
        color="black"
      >
        회원가입
      </v-btn>
    </v-app-bar>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    tabIdx: -1
  })
}
</script>

<style lang="scss" scoped>

</style>
