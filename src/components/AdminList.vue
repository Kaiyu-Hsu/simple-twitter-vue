<template>
  <div class="tweets-list">
    <header>推文清單</header>
    <div class="content" v-for="tweet in tweets" :key="tweet.id">
      <img :src="tweet.user.avatar" />
      <div>
        <div class="name-account">
          <div class="name">{{ tweet.user.name }}</div>
          <div class="account">
            @{{ tweet.user.account }}・{{ tweet.createdAt | fromNow }}
          </div>
        </div>
        <div class="description">
          {{ tweet.description }}
        </div>
      </div>
      <div class="delete" @click="deleteTweet">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.414 12.0001L19.207 6.20712C19.597 5.81712 19.597 5.18412 19.207 4.79312C18.817 4.40212 18.184 4.40312 17.793 4.79312L12 10.5861L6.207 4.79312C5.817 4.40312 5.184 4.40312 4.793 4.79312C4.402 5.18312 4.403 5.81612 4.793 6.20712L10.586 12.0001L4.793 17.7931C4.403 18.1831 4.403 18.8161 4.793 19.2071C4.988 19.4021 5.243 19.5001 5.5 19.5001C5.757 19.5001 6.012 19.4021 6.207 19.2071L12 13.4141L17.793 19.2071C17.988 19.4021 18.243 19.5001 18.5 19.5001C18.757 19.5001 19.012 19.4021 19.207 19.2071C19.597 18.8171 19.597 18.1841 19.207 17.7931L13.414 12.0001Z"
            fill="#657786"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tweets-list {
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
  .content {
    position: relative;
    padding: 13px 15px;
    border-bottom: 1px solid #e6ecf0;
    border-left: 1px solid #e6ecf0;
    display: flex;
    img {
      width: 50px;
      height: 50px;
      background: #c4c4c4;
      border-radius: 50%;
      margin-right: 15px;
    }
    .name-account {
      font-size: 15px;
      display: flex;
      .name {
        font-weight: 700;
        margin: auto 5px auto 0px;
      }
      .account {
        font-weight: 500;
        color: #657786;
      }
    }
    .description {
      font-weight: 500;
      font-size: 15px;
    }
    .delete {
      position: absolute;
      top: 15px;
      left: 96%;
    }
  }
}
</style>

<script>
import { fromNowFilter } from "./../utils/mixins";
import axios from "axios";
import { Toast } from "./../utils/helpers";

const getToken = () => localStorage.getItem("token");

export default {
  name: "AdminList",
  mixins: [fromNowFilter],
  data() {
    return {
      tweets: [],
    };
  },
  methods: {    
    deleteTweet() {
      console.log("delete");
      // TODO 刪除資料
    },
    // API
    async fetchApiData() {
      try {
        const response = await axios.get(
          "https://actwitter.herokuapp.com/api/admin",
          {
            headers: { Authorization: `Bearer ${getToken()}` },
          }
        );

        console.log("admin");
        console.log(response);

        // 取得 API 請求後的資料
        const { data } = response;

        if (response.statusText !== "OK") {
          throw new Error(data.message);
        }

        // TODO 載入資料
        // this.tweets = data.allTweets;
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
    this.fetchApiData();
  },
};
</script>
