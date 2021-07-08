<template>
  <v-card
    class="mx-auto my-16"
    max-width="374"
    flat
  >
    <v-form>
      <v-text-field
        v-model="email"
        outlined
        label="이메일"
        :rules="emailRules"
      />

      <v-text-field
        v-model="pwd"
        outlined
        label="패스워드"
        type="password"
        :rules="pwdRules"
      />

      <v-text-field
        v-model="rePwd"
        type="password"
        outlined
        label="패스워드 확인"
        :rules="[...rePwdRules,pwdConfirmRule]"
      />
    </v-form>
    <v-btn
      x-large
      dark
      block
    >
      회원가입
    </v-btn>
  </v-card>
</template>

<script>
export default {
  data : () => ({
    emailRules : [
      v => !!v || '이메일을 입력해주세요',
      v => /.+@.+\..+/.test(v) || '이메일 형식을 확인해주세요',
    ],
    pwdRules : [
      v => v && v.length >= 8 || '최소 8자 이상 입력해주세요'
    ],
    rePwdRules : [
      v => !!v || '확인을 위해 비밀번호를 한 번 더 입력해주세요.'
    ],

  }),

  computed : {
    pwdConfirmRule() {
      return () => (this.pwd === this.rePwd) || '패스워드가 동일하지 않습니다.'
    },
  }
}
</script>

<style lang="scss" scoped>

</style>
