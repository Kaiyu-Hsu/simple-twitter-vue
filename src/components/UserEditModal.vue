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
          <div class="title">編輯個人資料</div>
          <div class="save-btn" @click="save">儲存</div>
        </div>
        <div class="pic">
          <!-- background cover -->
          <div class="cover-container">
            <img class="cover" :src="user.cover" />
            <div class="cover-icon">
              <!-- TODO 更改背景圖片 -->
              <div class="camera">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.708 20H2.292C1.028 20 0 18.972 0 17.708V5.375C0 4.11 1.028 3.083 2.292 3.083H4.438C5.633 1.17 7.722 0 10 0C12.277 0 14.367 1.17 15.562 3.083H17.708C18.972 3.083 20 4.11 20 5.375V17.708C20 18.972 18.972 20 17.708 20ZM2.292 4.583C1.855 4.583 1.5 4.938 1.5 5.375V17.708C1.5 18.145 1.855 18.5 2.292 18.5H17.708C18.145 18.5 18.5 18.145 18.5 17.708V5.375C18.5 4.938 18.145 4.583 17.708 4.583H15.258C14.941 4.633 14.626 4.488 14.476 4.201C13.596 2.536 11.882 1.501 10 1.501C8.117 1.501 6.402 2.536 5.524 4.203C5.364 4.505 5.022 4.663 4.691 4.583H2.293H2.292Z"
                    fill="white"
                  />
                  <path
                    d="M9.99989 6.16699C7.31989 6.16699 5.13989 8.34699 5.13989 11.027C5.13989 13.707 7.31989 15.887 9.99989 15.887C12.6799 15.887 14.8599 13.707 14.8599 11.027C14.8599 8.34699 12.6799 6.16699 9.99989 6.16699ZM11.9999 11.75H10.7499V13C10.7499 13.414 10.4139 13.75 9.99989 13.75C9.58589 13.75 9.24989 13.414 9.24989 13V11.75H7.99989C7.58589 11.75 7.24989 11.414 7.24989 11C7.24989 10.586 7.58589 10.25 7.99989 10.25H9.24989V8.99999C9.24989 8.58599 9.58589 8.24999 9.99989 8.24999C10.4139 8.24999 10.7499 8.58599 10.7499 8.99999V10.25H11.9999C12.4139 10.25 12.7499 10.586 12.7499 11C12.7499 11.414 12.4139 11.75 11.9999 11.75Z"
                    fill="white"
                  />
                </svg>
              </div>
              <!-- TODO 取消更改 -->
              <div class="delete">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.4141 11.9999L19.2071 6.20687C19.5971 5.81687 19.5971 5.18388 19.2071 4.79288C18.8171 4.40188 18.1841 4.40288 17.7931 4.79288L12.0001 10.5859L6.20712 4.79288C5.81712 4.40288 5.18412 4.40288 4.79312 4.79288C4.40212 5.18288 4.40312 5.81587 4.79312 6.20687L10.5861 11.9999L4.79312 17.7929C4.40312 18.1829 4.40312 18.8159 4.79312 19.2069C4.98812 19.4019 5.24312 19.4999 5.50012 19.4999C5.75712 19.4999 6.01212 19.4019 6.20712 19.2069L12.0001 13.4139L17.7931 19.2069C17.9881 19.4019 18.2431 19.4999 18.5001 19.4999C18.7571 19.4999 19.0121 19.4019 19.2071 19.2069C19.5971 18.8169 19.5971 18.1839 19.2071 17.7929L13.4141 11.9999Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="avatar-container">
            <!-- avatar -->
            <img class="avatar" :src="user.avatar" />
            <!-- TODO 更改頭像 -->
            <div class="camera">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.708 20H2.292C1.028 20 0 18.972 0 17.708V5.375C0 4.11 1.028 3.083 2.292 3.083H4.438C5.633 1.17 7.722 0 10 0C12.277 0 14.367 1.17 15.562 3.083H17.708C18.972 3.083 20 4.11 20 5.375V17.708C20 18.972 18.972 20 17.708 20ZM2.292 4.583C1.855 4.583 1.5 4.938 1.5 5.375V17.708C1.5 18.145 1.855 18.5 2.292 18.5H17.708C18.145 18.5 18.5 18.145 18.5 17.708V5.375C18.5 4.938 18.145 4.583 17.708 4.583H15.258C14.941 4.633 14.626 4.488 14.476 4.201C13.596 2.536 11.882 1.501 10 1.501C8.117 1.501 6.402 2.536 5.524 4.203C5.364 4.505 5.022 4.663 4.691 4.583H2.293H2.292Z"
                  fill="white"
                />
                <path
                  d="M9.99989 6.16699C7.31989 6.16699 5.13989 8.34699 5.13989 11.027C5.13989 13.707 7.31989 15.887 9.99989 15.887C12.6799 15.887 14.8599 13.707 14.8599 11.027C14.8599 8.34699 12.6799 6.16699 9.99989 6.16699ZM11.9999 11.75H10.7499V13C10.7499 13.414 10.4139 13.75 9.99989 13.75C9.58589 13.75 9.24989 13.414 9.24989 13V11.75H7.99989C7.58589 11.75 7.24989 11.414 7.24989 11C7.24989 10.586 7.58589 10.25 7.99989 10.25H9.24989V8.99999C9.24989 8.58599 9.58589 8.24999 9.99989 8.24999C10.4139 8.24999 10.7499 8.58599 10.7499 8.99999V10.25H11.9999C12.4139 10.25 12.7499 10.586 12.7499 11C12.7499 11.414 12.4139 11.75 11.9999 11.75Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>

        <div class="form-container">
          <!-- name & info -->
          <form action="" id="edit-form">
            <div class="input-wrapper">
              <span>名稱</span>
              <input type="text" v-model="user.name" maxlength="50" />
              <hr />
              <div class="words-num">{{ user.name.length }}/50</div>
            </div>
            <div class="input-wrapper">
              <span>自我介紹</span>
              <textarea
                rows="4"
                cols="50"
                maxlength="160"
                v-model="user.introduction"
              ></textarea>
              <!-- <hr /> -->
              <div class="words-num">{{ user.introduction.length }}/160</div>
            </div>
          </form>
        </div>
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
  z-index: 10; // 最上層
  // 字型
  font-family: "Noto Sans TC", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 19px;
  color: #1c1c1c;

  .modal {
    position: absolute;
    top: 54px;
    width: 600px;
    height: 657px;
    border-radius: 14px;
    background: #ffffff;
    overflow-x: auto;
    display: flex;
    flex-direction: column;

    .modal-header {
      padding: 15px 15px 15px 79px;
      display: flex;
      position: relative;
      justify-content: space-between;

      .save-btn {
        width: 66px;
        height: 28px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background: #ff6600;
        border-radius: 100px;
        color: #ffffff;
        font-weight: 500;
        cursor: pointer;
      }
    }

    .pic {
      display: flex;
      flex-direction: column;
      .cover-container {
        position: relative;
        .cover {
          width: 100%;
          height: 200px;
          opacity: 0.6; // 透明值
        }
        .cover-icon {
          position: absolute;
          top: 90px;
          left: 44%;
          display: flex;
          cursor: pointer;
          .camera {
            margin-right: 35px;
          }
        }
      }
      .avatar-container {
        position: relative;
        max-height: 60px;
        .avatar {
          position: relative;
          bottom: 60px;
          left: 15px;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          border: 4px solid #ffffff;
        }
        .camera {
          position: absolute;
          top: -10px;
          left: 70px;
          cursor: pointer;
        }
      }
    }

    #edit-form {
      margin-top: 20px;
      .input-wrapper {
        // margin: 0% auto 30px auto;
        margin: 0 15px;
        width: 570px;
        position: relative;

        span {
          position: absolute;
          left: 10px;
          top: 5px;
          font-weight: 500;
          font-size: 15px;
          line-height: 15px;
          color: #657786;
        }
        input {
          // 取消預設style, 後續整合再透過reset.scss檔案取消瀏覽器預設style
          // 並且回來刪除 all: unset 這一行
          all: unset;

          font-weight: 500;
          text-align: start;
          padding-left: 10px;
          padding-top: 10px;
          width: 560px;
          height: calc(52px - 10px);
          background: #f5f8fa;
          border-radius: 0px 0px 4px 4px;
        }
        hr {
          margin: 0%;
          height: 2px;
          background-color: #657786;
          border-right: unset;
          border-left: unset;
          border-bottom: unset;
          border-radius: 0px 0px 4px 4px;
        }
        textarea {
          resize: none;
          border: 0; // 外框
          outline: none; // 打字時的外框
          width: 550px;
          height: 125px;
          padding: 25px 10px 0px 10px;
          //   padding-left: 10px;
          //   padding-top: 25px;
          font-size: 19px;
          background: #f5f8fa;
          border-radius: 4px;
          border-bottom: 4px solid #657786;
        }
        .words-num {
          width: 32px;
          height: 22px;
          font-weight: 500;
          font-size: 15px;
          color: #657786;
          padding-top: 5px;
          font-size: 15px;
          margin-left: auto;
          margin-bottom: 20px;
        }
      }
    }
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
</style>

<script>
import data from "./../../public/api-users-id-v2.json";
export default {
  data() {
    return {
      user: {},
      oringinalName: "",
      oringinalIntro: "",
    };
  },
  methods: {
    fetchData() {
      this.user = data.userData;
      this.oringinalName = data.userData.name;
      this.oringinalIntro = data.userData.introduction;
    },
    save() {
      if (
        this.user.name.trim().length === 0 ||
        this.user.introduction.trim().length === 0
      ) {
        alert("尚有空白請填寫完畢!");
      } else {
        this.$emit("close");
        console.log(this.user.name, this.user.introduction);
      }
    },
    btnClose() {
      this.user.name = this.oringinalName;
      this.user.introduction = this.oringinalIntro;
      this.$emit("close");
    },
  },
  created() {
    this.fetchData();
  },
  watch: {
    user: [
      {
        handler: function () {
          if (this.user.name.length === 50) {
            alert("名稱的字數到達上限!");
          }
        },
        deep: true,
        immediate: true,
      },
      {
        handler: function () {
          if (this.user.introduction.length === 160) {
            alert("自我介紹的字數到達上限!");
          }
        },
        deep: true,
        immediate: true,
      },
    ],
  },
};
</script>
