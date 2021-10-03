<template>
  <div class="a-tweet-container">
    <div class="a-tweet" v-for="like in likes" :key="like.TweetId">
      <img
        :src="like.tweet.user.avatar"
        @click.stop.prevent="othersProfile(like.tweet.user.id)"
        class="avatar"
        alt="?"
      />
      <div class="content">
        <div class="name-account">
          <div
            class="name"
            @click.stop.prevent="othersProfile(like.tweet.user.id)"
          >
            {{ like.tweet.user.name }}
          </div>
          <div class="account">
            @{{ like.tweet.user.account }}・{{ like.createdAt | fromNow }}
          </div>
        </div>
        <div class="description">{{ like.tweet.description }}</div>
        <div class="replies-likes">
          <div class="replies" @click="toOneTweet(like)">
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
            <div class="replies-num">{{ like.tweet.replies.length }}</div>
          </div>

          <div
            class="likes"
            v-if="
              like.tweet.likes.find((like) => like.UserId === initialUser.id)
            "
          >
            <div class="likes-icon" @click.stop.prevent="unlike(like.TweetId)">
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
            <div class="likes-num">{{ like.tweet.likes.length }}</div>
          </div>
          <div class="dislikes" v-else>
            <div class="likes-icon" @click.stop.prevent="like(like.TweetId)">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 13.5236H7.49125C5.87687 13.4936 1.21875 9.28489 1.21875 5.29864C1.21875 3.38364 2.79687 1.70239 4.59562 1.70239C6.02687 1.70239 6.98937 2.68989 7.49937 3.40864C8.00812 2.69114 8.97062 1.70239 10.4025 1.70239C12.2025 1.70239 13.78 3.38364 13.78 5.29927C13.78 9.28427 9.12125 13.493 7.50687 13.5224H7.5V13.5236ZM4.59625 2.64052C3.29625 2.64052 2.15687 3.88302 2.15687 5.29989C2.15687 8.88739 6.55312 12.5474 7.50062 12.5861C8.44937 12.5474 12.8444 8.88802 12.8444 5.29989C12.8444 3.88302 11.705 2.64052 10.405 2.64052C8.825 2.64052 7.9425 4.47552 7.935 4.49364C7.79125 4.84489 7.2125 4.84489 7.06812 4.49364C7.05937 4.47489 6.1775 2.64052 4.59687 2.64052H4.59625Z"
                  fill="#657786"
                />
              </svg>
            </div>
            <div class="dislikes-num" style="#657786">
              {{ like.tweet.likes.length }}
            </div>
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
      .likes,
      .dislikes {
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
import { fromNowFilter } from "./../utils/mixins"; // 時間簡化套件
import { Toast } from "./../utils/helpers";
import userAPI from "./../api/userProfile";
import { tweets } from "./../api/tweets";

const getUserId = () => localStorage.getItem("user");

export default {
  name: "UserLikes",
  props: {
    initialUser: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      likes: [],
    };
  },
  mixins: [fromNowFilter],
  methods: {
    async unlike(tweetId) {
      try {
        console.log("unlike tweet id:", tweetId);
        const response = await tweets.postUnlike(tweetId, getUserId());
        const { data } = response;
        console.log("unlike:", response);

        if (response.statusText !== "OK") {
          throw new Error(data.message);
        }

        this.fetchApiLikes();
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法移除最愛",
        });
      }
    },
    async like(tweetId) {
      try {
        console.log("like tweet id:", tweetId);
        const response = await tweets.postLike(tweetId, getUserId());
        const { data } = response;
        console.log("like:", response);

        if (response.statusText !== "OK") {
          throw new Error(data.message);
        }

        this.fetchApiLikes();
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法加入最愛",
        });
      }
    },
    async fetchApiLikes() {
      try {
        const getUserId = () => localStorage.getItem("user");
        const response = await userAPI.getLikes(getUserId());

        console.log("user's likes");
        console.log(response);

        // 取得 API 請求後的資料
        const { data } = response;

        if (response.statusText !== "OK") {
          throw new Error(data.message);
        }

        this.likes = data;
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "warning",
          title: "無法載入資料",
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
    toOneTweet(like) {
      this.$router.push({ name: "tweet", params: { id: like.TweetId } });
    },
  },
  created() {
    this.fetchApiLikes();
  },
};
</script>
