<template>
  <div class="container">
    <div class="title">
      <span>首頁</span>
    </div>
    <div class="textarea-wrapper">
      <div class="thumbnail-container">
        <img :src="initialUser.avatar" alt="" />
      </div>
      <textarea
        name="new-tweet"
        id=""
        maxlength="140"
        placeholder="有什麼新鮮事?"
        class="scrollbar"
        v-model="newPostContent"
      ></textarea>
      <button type="button" @click.stop.prevent="newTweet">推文</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 600px;
  margin: 0% auto;
  position: relative;  
  top: -8px;
  border: 1px solid #e6ecf0;
  border-bottom: 10px solid #e6ecf0;
  .title {
    margin-top: 15px;
    margin-bottom: 14px;
    margin-left: 15px;

    span {
      font-family: Noto Sans TC;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 26px;
      color: #1c1c1c;
    }
  }
  .textarea-wrapper {
    display: flex;
    border-top: 1px solid #e6ecf0;
    .thumbnail-container {
      position: relative;      
      width: 50px;
      margin-left: 15px;
      img {
        position: absolute;        
        top: 10px;
        border-radius: 50%;
        width: 50px;
        height: 50px;
      }
    }
    textarea {
      width: calc(510px - 66px);
      height: 3rem;
      margin-top: 20px;
      margin-left: 10px;
      padding-left: 0px;
      border: none;
      font-family: Noto Sans TC;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 26px;
      resize: none;
      overflow-wrap: break-word;
      overflow-y: scroll;
      &::placeholder {
        font-family: Noto Sans TC;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 26px;
        color: #9197a3;
      }
      &:active, &:focus {
        outline: none;
      }
    }
    button {
      width: 66px;
      height: 38px;
      border-radius: 100px;
      border: none;
      margin-top: 71px;
      margin-bottom: 10px;
      background: #ff6600;
      font-family: Noto Sans TC;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 18px;
      color: #ffffff;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
// 客製 textarea 的 scrollbar
.scrollbar {
  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: rgba(0, 0, 0, 0.1);
  }
}
</style>

<script>
import {fetchData} from "./../api/tweets"

export default {
  props: {
    initialUser: {
      type: Object,
      default: () => ({
        id: 0,
        email: "",
        password: "",
        name: "",
        avatar:
          "https://loremflickr.com/320/240/restaurant,food/?random=42.05818182229572&lock=36.5704379703123",
        introduction: "",
        account: "",
        cover:
          "https://loremflickr.com/320/240/restaurant,food/?random=72.26740788696395&lock=60.262852853754254",
        role: "user",
        createdAt: "2021-09-12T00:40:28.000Z",
        updatedAt: "2021-09-12T00:40:28.000Z",
      }),
    },
  },
  data() {
    return {
      newPostContent: "", 
    };
  },
  methods: {
    async newTweet() {
      // TODO 需跟後端確認發送 POST 新增推文請求的資料結構為何
      console.log("送出新推文內容: " + this.newPostContent);
      
      const response = await fetchData.postTweets(this.initialUser.id, this.newPostContent)
      console.log("🚀 ~ file: CreatePosts.vue ~ line 154 ~ newTweet ~ response", response)
    },
  },
};
</script>
