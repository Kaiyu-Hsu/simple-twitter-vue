<template>
  <div class="container">
    <Navbar />
    <div class="messages">
      <div class="tiltle">
        <span>訊息</span>
        <div class="messages-icon">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.2499 3.25001H20.8249V0.825012C20.8249 0.411012 20.4889 0.0750122 20.0749 0.0750122C19.6609 0.0750122 19.3249 0.411012 19.3249 0.825012V3.25001H16.8999C16.4859 3.25001 16.1499 3.58601 16.1499 4.00001C16.1499 4.41401 16.4859 4.75001 16.8999 4.75001H19.3249V7.17501C19.3249 7.58901 19.6609 7.92501 20.0749 7.92501C20.4889 7.92501 20.8249 7.58901 20.8249 7.17501V4.75001H23.2499C23.6639 4.75001 23.9999 4.41401 23.9999 4.00001C23.9999 3.58601 23.6639 3.25001 23.2499 3.25001ZM20.0749 10.126C19.6609 10.126 19.3249 10.462 19.3249 10.876V18.954C19.3249 19.368 18.9879 19.704 18.5749 19.704H4.09495C3.68295 19.704 3.34495 19.368 3.34495 18.954V8.29801L10.1229 12.816C10.4909 13.062 10.9129 13.186 11.3359 13.186C11.7579 13.186 12.1799 13.062 12.5479 12.816L17.0779 9.80301C17.4139 9.58001 17.5059 9.12701 17.2819 8.79101C17.0589 8.45901 16.6069 8.36601 16.2699 8.59101L11.7399 11.605C11.4939 11.767 11.1769 11.768 10.9319 11.605L3.34595 6.54501V5.50001C3.34595 5.08601 3.68295 4.75001 4.09595 4.75001H13.1899C13.6039 4.75001 13.9399 4.41401 13.9399 4.00001C13.9399 3.58601 13.6039 3.25001 13.1899 3.25001H4.09595C2.85595 3.25001 1.84595 4.26001 1.84595 5.50001V18.955C1.84595 20.195 2.85595 21.205 4.09595 21.205H18.5759C19.8159 21.205 20.8259 20.195 20.8259 18.955V10.877C20.8259 10.462 20.4889 10.127 20.0759 10.127L20.0749 10.126Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <div class="a-message" @click="join">
        <img src="http://img.yao51.com/jiankangtuku/qnkswqwpy.jpeg" />
        <div class="a-message-inner">
          <div class="name-account">
            <div class="name">Apple</div>
            <div class="account">@apple</div>
            <div class="time">5秒</div>
          </div>
          <div class="content">
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
            cillum dolor. Voluptate exercitation incididunt aliquip deserunt
            reprehenderit elit laborum.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  position: absolute;
  left: 0px;
  height: 100%;
  margin-left: 27%;
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
  font-family: Noto Sans TC;
  font-style: normal;
  font-weight: bold;
  .messages {
    width: 390px;
    border-bottom: 1px solid #e6ecf0;
    .tiltle {
      font-size: 18px;
      padding: 15px 0px 15px 15px;
      border-bottom: 1px solid #e6ecf0;
      display: flex;
      .messages-icon {
        position: relative;
        left: 300px;
      }
    }

    .a-message {
      display: flex;
      padding: 10px;
      img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
        border-radius: 50%;
        background: #c4c4c4;
      }
      .a-message-inner {
        display: flex;
        flex-direction: column;
        .name-account {
          display: flex;
          .account,
          .time {
            font-weight: 500;
            font-size: 15px;
            color: #657786;
          }

          .time {
            position: relative;
            // TODO 微調位置
            left: 172px;
            top: 0px;
          }
        }
        .content {
          margin-top: 10px;
          font-weight: 500;
          font-size: 15px;
          color: #657786;
        }
      }
    }
  }
}
</style>

<script src="https://cdnjs.cloudflare.com/ajax/libs/qs/6.10.1/qs.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.1.2/socket.io.js"></script>
<script>
import Navbar from "./../components/Navbar";
import {
  apiHelper,
  keepUnauthorizedOut,
  roleAccessControl,
} from "./../utils/helpers";
// import axios from "axios";

const getToken = () => localStorage.getItem("token");
// 連線到heroku
// const socket = io("https://actwitter.herokuapp.com");
// const getUserId = () => localStorage.getItem("user");
// TODO 送出user id 被拒絕了
// socket.emit("connectServer", getUserId());
// 聊天室資訊
// socket.on("room-info", { roomId, targetId, chatRecord });
// 聊天室訊息
// socket.on("chatMessage", ({ message, roomId }) => {
//   console.log(message, roomId);
// });
// 使用者下線訊息
// socket.on("chat-offline-notice", (userId) => {
//   console.log(userId);
// });

export default {
  name: "PrivateMessage",
  components: {
    Navbar,
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async fetchData() {
      try {
        // TODO 被拒絕了
        const response = await apiHelper.get(`/api/users/chatRecords`, {
          headers: { Authorization: `Bearer ${getToken()}` },
        });
        const { data } = response;
        console.log(response);

        if (response.statusText !== "OK") {
          throw new Error(data.message);
        }

        // this.users = data;
      } catch (error) {
        console.log(error);
      }
    },
    // TODO 加入私人房間
    join() {
      socket.emit("join-room", { roomId: "2" });
    },
  },
  created() {
    keepUnauthorizedOut(this);
    roleAccessControl(this, "8347");
    this.fetchData();
  },
};
</script>
