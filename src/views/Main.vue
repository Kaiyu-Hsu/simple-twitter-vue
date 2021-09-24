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
import CreatePosts from "./../components/CreatePosts";
import NewestPosts from "./../components/NewestPosts";
import { tweets } from "./../api/tweets";
import user from "./../api/user";
import admin from "./../api/admin"

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
      tweetsReplies: []
    };
  },
  methods: {
    async getTweets() {
      try {
        const response = await tweets.getTweets();

        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }
        console.log("Fetch Tweets Data");
        console.dir(response);
        this.tweets = [...response.data];
        // this.apiTweets = [...response.data];
      } catch (error) {
        console.log("error", error);
      }
    },
    async fetchUser(id) {
      try {
        const response = await user.getUserInfo(id);

        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }
        console.log("Fetch User");
        console.dir(response);
        this.userData = { ...response.data };
      } catch (error) {
        console.log("error", error);
      }
    },
    async getEditUser() {
      try {
        const response = await user.getEditUser();

        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }

        console.log("Edit User");
        console.log(response);
      } catch (error) {
        console.log("error", error);
      }
    },
    async getFollowers(id) {
      try {
        const response = await user.getFollowers(id);

        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }
        console.log("Get followers");
        console.log(response);
      } catch (error) {
        console.log("error", error);
      }
    },
    async getFollowings(id) {
      try {
        const response = await user.getFollowings(id);

        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }
        console.log("Get followings");
        console.log(response);
      } catch (error) {
        console.log("error", error);
      }
    },
    async getTweetsReply(id) {
      try {
        const response = await tweets.getReply(id);

        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }
        console.log("Get tweets reply");
        console.log(response);
        this.tweetsReplies = [...response.data];
      } catch (error) {
        console.log("error", error);
      }
    },
    async getReplied(id) {
      try {
        const response = await user.getReplied(id);

        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }
        console.log("Get replied tweets");
        console.log(response);
        this.tweetsReply = [...response.data];
      } catch (error) {
        console.log("error", error);
      }
    },
    async getPopular(id) {            
      try {
        const response = await user.getPopular(id);
        
        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }
        console.log("Get popular tweets");
        console.log(response);
        this.popular = [...response.data]
      } catch (error) {
        console.log("error", error);
      }
    },
    async adminTweets() {
      try {
        const response = await admin.getAllTweets();
        
        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }
        console.log("Get All tweets");
        console.log(response);
        // this.popular = [...response.data]
      } catch (error) {
        console.log("error", error);
      }
    }
  },
  created() {
    this.getTweets();
    // this.getPopular(JSON.parse(localStorage.getItem('user')).id)
    // this.getPopular(275) 
    // this.getFollowers(295);
    // this.getFollowings(295);
    // this.getReplied(265);
    // this.fetchUser(25);
    // this.getEditUser()
    // this.getTweetsReply(1705)
    // this.adminTweets()
  },
};
</script>
