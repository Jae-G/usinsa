<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="300px"
    />

    <v-card-title>
      <b>{{ productNameChild }}</b>
    </v-card-title>

    <v-card-subtitle>
      15,200
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  props:{
    productNameChild : String
  }
}
</script>

<style lang="scss" scoped>

</style>
