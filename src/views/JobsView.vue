<template>
  <div>
    <list-item></list-item>

    <ul class="news-list">
      <li v-for="job in this.$store.state.jobs" class="post">
        <div class="points">
          {{job.points || 0}}
        </div>
        <div>
          <p class="news-title">
            <a v-bind:href="job.url">
              {{job.title}}</a>
          </p>
        </div>
        <small class="link-text">{{job.time_ago}} by
          <!--          <router-link v-bind:to="`/user/${job.domain}`" class="link-text">{{job.domain}}</router-link>-->
          <a v-bind:href="job.url" class="link-text">{{job.domain}}</a>
        </small>
      </li>
    </ul>
    <!--    <div v-for="job in this.$store.state.jobs">{{job.title}}</div>-->
    <!--    <p v-for="job in this.$store.state.jobs">-->
    <!--      <a v-bind:href="job.url">{{job.title}}</a>-->
    <!--      <small>{{job.time_ago}}, {{job.domain}}</small>-->
    <!--    </p>-->
  </div>

</template>

<script>

  import ListItem from "@/components/ListItem";

  export default {
    name: "JobsView",
    data() {
      return {
        jobs: []
      }
    },
    created() {
      this.$store.dispatch('FETCH_JOBS');

    },
    components: {
      ListItem,
    }
  }
</script>

<style scoped>
</style>
