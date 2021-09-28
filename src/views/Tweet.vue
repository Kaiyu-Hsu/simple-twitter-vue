<template>
  <div class="reply">
    <Navbar :initial-user="userData" />
    <OneTweet :tweet-data="tweetData" :user-data="userData" />
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
// import tweetData from "./../../public/v3/api-tweets-id-v3.json";
// import userData from "./../../public/v3/api-users-id-userInfo-new.json"
import { tweet } from "./../api/tweet";

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
    // fetchData() {
    //   this.userData = {...userData}
    //   this.tweetData = { ...tweetData };
    // },
    async fetchTweet(id) {
      try {
        const response = await tweet.getTweet(id);

        if (response.statusText !== "OK") {
          throw new Error(response.data.message);
        }
        console.log("我拿到資料囉嘿嘿 ");
        console.dir(response);
        console.log(`---`);

        this.tweetData = { ...response.data };
      } catch (error) {
        console.log("error", error);
      }
    },
    async fetchCurrentUser(id) {
      try {
        const response = await tweet.getCurrentUser(id);

        if (response.data.message !== "ok") {
          throw new Error(response.data.message);
        }

        console.log("我拿到資料囉嘿嘿 ");
        console.dir(response);
        console.log(`---`);
        this.userData = { ...response.data };
      } catch (error) {
        console.log("error", error);
      }
    },
  },
  created() {
    this.fetchTweet();
    this.fetchCurrentUser();
  },
};
</script>
