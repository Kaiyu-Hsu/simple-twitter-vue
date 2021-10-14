<template>
  <div class="reply">
    <Navbar />
    <div class="mid-area">
      <OneTweet
        :tweet-data="tweetData"
        :user-data="userData"
        @close-modal="fetchTweet"
        @change-like="fetchTweet"
      />
      <ReplyList :tweet-data="tweetData" />
    </div>
    <Popular />
  </div>
</template>

<style lang="scss" scoped>
.mid-area {
  width: 600px;
  margin: 0 0 0 calc(113px + 235px + 30px);
}
</style>

<script>
import OneTweet from "../components/OneTweet.vue";
import ReplyList from "../components/ReplyList.vue";
import Navbar from "../components/Navbar.vue";
import Popular from "../components/Popular.vue";
import { tweet } from "./../api/tweet";
import { keepUnauthorizedOut, roleAccessControl } from "../utils/helpers";

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
    roleAccessControl(this, "8347");
    this.fetchTweet();
    this.fetchCurrentUser();
  },
};
</script>
