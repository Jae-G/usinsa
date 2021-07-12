<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      :src="productImagePathChild"
      height="300px"
      style="cursor: pointer;"
      @click="moveProductPage()"
    />

    <v-card-title>
      <b>{{ productNameChild }}</b>
    </v-card-title>

    <v-card-subtitle>
      {{ productPriceChild | comma }}원
    </v-card-subtitle>

    <v-card-actions>
      <v-icon
        color="red"
        class="ml-2 mr-2"
      >
        mdi-heart
      </v-icon>
      <span class="red--text">{{ productLikeChild | comma }}</span>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {

  filters:{
    comma(val){
  	return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  },
  props:{
    productCodeChild:{
      type:Number,
      required: true,
    },
    productNameChild:{
      type:String,
      required: true,
    },
    productPriceChild:{
      type:Number,
      required: true,
    },
    productImagePathChild:{
      type:String,
      required: true
    },
    productLikeChild:{
      type:Number,
      required: true
    },
  },
  methods : {
    moveProductPage() {
      this.$router.push(
        { path: `/product/${this.productCodeChild}`,
          query: { productCode: this.productCodeChild  }
        })
    }
  }

}
</script>

<style lang="scss" scoped>


</style>
