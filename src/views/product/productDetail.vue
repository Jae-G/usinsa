<template>
  <v-container>
    <v-row class="mt-16 justify-center">
      <v-col
        cols="12"
        md="6"
      >
        <v-card class="">
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
              <dd> {{ productInfo.productPrice | comma }}원</dd>
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
                {{ productInfo.productLike | comma }}
              </dd>
            </dl>

            <v-divider class="mt-5" />
            <v-card
              flat
              class="mt-5"
            >
              <v-select
                v-model="selectSize"
                :items="size"
                label="사이즈"
                outlined
                dense
              />

              <template v-if="selectSize !== ''">
                <v-divider class="mb-4" />
                <v-row>
                  <v-col cols="2">
                    {{ selectSize }}
                  </v-col>
                  <v-col
                    cols="5"
                    align="center"
                  >
                    <button
                      type="button"
                      @click="decreaseCnt"
                    >
                      -
                    </button>
                    <input
                      v-model="cnt"
                      type="text"
                    >
                    <button
                      type="button"
                      @click="increaseCnt"
                    >
                      +
                    </button>
                  </v-col>
                  <v-col
                    cols="3"
                    align="end"
                  >
                    {{ productInfo.productPrice * cnt | comma }} 원
                  </v-col>
                  <v-col
                    cols="2"
                    align="end"
                  >
                    <button
                      id="deleteButton"
                      type="button"
                      @click="deleteItem"
                    >
                      X
                    </button>
                  </v-col>
                </v-row>
              </template>
            </v-card>
          </v-card-text>

          <v-card-actions>
            <v-row>
              <v-col>
                <v-btn
                  color="light"
                  block
                >
                  장바구니
                </v-btn>
              </v-col>
              <v-col>
                <v-btn
                  color="success"
                  block
                >
                  구매
                </v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
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
    selectSize : '',
  }),

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
        console.log(this.size)

      } catch (err) {
        console.log(err)
      }
    },
    increaseCnt() {
      this.cnt++
    },
    decreaseCnt() {
      if (this.cnt > 1) {
        this.cnt--
      }
    },
    deleteItem() {
      this.selectSize = ''
    }
  }
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
  border-width: 1px;
}
#deleteButton {
  background-color: #ffffff;
  border : none
}
input {
  width: 44px;
  border: solid #eff1f5;
  border-width: 1px;
  text-align: center;
}


</style>
