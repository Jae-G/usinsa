<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Header from '@/views/frame/Header'
export default {
  components : {
    Header
  }
}
</script>

<style lang="scss" scoped>

</style>
