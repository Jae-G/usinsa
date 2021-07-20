export default {
  methods : {
    moveToPage_mixin(path) {
      if (this.$route.fullPath === path) {
        this.$router.go(this.$router.currentRoute)
      }else{
        this.$router.replace(path)
      }
    }
  }
}

