<template>
  <div class="users-list">
    <header>使用者列表</header>
    <div class="container">
      <div class="user-card" v-for="user in users" :key="user.index">
        <img class="cover" :src="user.cover" alt="" />
        <div class="name-avatar">
          <img class="avatar" :src="user.avatar" />
          <div class="name">{{ user.name }}</div>
          <div class="account">@{{ user.account }}</div>
        </div>
        <div class="row-action">
          <div class="replied-icon">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.8461 2.24193L10.6981 2.23193H10.6961C6.32212 2.23193 2.89612 5.65893 2.89612 10.0339C2.89612 14.1319 6.08212 17.2399 10.3611 17.4039V21.2319C10.3611 21.3399 10.4051 21.5179 10.4811 21.6349C10.6231 21.8599 10.8651 21.9819 11.1131 21.9819C11.2511 21.9819 11.3901 21.9439 11.5151 21.8639C11.7791 21.6959 17.9881 17.7239 19.6031 16.3579C21.5051 14.7479 22.6431 12.3879 22.6461 10.0459V10.0289C22.6401 5.66193 19.2161 2.24193 14.8461 2.24093V2.24193ZM18.6331 15.2139C17.4991 16.1739 13.7711 18.6189 11.8611 19.8569V16.6699C11.8611 16.2559 11.5261 15.9199 11.1111 15.9199H10.7151C7.05512 15.9199 4.39712 13.4439 4.39712 10.0339C4.39712 6.49993 7.16512 3.73193 10.6971 3.73193L14.8441 3.74193H14.8461C18.3781 3.74193 21.1461 6.50793 21.1481 10.0379C21.1451 11.9479 20.2061 13.8819 18.6341 15.2139H18.6331Z"
                fill="#657786"
              />
            </svg>
          </div>
          <div class="replied-num">{{ user.userTweets.length }}</div>
          <div class="love-icon">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8 21.6379H12.786C10.203 21.5899 2.75 14.8559 2.75 8.47788C2.75 5.41388 5.275 2.72388 8.153 2.72388C10.443 2.72388 11.983 4.30388 12.799 5.45388C13.613 4.30588 15.153 2.72388 17.444 2.72388C20.324 2.72388 22.848 5.41388 22.848 8.47888C22.848 14.8549 15.394 21.5889 12.811 21.6359H12.8V21.6379ZM8.154 4.22488C6.074 4.22488 4.251 6.21288 4.251 8.47988C4.251 14.2199 11.285 20.0759 12.801 20.1379C14.319 20.0759 21.351 14.2209 21.351 8.47988C21.351 6.21288 19.528 4.22488 17.448 4.22488C14.92 4.22488 13.508 7.16088 13.496 7.18988C13.266 7.75188 12.34 7.75188 12.109 7.18988C12.095 7.15988 10.684 4.22488 8.155 4.22488H8.154Z"
                fill="#657786"
              />
            </svg>
          </div>
          <div class="love-num">{{ user.likes.length }}</div>
        </div>
        <div class="follow">
          <div class="follow-num">{{ user.Followings.length }}個</div>
          <div class="followings">跟隨中</div>
          <div class="follow-num">{{ user.Followers.length }}個</div>
          <div class="followers">跟隨者</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img,
svg {
  cursor: initial;
}

.users-list {
  font-family: "Noto Sans TC", sans-serif;
  font-style: normal;
  font-weight: bold;
  color: #1c1c1c;
  header {
    border-bottom: 1px solid #e6ecf0;
    border-left: 1px solid #e6ecf0;
    font-weight: 900;
    font-size: 18px;
    padding: 15px 0px 15px 25px;
  }
  .container {
    border-left: 1px solid #e5e5e5;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    min-height: 1145px;
    padding: 7.5px;
    .user-card {
      position: relative;
      width: 245px;
      height: 314px;
      background: #f6f7f8;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 7.5px;
      img {
        background: #c4c4c4;
      }
      .cover {
        width: 245px;
        height: 140px;
        border-radius: 10px 10px 0px 0px;
      }
      .name-avatar {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        top: 68px;
        .avatar {
          border: 4px solid #ffffff;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          margin-bottom: 3px;
        }
        .name,
        .account {
          font-size: 15px;
          margin-top: 2px;
        }
        .name {
          font-weight: 900;
        }
        .account {
          font-weight: 500;
          color: #657786;
        }
      }
      .row-action {
        display: flex;
        align-items: center;
        position: relative;
        top: 94px;
        font-weight: 500;
        font-size: 15px;
        .replied-icon,
        .love-icon {
          margin-right: 7px;
        }
        .replied-num {
          margin-right: 17px;
        }
      }
      .follow {
        display: flex;
        position: relative;
        top: 105px;
        font-size: 14px;
        .follow-num {
          font-weight: 500;
        }
        .followers,
        .followings {
          font-weight: 400;
          color: #657786;
        }
        .followings {
          margin-right: 5px;
        }
      }
    }
  }
}
</style>

<script>
import admin from "./../api/admin";
import {
  Toast,
  keepUnauthorizedOut,
  roleAccessControl,
} from "./../utils/helpers";

export default {
  name: "AdminUsers",
  data() {
    return {
      users: [],
    };
  },
  methods: {
    // API
    async fetchApiData() {
      try {
        const response = await admin.getAllUsers();

        console.log("users", response);

        // 取得 API 請求後的資料
        const { data } = response;

        if (response.statusText !== "OK") {
          throw new Error(data.message);
        }

        this.users = data;
        this.users = this.users.sort(function (a, b) {
          return b.userTweets.length - a.userTweets.length;
        });
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "warning",
          title: "無法載入資料",
        });
      }
    },
  },
  created() {
    keepUnauthorizedOut(this);
    roleAccessControl(this, "10550");
    this.fetchApiData();
  },
};
</script>
