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
          <h2>신상품</h2>
        </v-card-title>
        <v-row>
          <v-col
            v-for="product in newProductsInfo"
            :key="product.productCode"
            lg="3"
            md="3"
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
    items: [
      {
        src: 'https://image.nbkorea.com/NBRB_Site/20210709/NB20210709101640222001.jpg',
      },
      {
        src: 'https://image.nbkorea.com/NBRB_Site/20210708/NB20210708103655270001.jpg',
      },
      {
        src: 'https://image.nbkorea.com/NBRB_Site/20210621/NB20210621101537543001.jpg',
      },
      {
        src: 'https://image.nbkorea.com/NBRB_Site/20210625/NB20210625134501151001.jpg',
      },
    ],
    newProductsInfo: [
      {
        productCode : '1',
        productName : '빨간 티셔츠',
        productPrice : '20000',
        productImagePath : 'https://cdn.pixabay.com/photo/2016/12/06/09/31/blank-1886008_960_720.png',
        productLike : 2
      },
      {
        productCode : '2',
        productName : '나이키 조던 84',
        productPrice : '125000',
        productImagePath : 'https://cdn.pixabay.com/photo/2019/01/26/22/48/nike-3957127_960_720.jpg',
        productLike : 3687
      },
      {
        productCode : '3',
        productName : '양말 (3pack)',
        productPrice : '25000',
        productImagePath : 'https://cdn.pixabay.com/photo/2019/07/11/08/19/sock-4330279_960_720.jpg',
        productLike : 42387
      },
      {
        productCode : '4',
        productName : '컨버스',
        productPrice : '75000',
        productImagePath : 'https://cdn.pixabay.com/photo/2017/06/09/18/28/sneakers-2387899_960_720.jpg',
        productLike : 2
      },
    ]
  })
}
</script>

<style lang="scss" scoped>

</style>
