<template>
  <div class="container">
    <h1>Popular</h1>
    <div class="popular-users">
      <img :src="user.image" alt="" />
      <div class="name-account">
        <div class="name">{{ user.name }}</div>
        <div class="account">{{ user.account }}</div>
      </div>
      <div v-if="user.isFollowing" @click="unfollowing" class="following-btn">
        正在跟隨
      </div>
      <div v-else @click="following" class="unfollowing-btn">跟隨</div>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: fixed;
  top: 15px;
  left: 65%;
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

.following-btn, .unfollowing-btn {
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
const dummyData = {
  popularUser: {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4XWlDQYUkdrV-k6m_ux-cAWXhP1vATWf6ZHkzOdci_HCbdFyZ8zsF2i_L7NVCMy21G4M&usqp=CAU",
    name: "Kaiyu",
    account: "@cindy7023",
    isFollowing: false,
  },
};
export default {
  data() {
    return {
      user: {
        image: "",
        name: "",
        account: "",
        isFollowing: true,
      },
    };
  },
  methods: {
    fetchUser() {
      this.user = dummyData.popularUser;
    },
    unfollowing() {
        this.user.isFollowing = false
    },
    following() {
        this.user.isFollowing = true
    },
  },
  created() {
    this.fetchUser();
  },
};
</script>