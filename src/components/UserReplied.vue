<template>
  <div class="a-tweet-container">
    <!-- TODO 點擊任一回覆後，跳轉到特定推文頁面 -->
    <div class="a-tweet" v-for="replied in replies" :key="replied.TweetId">
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
  min-height: 136px;
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

    .replies-likes {
      display: flex;
      font-weight: 500;
      font-size: 13px;
      color: #657786;
      .replies,
      .likes {
        display: flex;
        margin-right: 52px;
        .replies-icon,
        .likes-icon {
          margin-right: 12px;
        }
      }
    }
  }
}
</style>

<script>
// import data from "./../../public/api-users-id-replied-tweets-v2.json";
// TODO api-users-id-replied-tweets-v2.json 沒有包含userData 由另一個資料載入
// 運用 props 從 User.vue 傳進 initialUser
import { fromNowFilter } from "./../utils/mixins"; // 時間簡化套件

export default {
  props: {
    initialUser: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      user: {},
      replies: [],
    };
  },
  mixins: [fromNowFilter],
  methods: {
    fetchData() {
      this.user = { ...this.initialUser };
      // this.replies = [...data.repliedTweets];
    },
  },
  created() {
    this.fetchData();
    console.log(this.user);
    console.log(this.replies);
  },
};
</script>
