<template>
  <div class="a-tweet-container">
    <!-- TODO 點擊任一回覆後，跳轉到特定推文頁面 -->
    <div class="a-tweet" v-for="replied in replieds" :key="replied.TweetId">
      <img
        :src="initialUser.avatar"
        @click.stop.prevent="othersProfile(replied.tweet.user.id)"
        class="avatar"
      />
      <div class="content">
        <div class="name-account">
          <div class="name">{{ initialUser.name }}</div>
          <div class="account">
            @{{ initialUser.account }}・{{ replied.createdAt | fromNow }}
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
import { fromNowFilter } from "./../utils/mixins"; // 時間簡化套件
import { Toast } from "./../utils/helpers";
import userAPI from "./../api/userProfile";

export default {
  name: "OtherUserReplied",
  props: {
    initialUser: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      replieds: [],
    };
  },
  mixins: [fromNowFilter],
  methods: {
    async fetchApiReplieds() {
      try {
        const userid = Number(this.$route.params.id);
        const response = await userAPI.getReplieds(userid);

        console.log("user's replieds");
        console.log(response);

        // 取得 API 請求後的資料
        const { data } = response;

        if (response.statusText !== "OK") {
          throw new Error(data.message);
        }

        this.replieds = data;
        // this.replieds = this.replieds.map((replied) => {
        //   if (replied.tweet.user === null || replied.followingId === null) {
        //     return {
        //       ...replied,
        //       this.tweet.user: {},
        //     };
        //   }
        //   return replied;
        // });
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "warning",
          title: "無法載入資料",
        });
      }
    },
    othersProfile(id) {
      console.log("id", id);
      this.$router.push({ name: "other-profile", params: { id } });
    },
  },
  created() {
    this.fetchApiReplieds();
  },
};
</script>
