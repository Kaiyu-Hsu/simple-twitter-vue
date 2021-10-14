<template>
  <div class="followers">
    <h1>跟隨誰</h1>
    <div v-for="user in users" :key="user.followingId" class="popular-users">
      <img :src="user.following.avatar" alt="avatar" />
      <div class="name-account">
        <div class="name">{{ user.following.name }}</div>
        <div class="account">@ {{ user.following.account }}</div>
      </div>
      <div
        v-if="user.isFollowed"
        @click.stop.prevent="toggleFollowing(user.followingId)"
        class="following-btn"
      >
        正在跟隨
      </div>
      <div
        v-else
        @click.stop.prevent="toggleFollowing(user.followingId)"
        class="unfollowing-btn"
      >
        跟隨
      </div>
    </div>
    <footer @click="showMore">
      <span>顯示更多</span>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.followers {
  position: absolute;
  top: 15px;
  left: 630px;
  background: #f5f8fa;
  width: 350px;
  border-radius: 14px;
  font-family: "Noto Sans TC", sans-serif;
  font-size: 15px;
  font-weight: 700;

  h1 {
    font-size: 18px;
    padding-left: 15px;
  }

  .popular-users {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    border-top: 1px solid #e6ecf0;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin: 10px;
      background: #c4c4c4;
    }

    .name-account {
      margin-right: 80px;
      .account {
        color: #657786;
      }
    }

    .following-btn,
    .unfollowing-btn,
    span {
      cursor: pointer;
    }

    .following-btn,
    .unfollowing-btn {
      border: 1px solid #ff6600;
      box-sizing: border-box;
      border-radius: 100px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    .following-btn {
      width: 90px;
      height: 35px;
      background: #ff6600;
      color: #ffffff;
    }

    .unfollowing-btn {
      width: 60px;
      height: 35px;
      color: #ff6600;
    }
  }

  footer {
    font-style: normal;
    font-weight: normal;
    color: #ff6600;
    padding: 12px 0px 12px 15px;
    border-top: 1px solid #e6ecf0;
  }
}
</style>

<script>
import userAPI from "../api/userProfile";

const getUserId = () => localStorage.getItem("user");

export default {
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async fetchFollowers() {
      try {
        const response = await userAPI.getFollowers(getUserId());

        if (response.statusText !== "OK") {
          throw new Error(response);
        }
        this.users = [...response.data];
      } catch (error) {
        console.log("error", error.response || error);
      }
    },
    toggleFollowing(userId) {
      this.users = this.users.map((user) => {
        if (user.followingId === userId) {
          return {
            ...user,
            isFollowed: !user.isFollowed,
          };
        }

        return user;
      });
    },
    showMore() {
      // TODO 顯示更多追隨者
      console.log("showMore");
    },
  },
  created() {
    this.fetchFollowers();
  },
};
</script>
