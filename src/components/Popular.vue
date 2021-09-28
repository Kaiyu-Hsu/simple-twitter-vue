<template>
  <div class="container">
    <h1>Popular</h1>
    <div v-for="user in users" :key="user.followingId" class="popular-users">
      <img :src="user.following.avatar" alt="" />
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
  </div>
</template>

<style scoped>
.container {
  position: fixed;
  top: 15px;
  left: 75%;
  background: #f5f8fa;
  width: 350px;
  border-radius: 14px;
  font-family: "Noto Sans TC", sans-serif;
}

h1 {
  font-size: 18px;
  padding-left: 15px;
}

.popular-users {
  display: flex;
  font-size: 15px;
  font-weight: 700;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  border-top: 2px solid #e6ecf0;
}

img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 10px;
}

.name-account {
  margin-right: 80px;
}

.account {
  color: #657786;
}

.following-btn,
.unfollowing-btn {
  cursor: pointer;
}

.following-btn {
  width: 90px;
  height: 35px;
  background: #ff6600;
  border: 1px solid #ff6600;
  box-sizing: border-box;
  border-radius: 100px;
  font-family: Noto Sans TC;
  font-size: 15px;
  color: #ffffff;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.unfollowing-btn {
  width: 60px;
  height: 35px;
  border: 1px solid #ff6600;
  box-sizing: border-box;
  border-radius: 100px;
  font-family: Noto Sans TC;
  font-size: 15px;
  color: #ff6600;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>

<script>
import { apiHelper } from "./../utils/helpers";
import { Toast } from "./../utils/helpers";

const getToken = () => localStorage.getItem("token");
const getUserId = () => localStorage.getItem("user");

export default {
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async fetchPopular() {
      try {
        const response = await apiHelper.get(
          `api/tweets/${getUserId()}/top10`,
          {
            headers: { Authorization: `Bearer ${getToken()}` },
          }
        );

        const { data } = response;

        if (response.statusText !== "OK") {
          throw new Error(data.message);
        }
        console.log('response data', data)
        this.users = data.topTwitters;
        // TODO 後端提供的資料缺少判斷 user 是否正在追蹤 top10 帳號
        this.users = this.users.map((user) => {
          return { ...user, isFollowed: true };
        });
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "warning",
          title: "無法載入資料",
        });
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
  },
  created() {
    this.fetchPopular();
  },
};
</script>
