<template>
  <div>
    <list-item></list-item>
  </div>

</template>

<script>

  import ListItem from "@/components/ListItem";
  import bus from "../utils/bus"

  export default {
    name: "JobsView",
    created() {
      bus.$emit('start:spinner');
      setTimeout(() => {
        this.$store.dispatch('FETCH_JOBS')
          .then(() => {
            bus.$emit('end:spinner');
          })
          .catch((err) => {
            // eslint-disable-next-line no-console
            console.log(err);
          })
      }, 3000)
    },
    components: {
      ListItem,
    }
  }
</script>

<style scoped>
</style>
