<template>
  <div class="container">
    <header>
      <svg
        @click="$router.back()"
        width="17"
        height="14"
        viewBox="0 0 17 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.9995 5.99988H3.4135L7.7065 1.70687C8.0965 1.31687 8.0965 0.683875 7.7065 0.292875C7.3165 -0.0981249 6.6835 -0.0971249 6.2925 0.292875L0.2925 6.29288C-0.0975 6.68288 -0.0975 7.31588 0.2925 7.70687L6.2925 13.7069C6.4875 13.9019 6.7425 13.9999 6.9995 13.9999C7.2565 13.9999 7.5115 13.9019 7.7065 13.7069C8.0965 13.3169 8.0965 12.6839 7.7065 12.2929L3.4135 7.99988H15.9995C16.5525 7.99988 16.9995 7.55288 16.9995 6.99988C16.9995 6.44688 16.5525 5.99988 15.9995 5.99988Z"
          fill="black"
        />
      </svg>
      <div class="title">推文</div>
    </header>
    <div class="tweet-card">
      <div class="card-head">
        <div class="thumbnail-container">
          <img
            :src="tweetData.user.avatar"
            alt=""
            @click="othersProfile(tweetData.UserId)"
          />
        </div>
        <div>
          <div class="name">{{ tweetData.user.name }}</div>
          <div class="account">@{{ tweetData.user.account }}</div>
        </div>
      </div>
      <div class="card-body">
        <p class="description">
          {{ tweetData.description }}
        </p>
        <div class="time">{{ tweetData.createdAt | detailedTime }}</div>
      </div>
      <div class="card-footer">
        <span class="reply-count"
          ><span class="count">{{ tweetData.replies.length }}</span> 回覆</span
        >
        <span class="like-count"
          ><span class="count">{{ tweetData.likes.length }}</span>
          喜歡次數</span
        >
      </div>
      <div class="icon-wrapper">
        <div
          class="reply-icon-wrapper"
          @click.stop.prevent="showModal(tweetData.id)"
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.77881 0.40127L5.18631 0.39502H5.18506C2.45131 0.39502 0.310059 2.53689 0.310059 5.27127C0.310059 7.83252 2.30131 9.77502 4.97568 9.87752V12.27C4.97568 12.3375 5.00318 12.4488 5.05068 12.5219C5.13943 12.6625 5.29068 12.7388 5.44568 12.7388C5.53193 12.7388 5.61881 12.715 5.69693 12.665C5.86193 12.56 9.74256 10.0775 10.7519 9.22377C11.9407 8.21752 12.6519 6.74252 12.6538 5.27877V5.26814C12.6501 2.53877 10.5101 0.401269 7.77881 0.400644V0.40127ZM10.1457 8.50877C9.43693 9.10877 7.10693 10.6369 5.91318 11.4106V9.41877C5.91318 9.16002 5.70381 8.95002 5.44443 8.95002H5.19693C2.90943 8.95002 1.24818 7.40252 1.24818 5.27127C1.24818 3.06252 2.97818 1.33252 5.18568 1.33252L7.77756 1.33877H7.77881C9.98631 1.33877 11.7163 3.06752 11.7176 5.27377C11.7157 6.46752 11.1288 7.67627 10.1463 8.50877H10.1457Z"
              fill="#657786"
            />
          </svg>
        </div>
        <div class="like-icon-wrapper" @click.stop.prevent="changeLike">
          <!-- 普通的愛心 -->
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            v-if="!ifLiked"
          >
            <path
              d="M6.5 12.5239H6.49125C4.87687 12.4939 0.21875 8.28514 0.21875 4.29889C0.21875 2.38389 1.79687 0.702637 3.59562 0.702637C5.02687 0.702637 5.98937 1.69014 6.49937 2.40889C7.00812 1.69139 7.97062 0.702637 9.4025 0.702637C11.2025 0.702637 12.78 2.38389 12.78 4.29951C12.78 8.28451 8.12125 12.4933 6.50687 12.5226H6.5V12.5239ZM3.59625 1.64076C2.29625 1.64076 1.15687 2.88326 1.15687 4.30014C1.15687 7.88764 5.55312 11.5476 6.50062 11.5864C7.44937 11.5476 11.8444 7.88826 11.8444 4.30014C11.8444 2.88326 10.705 1.64076 9.405 1.64076C7.825 1.64076 6.9425 3.47576 6.935 3.49389C6.79125 3.84514 6.2125 3.84514 6.06812 3.49389C6.05937 3.47514 5.1775 1.64076 3.59687 1.64076H3.59625Z"
              fill="#657786"
            />
          </svg>
          <!-- 喜歡的愛心 -->
          <svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            v-else
          >
            <path
              d="M11 19.6381H10.986C8.40295 19.5901 0.949951 12.8561 0.949951 6.47812C0.949951 3.41412 3.47495 0.724121 6.35295 0.724121C8.64295 0.724121 10.183 2.30412 10.999 3.45412C11.813 2.30612 13.353 0.724121 15.644 0.724121C18.524 0.724121 21.048 3.41412 21.048 6.47912C21.048 12.8551 13.594 19.5891 11.011 19.6361H11V19.6381Z"
              fill="#E0245E"
            />
          </svg>
        </div>
      </div>
    </div>
    <ReplyModal
      v-if="isModalVisible"
      :tweet-content="oneTweet"
      :initial-user="userData"
      @close-modal="closeModal"
    />
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin: -7px auto;
  width: 600px;
  border: 1px solid #e6ecf0;
  border-top: none;
  header {
    display: flex;
    margin-bottom: 15px;
    padding: 14px 0%;
    border-bottom: 1px solid #e6ecf0;
    border-left: 1px solid #e6ecf0;
    border-right: 1px solid #e6ecf0;
    svg {
      margin: 0% 44px 0% 18px;
    }
    .title {
      margin-top: -5px;
      font-family: Noto Sans TC;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 26px;
    }
  }
  .tweet-card {
    .card-head {
      display: flex;
      .thumbnail-container {
        position: relative;
        width: 50px;
        height: 50px;
        margin: 0% 10px 0% 15px;
        img {
          position: absolute;
          border-radius: 50%;
          width: 50px;
          height: 50px;
        }
      }
      .name {
        margin-top: 3px;
        font-family: Noto Sans TC;
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 22px;
        color: #1c1c1c;
      }
      .account {
        font-family: Noto Sans TC;
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 22px;
        color: #657786;
      }
    }
    .card-body {
      margin: 0% 0% 0% 15px;
      .description {
        width: 510px;
        margin: 15px 0%;
        font-family: Noto Sans TC;
        font-style: normal;
        font-weight: 500;
        font-size: 23px;
        line-height: 34px;
        text-align: justify;
      }
      .time {
        font-family: Noto Sans TC;
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 22px;
        color: #657786;
      }
    }
    .card-footer {
      margin: 15px 15px 0% 15px;
      padding: 20px 0% 20px 4px;
      border-top: 1px solid #e6ecf0;
      border-bottom: 1px solid #e6ecf0;
      span {
        font-family: Noto Sans TC;
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
        line-height: 28px;
        color: #657786;
      }
      .count {
        font-weight: bold;
        color: #000000;
      }
      .reply-count {
        margin-right: 20px;
      }
    }
    .icon-wrapper {
      display: flex;
      margin: 20.79px 0% 15px 17.62px;
      svg {
        width: 24.69px;
        height: 24.69px;
      }

      .like-icon-wrapper {
        margin-left: 155.13px;
      }
    }
  }
}
</style>

<script>
import ReplyModal from "./../components/ReplyModal.vue";
import { fromNowFilter } from "./../utils/mixins";
import { tweets } from "./../api/tweets";

const getUserId = () => localStorage.getItem("user");

export default {
  components: {
    ReplyModal,
  },
  mixins: [fromNowFilter],
  props: {
    tweetData: {
      type: Object,
      required: true,
    },
    userData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isModalVisible: false,
      oneTweet: {},
    };
  },
  methods: {
    showModal() {
      this.oneTweet = { ...this.tweetData };
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
      this.$emit("close-modal");
    },
    othersProfile(id) {
      if (id === Number(getUserId())) {
        this.$router.push({ name: "profile" });
      } else {
        this.$router.push({ name: "other-profile", params: { id } });
      }
    },
    async changeLike() {
      // 愛心亮起的狀態，使用者點擊愛心以取消"喜歡"
      if (
        this.tweetData.likes.some(
          (likeRecord) => likeRecord.UserId === this.userData.id
        )
      ) {
        try {
          const response = await tweets.postUnlike(
            this.tweetData.id,
            this.userData.id
          );

          if (response.statusText !== "OK") {
            throw new Error(response);
          }
        } catch (error) {
          console.log("error", error.response || error);
        }
        // 使用者未"喜歡"該則推文時，點擊愛心就會變成"喜歡"
      } else {
        try {
          const response = await tweets.postLike(
            this.tweetData.id,
            this.userData.id
          );

          if (response.statusText !== "OK") {
            throw new Error(response);
          }
        } catch (error) {
          console.log("error", error.response || error);
        }
      }
      this.$emit("change-like");
    },
  },
  computed: {
    ifLiked() {
      return this.tweetData.likes.some(
        (liker) => liker.UserId === this.userData.id
      );
    },
  },
};
</script>
