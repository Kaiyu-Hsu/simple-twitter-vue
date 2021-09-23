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
import { fetchData } from "./../api/tweets";
import user from "./../api/user";

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
      apiTweets: [],
      apiTweetsReply: [],
      apiPopular: [],
    };
  },
  methods: {
    async fetchAPIData() {
      try {
        const response = await fetchData.getTweets();

        console.log("我拿到資料囉嘿嘿 ");
        console.dir(response);
        console.log(`---`);
        this.tweets = [...response.data];
        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }
      } catch (error) {
        console.log("error", error);
      }
    },
    async fetchSelf() {
      // const userId = JSON.parse(localStorage.getItem('user')).id

      try {
        const response = await user.getUserInfo(1);

        console.log("Fetch Self");
        console.dir(response);
      } catch (error) {
        console.log("error", error);
      }
    },
    async fetchOther() {
      try {
        const response = await user.getOther();
        console.log("Fetch Other");
        console.dir(response);
      } catch (error) {
        console.log("error", error);
      }
    },
    async editUser() {
      try {
        const response = await user.getEditUser();
        console.log("Edit User");
        console.log(response);
      } catch (error) {
        console.log("error", error);
      }
    },
    async getFollowers() {
      try {
        const response = await user.getFollowers(1);
        console.log("Get followers");
        console.log(response);
      } catch (error) {
        console.log("error", error);
      }
    },
    async getReplied() {
      try {
        const response = await user.getReplied(2);
        console.log("Get replied tweets");
        console.log(response);
      } catch (error) {
        console.log("error", error);
      }
    },
  },
  created() {
    // this.fetchData();
    this.fetchAPIData()
    // this.getFollowers()
    // this.getReplied()
    this.fetchSelf()
    // this.fetchOther()
    // this.editUser()
  },
};
</script>
