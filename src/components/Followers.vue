<template>
  <div class="container">
    <h1>跟隨誰</h1>
    <!-- TODO 資料渲染有問題 -->
    <!-- <div v-for="user in users" :key="user.followingId" class="popular-users"> -->
    <div class="popular-users">
      <!-- <img :src="user.following.avatar" alt="avatar" /> -->
      <img src="" alt="avatar" />
      <div class="name-account">
        <!-- {{ user.following.name }} -->
        <div class="name">??</div>
        <!--  {{ user.following.account }} -->
        <div class="account">@</div>
      </div>
      <!-- <div
        v-if="user.isFollowed"
        @click.stop.prevent="toggleFollowing(user.followingId)"
        class="following-btn"
      > -->
      <div class="following-btn">正在跟隨</div>
      <!-- <div
        v-else
        @click.stop.prevent="toggleFollowing(user.followingId)"
        class="unfollowing-btn"
      > -->
      <div class="unfollowing-btn">跟隨</div>
      <footer>顯示更多</footer>
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
import followers from "./../../public/api-tweets-id-top10-new.json";
export default {
  data() {
    return {
      users: [],
    };
  },
  methods: {
    fetchJSON() {
      this.users = followers.topTwitters.map((user) => {
        return {
          ...user,
          isFollowed: true,
        };
      });
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
    console.log("created");
    this.fetchJSON();
  },
};
</script>
