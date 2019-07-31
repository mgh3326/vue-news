<template>
  <div>
    <ul class="news-list">
      <li v-for="item in fetchedAsk" class="post">
        <div class="points">
          {{item.points}}
        </div>
        <div>
          <p class="news-title">
            <a v-bind:href="item.url">
              {{item.title}}</a>
          </p>
        </div>
        <small class="link-text">{{item.time_ago}} by
          <router-link v-bind:to="`/user/${item.user}`" class="link-text">{{item.user}}</router-link>
        </small>
      </li>
    </ul>
    <!--    <div v-for="item in fetchedAsk">{{item.title}}</div>-->
    <!--    <p v-for="item in fetchedAsk">-->
    <!--      <router-link v-bind:to="item.url">{{item.title}}</router-link>-->
    <!--      <small>{{item.time_ago}} by {{item.user}}</small>-->
    <!--    </p>-->
  </div>
</template>

<script>


  import {mapState, mapGetters} from "vuex";

  export default {
    name: "AskView",
    computed: {
      ...mapGetters([
        'fetchedAsk',
      ])
      // ...mapState({
      //   ask: state => state.ask
      // })
    },
    created() {
      this.$store.dispatch('FETCH_ASK');

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
