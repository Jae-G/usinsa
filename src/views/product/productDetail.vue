<template>
  <v-container>
    <v-row class="mt-16 justify-center">
      <v-col
        cols="12"
        md="6"
      >
        <v-card>
          <v-img
            :src="productInfo.productImagePath"
          />
        </v-card>
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <v-card>
          <v-card-title primary-title>
            <h2>{{ productInfo.productName }}</h2>
          </v-card-title>
          <v-divider />
          <v-card-text>
            <dl>
              <dt>판매가</dt>
              <dd> {{ productInfo.productPrice.length !== 0 && productInfo.productPrice | comma }}원</dd>
            </dl>
            <dl>
              <dt>브랜드</dt>
              <dd> {{ productInfo.brand }}</dd>
            </dl>
            <dl>
              <dt>좋아요</dt>
              <dd class="red--text">
                <v-icon color="red">
                  mdi-heart
                </v-icon>
                <!-- {{ productInfo.productLike.length !== 0 ? (productInfo.productLike | comma) : '' }} -->
                {{ productInfo.productLike.length !== 0 && productInfo.productLike | comma }}
              </dd>
            </dl>

            <v-divider class="mt-5" />
            <v-card
              flat
              class="mt-5"
            >
              <v-select
                v-model="selectedSize"
                :items="size"
                label="사이즈"
                outlined
                dense
                @change="addItem(selectedSize)"
              />

              <div
                v-for="item in selectItems"
                :key="item.size"
              >
                <v-row>
                  <v-col cols="2">
                    {{ item.productSize }}
                  </v-col>
                </v-row>
                <v-row>
                  <v-col
                    cols="6"
                  >
                    <button
                      type="button"
                      @click="item.cnt > 1 && item.cnt--"
                    >
                      -
                    </button>
                    <input
                      v-model="item.cnt"
                      type="text"
                    >
                    <button
                      type="button"
                      @click="item.cnt++"
                    >
                      +
                    </button>
                  </v-col>
                  <v-col
                    cols="4"
                    align="end"
                  >
                    {{ productInfo.productPrice * item.cnt | comma }} 원
                  </v-col>
                  <v-col
                    cols="2"
                    align="end"
                  >
                    <button
                      id="deleteButton"
                      type="button"
                      @click="deleteItem(item.productSize)"
                    >
                      X
                    </button>
                  </v-col>
                </v-row>
                <v-divider
                  class="my-4"
                />
              </div>
              <v-row>
                <v-col>
                  <h3>총 주문금액</h3>
                </v-col>
                <v-col align="end">
                  {{ getSumPrice | comma }} 원
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  md="7"
                  sm="6"
                  xs="6"
                >
                  <v-btn
                    class="white--text"
                    color="black"
                    block
                    @click="moveOrderPage"
                  >
                    구매
                  </v-btn>
                </v-col>
                <v-col
                  md="5"
                  sm="6"
                  xs="6"
                  align="end"
                >
                  <v-btn
                    color="white"
                    class="ml-1"
                  >
                    <v-icon>mdi-basket-outline</v-icon>
                  </v-btn>
                  <v-btn
                    class="ml-2"
                    color="white"
                  >
                    <v-icon>mdi-heart-outline</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

  filters:{
    comma(val){
  	return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  },
  data : () => ({
    productInfo : [],
    cnt : 1,
    size : [],
    selectedSize : '',
    selectItems : [],
    sumPrice : 0,
    isLoading : false
  }),
  computed : {
    getSumPrice: function() {
      let sumCnt = 0;
      this.selectItems.forEach(item => {
        sumCnt += item.cnt
      })
      return this.productInfo.productPrice * sumCnt
    }
  },

  created() {
    this.getProductData()
  },
  methods : {
    async getProductData() {
      try {
        //상품 데이터 가져오기
        let response = await this.$axios.get(process.env.VUE_APP_FIREBASE_URL + 'product/' + this.$route.params.id + '.json')
        this.productInfo = response.data
        this.size = this.productInfo.size.replaceAll("'","").split(",")
        this.isLoading = true
      } catch (err) {
        console.log(err)
      }
    },
    deleteItem(size) {
      // 삭제할 아이템 인덱스 찾기
      let delItemIdx= this.selectItems.findIndex(item => item.productSize === size)
      this.selectItems.splice(delItemIdx,1)
    },
    addItem(size) {
      let isDuplicate = false

      // 구매 예정 상품중에 중복된 사이즈 있는지 찾기
      this.selectItems.filter(item => {
        if (item.productSize === size) {
          isDuplicate = true
        }
      })

      if (isDuplicate === false)
        this.selectItems
          .push({
            productSize : size,
            productCode : this.productInfo.productCode,
            cnt : 1
          })
      console.log(this.selectItems)
    },
    moveOrderPage() {
      this.$router.push(
        { path: `/order/${this.productInfo.productCode}`})
    }


  },

}
</script>

<style lang="scss" scoped>
dl {
  margin-top: 5px;
}
dt {
  float:left;
  margin-left: 5px;
  margin-right: 50px;
}
dd {
  color: black;
}
button {
  background-color: #f1f2f4;
  width: 34px;
  border: solid #eff1f5;
  border-width: 1.5px;
}
#deleteButton {
  background-color: #ffffff;
  border : none
}
input {
  width: 44px;
  border: solid #eff1f5;
  border-width: 1.5px;
  text-align: center;
}


</style>
