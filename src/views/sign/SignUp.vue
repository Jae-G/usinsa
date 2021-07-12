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
        회원가입
      </h1>
    </v-card-title>
    <v-form
      ref="form"
      v-model="isValid"
    >
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
      @click="signUp"
    >
      회원가입
    </v-btn>
  </v-card>
</template>

<script>
import firebase from 'firebase'
export default {
  data : () => ({
    email : '',
    emailRules : [
      v => !!v || '이메일을 입력해주세요',
      v => /.+@.+\..+/.test(v) || '이메일 형식을 확인해주세요',
    ],

    pwd : '',
    pwdRules : [
      v => !!v || '비밀번호를 입력해주세요',
      v => v && v.length >= 8 || '최소 8자 이상 입력해주세요'
    ],
    rePwd : '',
    rePwdRules : [
      v => !!v || '확인을 위해 비밀번호를 한 번 더 입력해주세요.'
    ],
    isValid : false

  }),

  computed : {
    pwdConfirmRule() {
      return () => (this.pwd === this.rePwd) || '패스워드가 동일하지 않습니다.'
    },
  },
  methods : {
    signUp() {
      if (this.$refs.form.validate() === true) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.pwd)
          .then(() => {
            alert('회원가입이 완료되어있습니다.')
            this.$router.push('/')
          })
          .catch(err => {
            alert(err.message)
          })
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
