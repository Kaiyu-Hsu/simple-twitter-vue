<template>
  <div class="container scrollbar">
    <div class="tweet-card" v-for="tweet in tweets" :key="tweet.id">
      <div class="thumbnail-container">
        <img :src="tweet.user.avatar" alt="" />
      </div>
      <div class="right-content">
        <div class="title-wrapper">
          <div class="name">{{ tweet.user.name }}</div>
          <div class="account">@{{ tweet.user.account }}</div>
          <div class="dot"></div>
          <div class="createdAt">{{ tweet.createdAt | fromNow }}</div>
        </div>
        <p class="description">
          {{ tweet.description }}
        </p>
        <div class="icon-wrapper">
          <div
            class="reply-icon-wrapper"
            @click.stop.prevent="showModal(tweet.id)"
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
            <span>{{ tweet.replies.length }}</span>
          </div>
          <div
            class="like-icon-wrapper"
            @click.stop.prevent="changeLike(tweet.id)"
          >
            <!-- 普通的愛心 -->
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              v-show="!ifLiked(tweet)"
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
              v-show="ifLiked(tweet)"
            >
              <path
                d="M11 19.6381H10.986C8.40295 19.5901 0.949951 12.8561 0.949951 6.47812C0.949951 3.41412 3.47495 0.724121 6.35295 0.724121C8.64295 0.724121 10.183 2.30412 10.999 3.45412C11.813 2.30612 13.353 0.724121 15.644 0.724121C18.524 0.724121 21.048 3.41412 21.048 6.47912C21.048 12.8551 13.594 19.5891 11.011 19.6361H11V19.6381Z"
                fill="#E0245E"
              />
            </svg>
            <span :class="{ like: ifLiked(tweet) }">{{
              tweet.likes.length
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <ReplyModal
      v-if="isModalVisible"
      :tweet-content="oneTweet"
      :initial-user="initialUser"
      @close-modal="closeModal"
    />
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 600px;
  max-height: 1021px;
  margin: 0% auto;
  margin-top: -8px;
  border: 1px solid #e6ecf0;
  overflow-y: scroll;

  .tweet-card {
    display: flex;
    .thumbnail-container {
      position: relative;
      z-index: -1;
      width: 50px;
      margin-left: 15px;
      img {
        position: absolute;
        z-index: -1;
        top: 10px;
        border-radius: 50%;
        width: 50px;
        height: 50px;
      }
    }
    .right-content {
      margin-left: 10px;
      flex: 1;
      .title-wrapper {
        display: flex;

        .name {
          font-family: Noto Sans TC;
          font-style: normal;
          font-weight: bold;
          font-size: 15px;
          line-height: 22px;
          color: #1c1c1c;
          margin-right: 5px;
        }
        .account {
          font-family: Noto Sans TC;
          font-style: normal;
          font-weight: 500;
          font-size: 15px;
          line-height: 22px;
          color: #657786;
        }
        .dot {
          border-radius: 50%;
          height: 5px;
          width: 5px;
          background-color: #657786;
          position: relative;
          z-index: -1;
          top: 0.5rem;
          margin: 0% 0.5rem;
        }
        .createdAt {
          font-family: Noto Sans TC;
          font-style: normal;
          font-weight: 500;
          font-size: 15px;
          line-height: 22px;
          color: #657786;
        }
      }
      .description {
        margin: 6px 15px 14px 0px;
      }
      .icon-wrapper {
        display: flex;
        .reply-icon-wrapper {
          margin-right: 51.22px;
          span {
            margin-left: 11.35px;
            font-family: Noto Sans TC;
            font-style: normal;
            font-weight: 500;
            font-size: 13px;
            line-height: 13px;
            color: #657786;
          }
        }
        .like-icon-wrapper {
          span {
            margin-left: 11.35px;
            font-family: Noto Sans TC;
            font-style: normal;
            font-weight: 500;
            font-size: 13px;
            line-height: 13px;
            color: #657786;
          }
          .like {
            color: #e0245e;
          }
        }
      }
    }
  }
}
// 客製 container 的 scrollbar
.scrollbar {
  &::-webkit-scrollbar {
    width: 1px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: none;
  }
}
</style>

<script>
import { fromNowFilter } from "./../utils/mixins.js";
import ReplyModal from "./ReplyModal.vue";

export default {
  mixins: [fromNowFilter],
  props: {
    initialTweets: {
      type: Array,
      required: true,
    },
    initialTweetsReply: {
      type: Array,
      required: true,
    },
    initialUser: {
      type: Object,
      required: true,
    },
  },
  components: {
    ReplyModal,
  },
  data() {
    return {
      tweets: [],
      isModalVisible: false,
      oneTweet: {},      
    };
  },
  created() {
    this.fetchTweets();
  },
  watch: {
    initialTweets(newValue) {
      this.tweets = [
        ... this.tweets,
        ... newValue
      ]
    }
  },
  methods: {
    fetchTweets() {
      this.tweets = [...this.initialTweets];
    },
    showModal(id) {
      this.isModalVisible = true;
      this.oneTweet = { ...this.tweets.find((tweet) => tweet.id === id) };
    },
    closeModal() {
      this.isModalVisible = false;
    },
    ifLiked(tweet) {
      return tweet.likes.some((obj) => obj.UserId === this.initialUser.id);
    },
    changeLike(id) {
      // TODO 要把資料送到後端更新
      // 找到對應的那一則推文
      const findTweet = this.tweets.find((tweet) => tweet.id === id);

      if (
        findTweet.likes.some(
          (likeRecord) => likeRecord.UserId === this.initialUser.id
        )
      ) {
        // 愛心亮起的狀態，使用者可以再次點擊愛心以取消"喜歡"
        findTweet.likes = findTweet.likes.filter(
          (likeRecord) => likeRecord.UserId !== this.initialUser.id
        );
        return;
      }
      // 使用者未"喜歡"該則推文時，點擊愛心就會變成"喜歡"
      findTweet.likes.push({ UserId: this.initialUser.id, TweetId: id });
    },
  },
  computed: {},
  filters: {},
};
</script>
