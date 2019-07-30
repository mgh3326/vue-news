<template>
  <div>
    <div v-for="item in ask">{{item.title}}</div>
  </div>
</template>

<script>
  import {fetchAskList} from "@/api";

  export default {
    name: "AskView",
    data() {
      return {
        ask: []
      }
    },
    created() {

      fetchAskList()
        .then((response) => {
            this.ask = response.data;
          }


        )
        .catch((err) => {
            // eslint-disable-next-line no-console
            console.log(err)
          }
        )
    }
  }
</script>

<style scoped>

</style>
