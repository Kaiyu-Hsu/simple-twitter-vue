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
          <img :src="initialUser.avatar" />
          <textarea
            rows="4"
            cols="50"
            maxlength="140"
            placeholder="有什麼新鮮事?"
            v-model="newPostContent"
          ></textarea>
        </div>

        <footer class="modal-footer">
          <span class="word-count" v-show="newPostContent"
            >{{ newPostContent.length }} / 140</span
          >
          <button type="button" class="btn-tweet" @click="newTweet">
            推文
          </button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.modal-backdrop {
  position: fixed;
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
  height: 300px;
  border-radius: 14px;
  background: #ffffff;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  font-family: "Noto Sans TC", sans-serif;
  font-weight: 500;
}

.modal-header {
  padding: 27px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #e6ecf0;
  color: #4aae9b;
  justify-content: space-between;
}

.modal-footer {
  display: flex;
  justify-content: end;
  padding-right: 15px;

  .word-count {
    line-height: 2.5;
    margin-right: 6px;
    font-size: 10px;
    color: rgb(51, 51, 51);
  }
}

.modal-body {
  display: flex;
  position: relative;
  padding: 15px;
}

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
  background: #ff6600;
  border: 1px solid #ff6600;
  border-radius: 100px;
  color: white;
  font-size: 18px;
  cursor: pointer;
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
          title: "內容不可空白",
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
      } catch (error) {
        console.log("Error", error);
      }
      // 通知重新渲染畫面
      this.$emit("new-post");
      // 關閉 modal
      this.$emit("close");
    },
    btnClose() {
      this.$emit("close");
    },
  },
};
</script>
