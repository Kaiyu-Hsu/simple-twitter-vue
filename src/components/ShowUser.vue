<template>
  <div class="show-user">
    <header>
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
      <div class="name-tweets">
        <div class="name">{{ user.name }}</div>
        <div class="tweets">{{ tweetsNum }}推文</div>
      </div>
    </header>
    <div class="user-info">
      <!-- background cover -->
      <div class="background-cover">
        <img class="cover" :src="user.cover" />
      </div>
      <div class="avatar-btn">
        <!-- avatar -->
        <img class="avatar" :src="user.avatar" />
        <!-- btn follow -->
        <div class="btn-follow" @click.stop.prevent="editProfile">
          編輯個人資料
        </div>
      </div>
      <!-- name & account -->
      <div class="name-account">
        <div class="name">{{ user.name }}</div>
        <div class="account">@{{ user.account }}</div>
      </div>
      <!-- info -->
      <div class="info">
        {{ user.introduction }}
      </div>
      <!-- 跟隨中 & 跟隨者 -->
      <div class="followings-followers">
        <div class="followings">
          <div class="num">{{ followings }}個</div>
          跟隨中
        </div>
        <div class="followers">
          <div class="num">{{ followers }}位</div>
          跟隨者
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.show-user {
  background-color: white;
}

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

.user-info {
  position: relative;
  font-family: "Noto Sans TC", sans-serif;
  font-style: normal;
  .background-cover {
    .cover {
      width: 100%;
      height: 200px;
      z-index: -1;
    }
  }

  .avatar-btn {
    display: flex;
    justify-content: space-between;
    max-height: 78px;
    .avatar {
      border: 4px solid #ffffff;
      position: relative;
      bottom: 64px;
      left: 15px;
      width: 140px;
      height: 140px;
      border-radius: 50%;
    }

    .btn-follow {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 120px;
      height: 35px;
      font-weight: bold;
      border: 1px solid #ff6600;
      border-radius: 100px;
      color: #ff6600;
      margin: 8px 15px;
      cursor: pointer;
    }
  }

  .name-account {
    position: absolute;
    margin: 5px 15px;
    .name {
      font-weight: 900;
      font-size: 19px;
      color: #1c1c1c;
    }
    .account {
      font-weight: 500;
      font-size: 15px;
      color: #657786;
    }
  }

  .info {
    position: relative;
    top: 51px;
    font-weight: normal;
    font-size: 14px;
    margin: 10px 15px;
  }

  .followings-followers {
    position: relative;
    top: 50px;
    font-weight: 500;
    font-size: 14px;
    display: flex;
    margin: 0px 15px;
    color: #657786;
    .followings,
    .followers {
      display: flex;
      margin-right: 20px;
    }
    .num {
      color: #000000;
    }
  }
}
</style>

<script>
import data from "./../../public/api-users-id-v2.json";
import followers from "./../../public/api-users-id-followers-v2.json";
import followings from "./../../public/api-users-id-followings-v2.json";

const currentUser = data.userData;
const followersNum = followers.followers.Followers.length; // 剝洋蔥逆
const followingsNum = followings.followings.Followings.length;

export default {
  data() {
    return {
      user: {},
      tweetsNum: "",
      followers: "",
      followings: "",
    };
  },
  methods: {
    fetchData() {
      this.user = currentUser;
      this.tweetsNum = data.userTweets.length;
      this.followers = followersNum;
      this.followings = followingsNum;
    },
    editProfile() {
      this.$emit("open-edit-modal");
    },
  },
  created() {
    this.fetchData();
  },
};
</script>
