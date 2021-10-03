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
      @change-like="getTweets"
      @new-reply="getTweets"
    />
    <!-- Popular.vue -->
    <Popular class="popular" />
  </div>
</template>

<style lang="scss" scoped>
.popular {
  position: absolute;
  top: 0px;
  left: 75%;
}
</style>

<script>
import Popular from "./../components/Popular";
import Navbar from "./../components/Navbar";
import CreatePosts from "./../components/CreatePosts";
import NewestPosts from "./../components/NewestPosts";
import { keepUnauthorizedOut } from "./../utils/helpers";
import { tweets } from "./../api/tweets";
import user from "./../api/user";

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
  },
  created() {
    keepUnauthorizedOut(this);
    this.getTweets();
    this.fetchUser();
  },
};
</script>
