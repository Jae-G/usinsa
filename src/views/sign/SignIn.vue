<template>
  <v-card
    class="mx-auto my-16"
    max-width="374"
    flat
  >
    <v-card-title
      primary-title
      class="justify-center mb-15"
    >
      <h1>
        로그인
      </h1>
    </v-card-title>
    <v-text-field
      outlined
      label="이메일"
    />
    <v-text-field
      outlined
      label="패스워드"
    />
    <v-btn
      x-large
      dark
      block
    >
      로그인
    </v-btn>
  </v-card>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>
