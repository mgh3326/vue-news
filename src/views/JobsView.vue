<template>
  <div>
    <div v-for="job in jobs">{{job.title}}</div>
  </div>
</template>

<script>
  import {fetchJobsList} from "@/api";

  export default {
    name: "JobsView",
    data() {
      return {
        jobs: []
      }
    },
    created() {
      fetchJobsList()
        .then(response => {
            this.jobs = response.data;
          }
        )
        .catch(err => {
            // eslint-disable-next-line no-console
            console.log(err)
          }
        )
    }
  }
</script>

<style scoped>

</style>
