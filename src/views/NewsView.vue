<template>
  <div>
    <div v-for="user in this.$store.state.news">{{user.title}}</div>
  </div>
</template>

<script>

  export default {
    name: "NewsView",

    created() {
      this.$store.dispatch('FETCH_NEWS')
      // fetchNewsList()
      //   .then((response) => {
      //       this.users = response.data;
      //     }
      //   )
      //   .catch((err) => {
      //       // eslint-disable-next-line no-console
      //       console.log(err)
      //     }
      //   )
    },
  }
</script>

<style scoped>

</style>
