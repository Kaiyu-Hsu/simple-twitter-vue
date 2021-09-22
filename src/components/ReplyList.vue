<template>
  <div class="container scrollbar">
    <div class="tweet-card" v-for="reply in tweetData.replies" :key="reply.id">
      <div class="thumbnail-container">
        <img :src="reply.user.avatar" alt="" />        
      </div>
      <div class="right-content">
        <div class="title-wrapper">
          <div class="name">{{ reply.user.name }}</div>
          <div class="account">{{ reply.user.account }}</div>
          <div class="dot"></div>
          <div class="createdAt">
            {{ reply.createdAt | fromNow }}
          </div>
        </div>        
        <div class="reply-container">
          <span>回覆</span>
          <span class="reply-target">@{{ tweetData.user.account }}</span>
        </div>
        <p class="description">
          {{ reply.comment }}
        </p>
      </div>
    </div>        
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin: 0% auto;
  margin-top: 6px;
  width: 603px;
  max-height: 747px;
  overflow-y: scroll;
  .tweet-card {
  display: flex;
  padding: 15px 0% 15px 15px;
  border: 1px solid #E6ECF0;
  .thumbnail-container {
    position: relative;
    width: 50px;
    img {
      position: absolute;
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
    .reply-container {
      margin-top: 6px;
      span {
        font-family: Noto Sans TC;
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 13px;
        color: #657786;
      }
      .reply-target {
        margin-left: 11.35px;
        font-family: Noto Sans TC;
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 13px;
        color: #ff6600;
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

export default {
  mixins:[fromNowFilter],
  props: {
    tweetData: {
      type: Object,
      required: true,
    },
  },
};
</script>
