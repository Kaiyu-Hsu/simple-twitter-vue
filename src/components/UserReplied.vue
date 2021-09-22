<template>
  <div class="a-tweet-container">
    <div class="a-tweet" v-for="replied in replieds" :key="replied.TweetId">
      <img :src="user.avatar" class="avatar" />
      <div class="content">
        <div class="name-account">
          <div class="name">{{ user.name }}</div>
          <div class="account">
            @{{ user.account }}・{{ replied.createdAt | fromNow }}
          </div>
        </div>
        <div class="replied-account">
          回覆
          <div class="at-account">@{{ replied.tweet.user.account }}</div>
        </div>
        <div class="description">{{ replied.comment }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.a-tweet-container {
  border-right: 1px solid #e6ecf0;
  border-left: 1px solid #e6ecf0;
}
.a-tweet {
  border-bottom: 1px solid #e6ecf0;
  font-family: "Noto Sans TC", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  color: #1c1c1c;
  position: relative;
  top: 50px;
  max-width: 600px;
  min-height: 121px;
  margin-top: 10px;
  padding: 0px 15px;
  display: flex;
  .avatar {
    width: 50px;
    height: 50px;
    background: #c4c4c4;
    border-radius: 50%;
    margin: 3px 0px 83px 0px;
  }

  .content {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    .name-account {
      display: flex;
      .name {
        margin: auto 5px auto 0px;
      }
      .account {
        font-weight: 500;
        color: #657786;
      }
    }
    .replied-account {
      display: flex;
      font-weight: 500;
      color: #657786;
      .at-account {
        color: #ff6600;
        margin-left: 5px;
      }
    }

    .description {
      min-height: 66px;
      font-weight: 500;
      margin: 3px 0px 15px 0px;
    }
  }
}
</style>

<script>
import data from "./../../public/api-users-id-replied-tweets-v2.json";
import userData from "./../../public/api-users-id-tweets-v2.json";
import { fromNowFilter } from "./../utils/mixins"; // 時間簡化套件

export default {
  data() {
    return {
      user: {},
      replieds: [],
    };
  },
  mixins: [fromNowFilter],
  methods: {
    fetchData() {
      this.user = userData.userData;
      this.replieds = data.repliedTweets;
    },
  },
  created() {
    this.fetchData();
    console.log(this.user);
    console.log(this.replieds);
  },
};
</script>
