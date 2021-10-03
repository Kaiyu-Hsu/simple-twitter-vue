<template>
  <div class="main">
    <!-- Navbar.vue -->
    <Navbar @new-post="getTweets" />
    <!-- CreatePosts.vue -->
    <CreatePosts :initial-user="userData" @new-post="getTweets" />
    <!-- NewestPosts.vue -->
    <NewestPosts
      :initial-tweets="tweets"
      :initial-tweets-reply="tweetsReply"
      :initial-user="userData"
    />
    <div class="popular">
      <!-- Popular.vue -->
      <Popular />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  width: 1440px;
  height: 1200px;
  .popular {
    position: absolute;
    top: 0px;
    left: 65%;
  }
}
</style>

<script>
import Popular from "./../components/Popular";
import Navbar from "./../components/Navbar";
import CreatePosts from "./../components/CreatePosts";
import NewestPosts from "./../components/NewestPosts";
// functions
import { keepUnauthorizedOut } from "./../utils/helpers";
import { tweets } from "./../api/tweets";
import user from "./../api/user";
import admin from "./../api/admin";

const getUserId = () => localStorage.getItem("user");

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
      tweetsReplies: [],
    };
  },
  methods: {
    async getTweets() {
      try {
        const response = await tweets.getTweets();

        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }

        this.tweets = [...response.data];
      } catch (error) {
        console.log("error", error);
      }
    },
    async fetchUser() {
      try {
        const response = await user.getUserInfo(getUserId());

        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }

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
      } catch (error) {
        console.log("error", error);
      }
    },
    async getFollowers() {
      try {
        const response = await user.getFollowers(getUserId());

        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }
      } catch (error) {
        console.log("error", error);
      }
    },
    async getFollowings() {
      try {
        const response = await user.getFollowings(getUserId());

        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }
      } catch (error) {
        console.log("error", error);
      }
    },
    async getTweetsReply() {
      try {
        const response = await tweets.getReply(getUserId());

        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }

        this.tweetsReplies = [...response.data];
      } catch (error) {
        console.log("error", error);
      }
    },
    async getReplied() {
      try {
        const response = await user.getReplied(getUserId());

        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }

        this.tweetsReply = [...response.data];
      } catch (error) {
        console.log("error", error);
      }
    },
    async getPopular() {
      try {
        const response = await user.getPopular(getUserId());

        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }

        this.popular = [...response.data];
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

        this.tweets = [...response.data];
      } catch (error) {
        console.log("error", error);
      }
    },
  },
  created() {
    keepUnauthorizedOut(this);
    this.getTweets();
    this.fetchUser();
    // this.getPopular(275)
    // this.getFollowers(295);
    // this.getFollowings(295);
    // this.getReplied(265);
    // this.getEditUser()
    // this.getTweetsReply(1705)
    // this.adminTweets()
  },
};
</script>
