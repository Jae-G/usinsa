<template>
  <v-card flat>
    <v-carousel
      hide-delimiter-background
      show-arrows
    >
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      />
    </v-carousel>

    <v-container class="mx-auto my-12">
      <v-card flat>
        <v-card-title
          primary-title
          class="justify-center pb-12"
        >
          <h2>What's New</h2>
        </v-card-title>

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
              <b>정장</b>
            </v-card-title>

            <v-card-subtitle>
              15,200원
            </v-card-subtitle>

            <v-card-actions>
              <v-btn
                color="orange lighten-2"
                text
              >
                Explore
              </v-btn>

              <v-spacer />
            </v-card-actions>
          </v-card>
        </template>
      </v-card>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data : () => ({
    items: [
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
      },
    ],
  })
}
</script>

<style lang="scss" scoped>

</style>
