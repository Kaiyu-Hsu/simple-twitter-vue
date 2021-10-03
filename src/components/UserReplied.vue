<template>
  <div class="a-tweet-container">
    <div class="a-tweet" v-for="replied in replieds" :key="replied.TweetId">
      <img
        :src="user.avatar"
        @click.stop.prevent="othersProfile(replied.UserId)"
        class="avatar"
      />
      <div class="content">
        <div class="name-account">
          <div class="name" @click.stop.prevent="othersProfile(replied.UserId)">
            {{ user.name }}
          </div>
          <div class="account">
            @{{ user.account }}・{{ replied.createdAt | fromNow }}
          </div>
        </div>
        <div class="replied-account">
          回覆
          <div class="at-account">@{{ replied.tweet.user.account }}</div>
        </div>
        <div class="description" @click="toOneTweet(replied)">
          {{ replied.comment }}
        </div>
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
import { fromNowFilter } from "./../utils/mixins"; // 時間簡化套件
import { Toast } from "./../utils/helpers";
import userAPI from "./../api/userProfile";

const getUserId = () => localStorage.getItem("user");

export default {
  name: "UserReplied",
  data() {
    return {
      user: {},
      replieds: [],
    };
  },
  mixins: [fromNowFilter],
  methods: {
    // API
    async fetchApiData() {
      try {
        const response = await userAPI.getUser(getUserId());

        // 取得 API 請求後的資料
        const { data } = response;

        if (response.statusText !== "OK") {
          throw new Error(data.message);
        }

        this.user = data;
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "warning",
          title: "無法載入資料",
        });
      }
    },
    async fetchApiReplieds() {
      try {
        const response = await userAPI.getReplieds(getUserId());

        // 取得 API 請求後的資料
        const { data } = response;

        if (response.statusText !== "OK") {
          throw new Error(data.message);
        }

        this.replieds = data;
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "warning",
          title: "無法載入資料",
        });
      }
    },
    toOneTweet(replied) {
      this.$router.push({ name: "tweet", params: { id: replied.TweetId } });
    },
    othersProfile(id) {
      if (id === Number(getUserId())) {
        this.$router.push({ name: "profile" });
      } else {
        this.$router.push({ name: "other-profile", params: { id } });
      }
    },
  },
  created() {
    this.fetchApiData();
    this.fetchApiReplieds();
  },
};
</script>
