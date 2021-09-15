<template>
  <div class="main">
    <!-- Navbar.vue -->
    <Navbar />
    <!-- CreatePosts.vue -->
    <CreatePosts :initial-user="userData" />
    <!-- NewestPosts.vue -->
    <NewestPosts :initial-tweets="tweets" :initial-tweets-reply="tweetsReply" />
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
import Navbar from "./../components/Navbar";
import tweetsJSON from "./../../public/api-tweets.json";
import CreatePosts from "./../components/CreatePosts";
import NewestPosts from "./../components/NewestPosts";

export default {
  name: "Main",
  components: {
    Popular,
    Navbar,
    CreatePosts,
    NewestPosts,
  },
  data() {
    return {
      tweets: [],
      tweetsReply: [],
      popular: [],
      userData: [],
    };
  },
  methods: {
    fetchData() {
      this.tweets = [...tweetsJSON.tweets];
      this.tweetsReply = [...tweetsJSON.tweetsReply];
      this.popular = [...tweetsJSON.popular];
      this.userData = { ...tweetsJSON.userData };
    },
  },
  created() {
    this.fetchData();
  },
};
</script>
