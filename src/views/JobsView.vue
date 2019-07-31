<template>
  <div>
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

  export default {
    name: "JobsView",
    data() {
      return {
        jobs: []
      }
    },
    created() {
      this.$store.dispatch('FETCH_JOBS');

    }
  }
</script>

<style scoped>
  .news-list {
    margin: 0;
    padding: 0;
  }

  .post {
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eeeeee;
  }

  .points {
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42b883
  }

  .news-title {
    margin: 0;
  }

  .link-text {
    color: #828282;
  }
</style>
