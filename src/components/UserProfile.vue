<template>

  <div class="user-container">
    <div>
      <i class="fas fa-user"></i>
    </div>
    <div class="user-description">

      <slot name="username">

      </slot>
      <!--      <div>username : {{info.id}}</div>-->
<!--                <router-link :to="`/user/${itemInfo.user}`">-->
<!--                  {{itemInfo.user}}-->
<!--                </router-link>-->
      <!--          <div class="time">{{itemInfo.time_ago}}</div>-->
      <div class="time">
        <slot name="time">
          <!--        time : {{info.created}}-->
        </slot>
      <slot name="karma"></slot>

    </div>
      </div>
  </div>
  <!--      <h2>-->
  <!--        {{itemInfo.title}}-->
  <!--      </h2>-->
  <!--    </section>-->
  <!--    <section>-->
  <!--      <div v-html="itemInfo.content"></div>-->
  <!--    </section>-->
</template>

<script>

  export default {
    name: "UserProfile",
    props: {
      info: Object,
    },
    // computed: {
    //   itemInfo() {
    //     return this.$store.state.item;
    //   },
    //   ...mapGetters(['fetchedItem']),
    // },
    // created() {
    //   const itemId = this.$route.query.id;
    //   this.$store.dispatch('FETCH_ITEM', itemId);
    // },
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
