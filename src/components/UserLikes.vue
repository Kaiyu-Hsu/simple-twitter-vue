<template>
  <div class="a-tweet-container">
    <div class="a-tweet" v-for="like in likes" :key="like.TweetId">
      <img :src="like.tweet.user.avatar" class="avatar" />
      <div class="content">
        <div class="name-account">
          <div class="name">{{ like.tweet.user.name }}</div>
          <div class="account">
            @{{ like.tweet.user.account }}・{{ like.createdAt | fromNow }}
          </div>
        </div>
        <div class="description">{{ like.tweet.description }}</div>
        <div class="replies-likes">
          <div class="replies">
            <div class="replies-icon">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.77881 1.40127L6.18631 1.39502H6.18506C3.45131 1.39502 1.31006 3.53689 1.31006 6.27127C1.31006 8.83252 3.30131 10.775 5.97568 10.8775V13.27C5.97568 13.3375 6.00318 13.4488 6.05068 13.5219C6.13943 13.6625 6.29068 13.7388 6.44568 13.7388C6.53193 13.7388 6.61881 13.715 6.69693 13.665C6.86193 13.56 10.7426 11.0775 11.7519 10.2238C12.9407 9.21752 13.6519 7.74252 13.6538 6.27877V6.26814C13.6501 3.53877 11.5101 1.40127 8.77881 1.40064V1.40127ZM11.1457 9.50877C10.4369 10.1088 8.10693 11.6369 6.91318 12.4106V10.4188C6.91318 10.16 6.70381 9.95002 6.44443 9.95002H6.19693C3.90943 9.95002 2.24818 8.40252 2.24818 6.27127C2.24818 4.06252 3.97818 2.33252 6.18568 2.33252L8.77756 2.33877H8.77881C10.9863 2.33877 12.7163 4.06752 12.7176 6.27377C12.7157 7.46752 12.1288 8.67627 11.1463 9.50877H11.1457Z"
                  fill="#657786"
                />
              </svg>
            </div>
            <!-- TODO 回覆數量 -->
            <div class="replies-num">13</div>
          </div>
          <div class="likes">
            <div class="likes-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 21.6381H11.986C9.40295 21.5901 1.94995 14.8561 1.94995 8.47812C1.94995 5.41412 4.47495 2.72412 7.35295 2.72412C9.64295 2.72412 11.183 4.30412 11.999 5.45412C12.813 4.30612 14.353 2.72412 16.644 2.72412C19.524 2.72412 22.048 5.41412 22.048 8.47912C22.048 14.8551 14.594 21.5891 12.011 21.6361H12V21.6381Z"
                  fill="#E0245E"
                />
              </svg>
            </div>
            <!-- TODO 按讚數量 -->
            <div class="likes-num">52</div>
          </div>
        </div>
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
  min-height: 136px;
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

    .description {
      min-height: 66px;
      font-weight: 500;
      margin: 3px 0px 15px 0px;
    }

    .replies-likes {
      display: flex;
      font-weight: 500;
      font-size: 13px;
      color: #657786;
      .replies,
      .likes {
        display: flex;
        margin-right: 52px;
        align-items: center;
        .replies-icon,
        .likes-icon {
          margin-right: 12px;
        }
      }
      .likes-num {
        color: #e0245e;
      }
    }
  }
}
</style>

<script>
import data from "./../../public/api-users-id-likes-v2.json";
// TODO api-users-id-replied-tweets-v2.json 沒有包含userData 由另一個資料載入
import userData from "./../../public/api-users-id-tweets-v2.json";
import { fromNowFilter } from "./../../utils/mixins"; // 時間簡化套件

export default {
  name: "UserLikes",
  data() {
    return {
      likes: [],
      user: {},
    };
  },
  mixins: [fromNowFilter],
  methods: {
    fetchData() {
      this.user = userData.userData;
      this.likes = data.likedTweets;
    },
  },
  created() {
    this.fetchData();
    console.log(this.user);
    console.log(this.likes);
  },
};
</script>
