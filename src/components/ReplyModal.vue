<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal">
        <div class="modal-header">
          <button type="button" class="btn-close" @click="btnClose">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.41387 7.99988L15.2069 2.20687C15.5969 1.81687 15.5969 1.18388 15.2069 0.792875C14.8169 0.401875 14.1839 0.402875 13.7929 0.792875L7.99988 6.58588L2.20687 0.792875C1.81687 0.402875 1.18388 0.402875 0.792875 0.792875C0.401875 1.18288 0.402875 1.81587 0.792875 2.20687L6.58588 7.99988L0.792875 13.7929C0.402875 14.1829 0.402875 14.8159 0.792875 15.2069C0.987875 15.4019 1.24287 15.4999 1.49987 15.4999C1.75687 15.4999 2.01187 15.4019 2.20687 15.2069L7.99988 9.41387L13.7929 15.2069C13.9879 15.4019 14.2429 15.4999 14.4999 15.4999C14.7569 15.4999 15.0119 15.4019 15.2069 15.2069C15.5969 14.8169 15.5969 14.1839 15.2069 13.7929L9.41387 7.99988Z"
                fill="#FF6600"
              />
            </svg>
          </button>
        </div>

        <div class="modal-body">
          <div class="tweet-card">
            <div class="thumbnail-container">
              <img :src="tweetContent.user.avatar" alt="" />
              <div class="line"></div>
            </div>
            <div class="right-content">
              <div class="title-wrapper">
                <div class="name">{{ tweetContent.user.name }}</div>
                <div class="account">{{ tweetContent.user.account }}</div>
                <div class="dot"></div>
                <div class="createdAt">
                  {{ tweetContent.createdAt | fromNow }}
                </div>
              </div>
              <p class="description">
                {{ tweetContent.description }}
              </p>
              <div class="reply-container">
                <span>回覆給</span>
                <span class="reply-target"
                  >@{{ tweetContent.user.account }}</span
                >
              </div>
            </div>
          </div>

          <div class="textarea-wrapper">
            <img :src="user.avatar" />
            <textarea
              rows="4"
              cols="50"
              maxlength="140"
              placeholder="推你的回覆"
              v-model="replyContent"
            ></textarea>
          </div>
        </div>

        <footer class="modal-footer">
          <button type="button" class="btn-tweet" @click="postReply">
            回覆
          </button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.modal-backdrop {
  position: fixed;
  z-index: 2;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  position: absolute;
  top: 54px;
  width: 600px;
  height: 450px;
  border-radius: 14px;
  background: #ffffff;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  font-family: "Noto Sans TC", sans-serif;
  font-weight: 500;
}

.modal-header {
  display: flex;
  padding: 27px;
  position: relative;
  border-bottom: 1px solid #e6ecf0;
  color: #4aae9b;
  justify-content: space-between;
}

.modal-footer {
  flex-direction: column;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 15px;
}

.btn-close {
  position: absolute;
  left: 19.5px;
  top: 19.5px;
  padding: 0px;
  border: none;
  font-size: 15px;
  cursor: pointer;
  background: transparent;
}

.btn-tweet {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 66px;
  height: 38px;
  position: relative;
  left: 519px;
  background: #ff6600;
  border: 1px solid #ff6600;
  border-radius: 100px;
  color: white;
  font-size: 18px;
  cursor: pointer;
}

.tweet-card {
  display: flex;
  margin-bottom: 19px;
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
    .line {
      position: absolute;
      top: 65px;
      bottom: -13px;
      left: 25px;
      width: 2px;
      background: #ccd6dd;
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
.textarea-wrapper {
  display: flex;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  textarea {
    padding: 0px;
    margin: 10px;
    resize: none;
    width: 500px;
    height: 140px;
    font-family: "Noto Sans TC", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    border: 0; // 外框
    outline: none; // 打字時的外框
    &::placeholder {
      font-family: "Noto Sans TC", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      color: #9197a3;
    }
  }
}
</style>

<script>
import { fromNowFilter } from "./../utils/mixins.js";
import { tweet } from "./../api/tweet.js";
import { Toast } from "./../utils/helpers";

export default {
  mixins: [fromNowFilter],
  props: {
    tweetContent: {
      type: Object,
      default: () => ({
        likeCount: 1,
        replyCount: 3,
        tweetCreate: "2021-09-14T00:15:12.000Z",
        tweetDescription:
          "倚杖柴門外，連山到海隅，君問窮通理，不敢倚先賢，空山不見人，日暮掩柴扉，紅豆生南國，風正一帆懸，乍見翻疑夢，愧君相見頻，綠螘新醅酒，應見隴頭梅，蜀僧抱綠綺，斯人不可聞，心斷新豐酒，小園花亂飛，落葉人何在，時時誤拂絃，近淚無乾土，官應老病休，功蓋三分國，門繫釣魚船，坐觀垂釣者，仙",
        tweetId: 2,
        userAccount: "@JOJO",
        userAvatar:
          "https://loremflickr.com/320/240/restaurant,food/?random=23.186501555235584&lock=0.0465555806777429",
        userName: "user1",
      }),
    },
    initialUser: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      user: {},
      replyContent: "",
    };
  },
  methods: {
    fetchUser() {
      this.user = this.initialUser;
    },
    async postReply() {
      try {
        if (this.replyContent.trim().length === 0) {
          return Toast.fire({
            icon: "warning",
            title: "放心地向對方表達心裡的想法吧!",
            position: "top",
          });
        }

        const response = await tweet.replyTweet(
          this.tweetContent.id,
          this.replyContent
        );
        console.log(
          "🚀 ~ file: ReplyModal.vue ~ line 300 ~ postReply ~ response",
          response
        );

        this.$emit("close-modal");
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "warning",
          title: "請稍後再試",
          position: "top",
        });
      }
    },
    btnClose() {
      this.$emit("close-modal");
    },
  },
  created() {
    this.fetchUser();
  },
};
</script>
