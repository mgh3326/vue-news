<template>
  <div>
    <list-item></list-item>
<!--    <ul class="news-list">-->
<!--      <li v-for="item in fetchedAsk" class="post">-->
<!--        <div class="points">-->
<!--          {{item.points}}-->
<!--        </div>-->
<!--        <div>-->
<!--          <p class="news-title">-->
<!--            <a v-bind:href="item.url">-->
<!--              {{item.title}}</a>-->
<!--          </p>-->
<!--        </div>-->
<!--        <small class="link-text">{{item.time_ago}} by-->
<!--          <router-link v-bind:to="`/user/${item.user}`" class="link-text">{{item.user}}</router-link>-->
<!--        </small>-->
<!--      </li>-->
<!--    </ul>-->
    <!--    <div v-for="item in fetchedAsk">{{item.title}}</div>-->
    <!--    <p v-for="item in fetchedAsk">-->
    <!--      <router-link v-bind:to="item.url">{{item.title}}</router-link>-->
    <!--      <small>{{item.time_ago}} by {{item.user}}</small>-->
    <!--    </p>-->
  </div>
</template>

<script>


  import {mapState, mapGetters} from "vuex";
  import ListItem from "@/components/ListItem";

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

    },
    components: {
      ListItem,
    }
  }
</script>

<style scoped>
</style>
