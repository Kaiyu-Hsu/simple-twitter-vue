<template>
  <div class="main">
    <!-- Navbar.vue -->
    <Navbar :initial-user="userData" />
    <!-- CreatePosts.vue -->
    <CreatePosts :initial-user="userData" />
    <!-- NewestPosts.vue -->
    <NewestPosts 
      :initial-tweets="tweets" 
      :initial-tweets-reply="tweetsReply"
      :initial-user="userData"
    />
    <!-- Popular.vue -->
    <Popular />    
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
import tweetsJSON from "./../../public/api-tweets-v2.json";
import CreatePosts from "./../components/CreatePosts";
import NewestPosts from "./../components/NewestPosts";
import {fetchData} from "./../api/tweets"

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
      userData: {},
    };
  },
  methods: {
    fetchData() {
      this.tweets = [...tweetsJSON.tweets];
      this.tweetsReply = [...tweetsJSON.tweetsReply];
      this.popular = [...tweetsJSON.popular];
      this.userData = { ...tweetsJSON.userData };
    },
    async fetchAPIData() {
      try {
        const response = await fetchData.getTweets()
        
        if (response.statusText !== "OK") {
          throw new Error(response.data.message)
        }
        // TODO localstorage
        // localStorage.setItem("currentUserId", response.data)

        console.log('我拿到資料囉嘿嘿 ')
        console.dir(response)
        console.log(`---`)
      } catch(error) {
        console.log("error", error);
      }
    }
  },
  created() {
    // this.fetchData();
    this.fetchAPIData()
  },
};
</script>
