<template>
  <v-card
    flat
    tile
  >
    <v-carousel
      hide-delimiter-background
      show-arrows
      :cycle="true"
    >
      <v-carousel-item
        v-for="(midBanner,i) in midBannerInfo"
        :key="i"
        :src="midBanner.imagePath"
      />
    </v-carousel>

    <v-container class="mx-auto my-12">
      <v-card flat>
        <v-card-title
          primary-title
          class="justify-center pb-12"
        >
          <h2>제품</h2>
        </v-card-title>
        <v-row>
          <v-col
            v-for="product in productsInfo"
            :key="product.productCode"
            lg="3"
            md="4"
            sm="6"
            xs="12"
          >
            <Product
              :product-code-child="product.productCode"
              :product-name-child="product.productName"
              :product-price-child="product.productPrice"
              :product-image-path-child="product.productImagePath"
              :product-like-child="product.productLike"
            />
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </v-card>
</template>

<script>
import Product from '@/components/product'
export default {
  components : {
    Product
  },
  data : () => ({
    midBannerInfo: [],
    productsInfo: [],
  }),
  created(){
    this.getMainData()
  },
  methods : {
    async getMainData() {
      try {
        let response
        //상품 데이터 가져오기
        response = await this.$axios.get(process.env.VUE_APP_FIREBASE_URL + 'product.json')
        this.productsInfo = response.data.filter((product) => product.useYn === 'y')
        //console.log(this.productInfo)
        //중앙 배너 이미지 가져오기
        response = await this.$axios.get(process.env.VUE_APP_FIREBASE_URL + 'mid-banner.json')
        this.midBannerInfo = response.data.filter((product) => product.useYn === 'y')
      } catch (err) {
        console.log(err)
      }
    }
  },

}
</script>

<style lang="scss" scoped>

</style>
