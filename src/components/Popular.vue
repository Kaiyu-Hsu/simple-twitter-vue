<template>
  <div class="container">
    <h1>Popular</h1>
    <div v-for="user in users" :key="user.followingId" class="popular-users">
      <img
        :src="user.following.avatar"
        @click.stop.prevent="othersProfile(user.followingId)"
        alt=""
      />
      <div class="name-account">
        <div class="name" @click.stop.prevent="othersProfile(user.followingId)">
          {{ user.following.name }}
        </div>
        <div class="account">@ {{ user.following.account }}</div>
      </div>
      <div
        v-if="userFollowings.includes(user.followingId)"
        @click.stop.prevent="unfollowing(user.followingId)"
        class="following-btn"
      >
        正在跟隨
      </div>
      <div
        v-else
        @click.stop.prevent="following(user.followingId)"
        class="unfollowing-btn"
      >
        跟隨
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
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
import userAPI from "./../api/user";
import followerships from "./../api/followerships";
import { Toast } from "./../utils/helpers";

const getUserId = () => localStorage.getItem("user");

export default {
  data() {
    return {
      userDataId: "",
      users: [],
      userFollowings: [],
    };
  },
  methods: {
    // 取使用者資料，用來比對
    async fetchUserData() {
      try {
        const response = await userAPI.getUserInfo(getUserId());
        const { data } = response;

        if (response.statusText !== "OK") {
          throw new Error(data.message);
        }

        this.userDataId = data.id;
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "warning",
          title: "無法載入使用者資料",
        });
      }
    },
    async fetchPopular() {
      try {
        const response = await userAPI.getPopular(getUserId());
        const { data } = response;

        if (response.statusText !== "OK") {
          throw new Error(data.message);
        }

        this.users = data.topTwitters;
        // user 不會在 popular list 看見自己的帳號
        this.users = this.users.filter(
          (user) => user.followingId !== Number(getUserId())
        );
        this.userFollowings = data.userFollowingList;
        this.userFollowings = this.userFollowings.map((following) => {
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
    async following(followerId) {
      try {
        const response = await followerships.following(followerId);
        const { data } = response;

        if (response.statusText !== "OK") {
          throw new Error(data.message);
        }

        this.$bus.$emit("change-follow-state"); // event bus
        this.fetchPopular();
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "warning",
          title: "無法追隨",
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
        this.$bus.$emit("change-follow-state"); // event bus
        this.fetchPopular();
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "warning",
          title: "無法取消追隨",
        });
      }
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
    this.fetchUserData();
    this.fetchPopular();
  },
};
</script>
