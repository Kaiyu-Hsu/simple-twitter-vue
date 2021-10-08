<template>
  <div class="container">
    <div class="title">
      <span>首頁</span>
    </div>
    <div class="textarea-wrapper">
      <div class="thumbnail-container">
        <img :src="user.avatar" alt="" />
      </div>
      <textarea
        name="new-tweet"
        id=""
        maxlength="140"
        placeholder="有什麼新鮮事?"
        class="scrollbar"
        v-model="newPostContent"
      ></textarea>
      <div class="button-area">
        <div class="word-count" v-show="newPostContent">
          {{ newPostContent.length }} / 140
        </div>
        <button type="button" @click.stop.prevent="newTweet">推文</button>
      </div>
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
    height: 120px;
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
        cursor: initial;
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
      &:active,
      &:focus {
        outline: none;
      }
    }
    .button-area {
      display: flex;
      flex-direction: column;
      justify-content: end;
      text-align: center;
      .word-count {
        width: 100%;
        margin-bottom: 3px;
        font-size: 10px;
        color: rgb(51, 51, 51);
      }
      button {
        border: none;
        width: 66px;
        height: 38px;
        border-radius: 100px;
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
import { Toast } from "../utils/helpers";
import { tweets } from "./../api/tweets";

export default {
  props: {
    initialUser: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      user: {},
      newPostContent: "",
    };
  },
  methods: {
    async newTweet() {
      if (this.newPostContent.trim().length < 1) {
        return Toast.fire({
          position: "top",
          width: "26rem",
          icon: "warning",
          title: "在輸入欄勇敢說出你的想法吧!",
        });
      } else if (this.newPostContent.length > 140) {
        return Toast.fire({
          position: "top",
          icon: "warning",
          title: "推文字數140字以內",
        });
      }

      try {
        const response = await tweets.postTweets(this.newPostContent);
        const { data } = response;

        if (response.statusText !== "OK") {
          throw new Error(data.message);
        }
        Toast.fire({
          icon: "success",
          position: "top",
          title: "成功發送推文",
        });
        this.newPostContent = "";
        this.$emit("new-post");
      } catch (error) {
        console.log("Error", error);
      }
    },
  },
  watch: {
    initialUser(newValue) {
      this.user = { ...this.user, ...newValue };
    },
  },
};
</script>
