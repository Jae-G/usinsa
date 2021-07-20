<template>
  <v-container>
    <dl>
      <dt>판매가</dt>
      <dd> {{ productInfo.productPrice.length !== 0 && productInfo.productPrice | comma }}원</dd>
    </dl>
  </v-container>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>
