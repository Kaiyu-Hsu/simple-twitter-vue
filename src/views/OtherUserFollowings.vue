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
        <div class="followers" @click.stop.prevent="toFollowers">跟隨者</div>
        <div
          class="followings"
          :class="{ active: $route.name === 'user-followings' }"
        >
          正在跟隨
        </div>
      </div>
      <div class="followers-card">
        <div
          class="a-card"
          v-for="following in followings"
          :key="following.followerId"
        >
          <img class="avatar" :src="following.following.avatar" />
          <div class="left">
            <div class="top">
              <div class="name-account">
                <div class="name">{{ following.following.name }}</div>
                <div class="account">@{{ following.following.account }}</div>
              </div>
              <div class="btn">
                <div
                  class="following-btn"
                  @click.stop.prevent="unfollowing(following.followingId)"
                >
                  正在跟隨
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

export default {
  name: "OtherUserFollowers",
  components: {
    Popular,
    Navbar,
  },
};
</script>
