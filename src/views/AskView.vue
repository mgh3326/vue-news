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
  import bus from "../utils/bus"

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
      bus.$emit('start:spinner');
      setTimeout(() => {
        this.$store.dispatch('FETCH_ASK')
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
