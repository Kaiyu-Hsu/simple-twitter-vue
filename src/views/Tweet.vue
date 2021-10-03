<template>
  <div class="reply">
    <Navbar />
    <OneTweet
      :tweet-data="tweetData"
      :user-data="userData"
      @close-modal="fetchTweet"
    />
    <ReplyList :tweet-data="tweetData" />
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
import OneTweet from "../components/OneTweet.vue";
import ReplyList from "../components/ReplyList.vue";
import Navbar from "../components/Navbar.vue";
import Popular from "../components/Popular.vue";
import { tweet } from "./../api/tweet";
import { keepUnauthorizedOut } from "../utils/helpers";

export default {
  components: {
    OneTweet,
    ReplyList,
    Navbar,
    Popular,
  },
  data() {
    return {
      userData: {},
      tweetData: {},
    };
  },
  methods: {
    async fetchTweet() {
      const id = this.$route.params.id;
      try {
        const response = await tweet.getTweet(id);

        if (response.statusText !== "OK") {
          throw new Error(response.data.message);
        }

        this.tweetData = { ...response.data };
      } catch (error) {
        console.log("error", error);
      }
    },
    async fetchCurrentUser() {
      try {
        const response = await tweet.getCurrentUser();

        if (response.statusText !== "OK") {
          throw new Error(response.data.message);
        }

        this.userData = { ...response.data };
      } catch (error) {
        console.log("error", error);
      }
    },
  },
  created() {
    keepUnauthorizedOut(this);
    this.fetchTweet();
    this.fetchCurrentUser();
  },
};
</script>
