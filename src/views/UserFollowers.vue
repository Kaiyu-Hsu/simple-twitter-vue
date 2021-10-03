<template>
  <div class="user" v-show="!isLoading">
    <Navbar :initial-user="user" />
    <div class="user-self">
      <header>
        <router-link to="/profile">
          <div class="icon-back">
            <svg
              width="17"
              height="14"
              viewBox="0 0 17 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 5.99988H3.41399L7.70699 1.70687C8.09699 1.31687 8.09699 0.683875 7.70699 0.292875C7.31699 -0.0981249 6.68399 -0.0971249 6.29299 0.292875L0.292988 6.29288C-0.0970117 6.68288 -0.0970117 7.31588 0.292988 7.70687L6.29299 13.7069C6.48799 13.9019 6.74299 13.9999 6.99999 13.9999C7.25699 13.9999 7.51199 13.9019 7.70699 13.7069C8.09699 13.3169 8.09699 12.6839 7.70699 12.2929L3.41399 7.99988H16C16.553 7.99988 17 7.55288 17 6.99988C17 6.44688 16.553 5.99988 16 5.99988Z"
                fill="black"
              />
            </svg>
          </div>
        </router-link>
        <div class="name-tweets">
          <div class="name">{{ user.name }}</div>
          <div class="tweets">{{ tweetsNum }}推文</div>
        </div>
      </header>
      <!-- UserSelfTabs -->
      <div class="user-self-tabs">
        <div
          class="followers"
          :class="{ active: $route.name === 'user-followers' }"
        >
          跟隨者
        </div>
        <!-- :class="{ active: $route.name === 'user-followings' }" -->
        <div class="followings" @click.stop.prevent="toFollowings">
          正在跟隨
        </div>
      </div>
      <div class="followers-card">
        <div
          class="a-card"
          v-for="follower in followers"
          :key="follower.followerId"
        >
          <img class="avatar" :src="follower.follower.avatar" />
          <div class="left">
            <div class="top">
              <div class="name-account">
                <div class="name">{{ follower.follower.name }}</div>
                <div class="account">@{{ follower.follower.account }}</div>
              </div>
              <div class="btn">
                <div
                  v-if="followings.includes(follower.followerId)"
                  class="following-btn"
                  @click="unfollowing(follower.followerId)"
                >
                  正在跟隨
                </div>
                <div
                  v-else
                  class="unfollowing-btn"
                  @click="following(follower.followerId)"
                >
                  跟隨
                </div>
              </div>
            </div>
            <div class="content">
              <!-- {{
                follower.follower.introduction === 0
                  ? "目前還沒有自我介紹"
                  : follower.follower.introduction
              }} -->
              目前還沒有自我介紹
            </div>
          </div>
        </div>
      </div>
    </div>
    <Popular />
  </div>
</template>

<style lang="scss" scoped>
.user-self {
  border-left: 1px solid #e5e5e5;
  border-right: 1px solid #e5e5e5;
  position: absolute;
  left: 27%;
  bottom: 0px;
  width: 42%;
  height: 100%;
  header {
    height: 55px;
    display: flex;
    font-family: "Noto Sans TC", sans-serif;
    font-style: normal;
    .icon-back {
      margin: 20px;
    }
    .name-tweets {
      margin: 6px 20px;
      .name {
        font-size: 19px;
        font-weight: 900;
        color: #1c1c1c;
      }
      .tweets {
        font-weight: 500;
        font-size: 13px;
        color: #657786;
      }
    }
  }

  .user-self-tabs {
    border-bottom: 1px solid #e6ecf0;
    position: relative;
    display: flex;
    font-family: "Noto Sans TC", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    color: #657786;
    .followers,
    .followings {
      width: 130px;
      height: 54px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    .active {
      border-bottom: 2px solid #ff6600;
      color: #ff6600;
    }
  }

  .followers-card {
    font-family: "Noto Sans TC", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    color: #1c1c1c;
    min-height: 136px;
    .a-card {
      display: flex;
      border-bottom: 1px solid #e6ecf0;
      padding: 10px 15px;
      .avatar {
        width: 50px;
        height: 50px;
        background: #c4c4c4;
        border-radius: 50%;
        margin: 3px 0px 83px 0px;
      }

      .left {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        width: 100%;
        align-content: space-around;
        .top {
          display: flex;
          width: 100%;
          justify-content: space-between;
          align-items: center;
          .name-account {
            display: flex;
            flex-direction: column;
            .account {
              font-weight: 500;
              color: #657786;
            }
          }
          .btn {
            cursor: pointer;
            .following-btn {
              padding: 0px 15px;
              background: #ff6600;
              border: 1px solid #ff6600;
              box-sizing: border-box;
              border-radius: 100px;
              color: #ffffff;

              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
            }
            .unfollowing-btn {
              padding: 0px 15px;
              border: 1px solid #ff6600;
              box-sizing: border-box;
              border-radius: 100px;
              color: #ff6600;

              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
            }
          }
        }
        .content {
          margin-top: 5px;
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
}
</style>

<script>
import Popular from "../components/Popular.vue";
import Navbar from "../components/Navbar.vue";
import { Toast } from "../utils/helpers";
import userAPI from "../api/userProfile";
import followerships from "./../api/followerships";
import { keepUnauthorizedOut } from "./../utils/helpers";

const getUserId = () => localStorage.getItem("user");

export default {
  name: "UserFollowers",
  components: {
    Popular,
    Navbar,
  },
  data() {
    return {
      user: {},
      tweetsNum: "",
      followers: [],
      followings: [],
      isLoading: true,
    };
  },
  methods: {
    // user file
    async fetchUser() {
      try {
        // TODO 增加判斷 ID是自己還是其他人
        // if (this.$route.params.id) {
        //   const userid = Number(this.$route.params.id);
        //   const response = await userAPI.getOtherUser(userid);
        //   const { data } = response;

        //   if (response.statusText !== "OK") {
        //     throw new Error(data.message);
        //   }

        //   this.user = data;
        // } else {
        //   const response = await userAPI.getUser(getUserId());
        //   const { data } = response;

        //   if (response.statusText !== "OK") {
        //     throw new Error(data.message);
        //   }

        //   this.user = data;
        // }

        const response = await userAPI.getUser(getUserId());

        // 取得 API 請求後的資料
        const { data } = response;

        if (response.statusText !== "OK") {
          throw new Error(data.message);
        }

        this.user = data;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        console.log("error", error);
        Toast.fire({
          icon: "warning",
          title: "無法載入資料",
        });
      }
    },
    // tweets num
    async fetchApiTweets() {
      try {
        const response = await userAPI.getTweets(getUserId());

        // 取得 API 請求後的資料
        const { data } = response;

        if (response.statusText !== "OK") {
          throw new Error(data.message);
        }

        this.tweetsNum = data.length;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        console.log("error", error);
        Toast.fire({
          icon: "warning",
          title: "無法載入資料",
        });
      }
    },
    // followers
    async fetchFollowers() {
      try {
        const response = await userAPI.getFollowers(getUserId());
        const { data } = response;

        if (response.statusText !== "OK") {
          throw new Error(data.message);
        }

        this.followers = data;
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "warning",
          title: "無法載入資料",
        });
      }
    },
    // followings list
    async fetchFollowings() {
      try {
        const response = await userAPI.getFollowings(getUserId());
        const { data } = response;

        if (response.statusText !== "OK") {
          throw new Error(data.message);
        }

        this.followings = data;
        // 只把 followingId 取出成 Array
        this.followings = this.followings.map((following) => {
          return following.followingId;
        });
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "warning",
          title: "無法載入資料",
        });
      }
    },
    // btn
    async following(followerId) {
      try {
        const response = await followerships.following(followerId);
        const { data } = response;

        if (response.statusText !== "OK") {
          throw new Error(data.message);
        }

        this.fetchFollowers();
        this.fetchFollowings();
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "warning",
          title: "無法追蹤",
        });
      }
    },
    async unfollowing(followerId) {
      try {
        const response = await followerships.unfollowing(followerId);
        const { data } = response;

        if (response.statusText !== "OK") {
          throw new Error(data.message);
        }

        this.fetchFollowers();
        this.fetchFollowings();
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "warning",
          title: "無法取消追蹤",
        });
      }
    },
    // change route
    toFollowings() {
      this.$router.push({ name: "user-followings" });
    },
  },
  created() {
    keepUnauthorizedOut(this);
    this.fetchUser();
    this.fetchApiTweets();
    this.fetchFollowers();
    this.fetchFollowings();
  },
};
</script>
