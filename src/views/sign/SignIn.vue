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
    <v-form
      ref="form"
    >
      <v-text-field
        v-model="email"
        outlined
        label="이메일"
      />
      <v-text-field
        v-model="pwd"
        outlined
        label="패스워드"
        type="password"
      />
      <v-btn
        x-large
        dark
        block
        @click="signIn"
      >
        로그인
      </v-btn>
    </v-form>
  </v-card>
</template>

<script>
import firebase from "firebase";

export default {
  data: () => ({
    email : '',
    emailRules : [
      v => !!v || '이메일을 입력해주세요',
      v => /.+@.+\..+/.test(v) || '이메일 형식을 확인해주세요',
    ],
    pwd : '',
    pwdRules : [
      v => !!v || '비밀번호를 입력해주세요',
    ]
  }),
  methods: {
    signIn() {
      if (this.$refs.form.validate() === true) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email,this.pwd )
          .then((res) => {
            this.$store.dispatch('setUserInfo',res.user.email,res.user.l)
            this.$router.push('/')
          })
          .catch((err) => {
            console.log(err)
            alert('이메일 또는 비밀번호를 확인해주세요')
          })
      }
      else {
        alert('이메일 또는 비밀번호를 확인해주세요')
      }
    }

  }
}
</script>

<style lang="scss" scoped>

</style>
