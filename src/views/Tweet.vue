<template>
  <div class="reply">
    <Navbar />
    <OneTweet
      :tweet-data="tweetData"
      :user-data="userData"
      @close-modal="fetchTweet"
      @change-like="fetchTweet"
    />
    <ReplyList :tweet-data="tweetData" />
    <Popular />
  </div>
</template>

<style lang="scss" scoped>
.reply {
  width: 1440px;
  height: 1200px;
}
</style>

<script>
import OneTweet from "../components/OneTweet.vue";
import ReplyList from "../components/ReplyList.vue";
import Navbar from "../components/Navbar.vue";
import Popular from "../components/Popular.vue";
import { tweet } from "./../api/tweet";
import { keepUnauthorizedOut } from "../utils/helpers";

// TODO reponse like 陣列拿不到 userId 的暫時替代方案
import userAPI from "./../api/userProfile";
const getUserId = () => localStorage.getItem("user");
// TODO 替代方案結束行

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

        // TODO reponse like 陣列拿不到 userId 的暫時替代方案
        const getLikers = await userAPI.getTweets(getUserId());
        // TODO 替代方案結束行

        if (response.statusText !== "OK") {
          throw new Error(response.data.message);
        }

        this.tweetData = { ...response.data };
        // TODO reponse like 陣列拿不到 userId 的暫時替代方案
        const getOneTweet = getLikers.data.find(
          (obj) => obj.id === this.tweetData.id
        );
        this.tweetData.likes.push(
          getOneTweet.likes.find((obj) => obj.UserId === this.userData.id)
        );
        // TODO 替代方案結束行
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
