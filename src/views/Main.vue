<template>
  <div class="main">
    <!-- Navbar.vue -->

    <!-- CreatePosts.vue -->
    <CreatePosts 
      :initial-user="userData"
    />
    <!-- NewestPosts.vue -->

    <!-- Popular.vue -->
    <Popular />

    <!-- ReplyModal.vue -->
  </div>
</template>

<style lang="scss" scoped>
.main {
  width: 1440px;
  height: 1200px;
}
</style>

<script>
import Popular from "./../components/Popular";
import tweetsJSON from "./../../public/tweets.json";
import CreatePosts from "./../components/CreatePosts";

export default {
  name: "Main",
  components: {
    Popular,
    CreatePosts
  },
  data() {
    return {
      tweets: [],
      popular: [],
      userData: [],
    };
  },
  methods: {
    fetchData() {
      this.tweets = [...tweetsJSON.tweets];
      this.popular = [...tweetsJSON.popular];
      this.userData = { ...tweetsJSON.userData };
    },
  },
  created() {
    this.fetchData();
  },
};
</script>
