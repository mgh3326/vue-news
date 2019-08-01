<template>
  <div>
    <section>
      <user-profile :info="fetchedItem">
<!--        <div slot="username">{{fetchedItem.user}}</div>-->
        <router-link slot="username" :to="`/user/${fetchedItem.user}`">
          {{fetchedItem.user}}
        </router-link>
        <template slot="time">{{'Posted ' + fetchedItem.time_ago}}</template>
      </user-profile>

    </section>
    <!--    <section>-->
    <!--      <div class="user-container">-->
    <!--        <div>-->
    <!--          <i class="fas fa-user"></i>-->
    <!--        </div>-->
    <!--    <div class="user-description">-->
    <!--      <router-link :to="`/user/${fetchedItem.user}`">-->
    <!--        {{fetchedItem.user}}-->
    <!--      </router-link>-->
    <!--      <div class="time">{{fetchedItem.time_ago}}</div>-->
    <!--    </div>-->
    <!--  </div>-->
    <section>
      <h2>
        {{fetchedItem.title}}
      </h2>
    </section>


    <section>
      <div v-html="fetchedItem.content"></div>
    </section>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import UserProfile from "@/components/UserProfile";

  export default {
    name: "ItemView",
    components: {UserProfile},
    computed: {
      // itemInfo() {
      //   return this.$store.state.item;
      // },
      ...mapGetters(['fetchedItem']),
    },
    created() {
      const itemId = this.$route.query.id;
      this.$store.dispatch('FETCH_ITEM', itemId);
    },
  }
</script>

<style scoped>
  .user-container {
    display: flex;
    align-items: center;
    padding: 0.5rem;
  }

  .fa-user {
    font-size: 2.5rem;
  }

  .user-description {
    padding-left: 8px;
  }

  .time {
    font-size: 0.7rem;
  }
</style>
