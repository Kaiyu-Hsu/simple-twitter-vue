<template>
  <div class="container">
    <Navbar :initial-user="userData" />
    <!-- TODO 在線使用者名單 -->
    <aside class="user-list">
      <p class="user-list-title">上線使用者({{ attendees.length }})</p>
      <ul>
        <li v-for="(attendee, index) in attendees" :key="index">
          <img :src="attendee.avatar" alt="" />
          <span class="name">{{ attendee.name }}</span>
          <span class="account">@{{ attendee.account }}</span>
        </li>
      </ul>
      <div class="test-btn">
        <button @click.prevent.stop="getIn">上線</button>
        <button @click.stop.prevent="getOut">離線</button>
        <button @click.stop.prevent="msgIn">對我發訊息</button>
        <button @click.stop.prevent="msgOut">我發訊息</button>
      </div>
    </aside>
    <!-- TODO 及時聊天視窗 -->
    <main class="room">
      <p class="room-title">公開聊天室</p>
      <div class="room-body scrollbar">
        <div v-for="(msg, index) in msgs" :key="index">
          <div :class="msg.type">
            {{ msg.text }}
            <br />
            <span>{{ msg.time }}</span>
          </div>
        </div>
      </div>
      <div class="room-footer">
        <input
          type="text"
          placeholder="輸入訊息..."
          v-model="newMsg"
          @keyup.enter="sendMessage"
        />
        <svg
          @click="sendMessage"
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.13 9.35798L1.614 0.107979C1.324 -0.0440207 0.973998 0.00597923 0.740999 0.233979C0.510999 0.459979 0.447999 0.810979 0.590999 1.10198L4.953 10.022L0.590999 18.942C0.447999 19.234 0.510999 19.585 0.740999 19.81C0.885998 19.95 1.074 20.022 1.264 20.022C1.384 20.022 1.504 19.994 1.614 19.935L19.131 10.685C19.376 10.555 19.531 10.299 19.531 10.021C19.531 9.74298 19.376 9.48898 19.131 9.35898L19.13 9.35798ZM2.948 2.50998L15.752 9.27198H6.255L2.948 2.51198V2.50998ZM6.255 10.77H15.753L2.948 17.535L6.255 10.772V10.77Z"
            fill="#FF6600"
          />
        </svg>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin: -10px 0 0 378px;
  display: flex;
  height: 100vh;

  .user-list {
    border: 1px solid #e6ecf0;
    width: 390px;

    .user-list-title {
      font-family: Noto Sans TC;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 26px;
      color: #1c1c1c;
      margin-left: 15px;
      margin-block: 15px 14px;
    }
    ul {
      padding-inline-start: 0px;
      margin-block: 0em;
      li {
        border: 1px solid #e6ecf0;
        list-style: none;
        display: flex;
        padding-top: 10px;
        padding-bottom: 15px;
        padding-left: 15px;

        img {
          border-radius: 50%;
          width: 50px;
          height: 50px;
        }
        span {
          margin: auto 0%;
        }
        .name {
          margin-left: 10px;
          margin-right: 5px;
        }
        .account {
        }
      }
    }
    .test-btn {
      margin: auto 0 0 0;
    }
  }
  .room {
    flex: 1;
    position: relative;
    display: flex;
    flex-flow: column;

    .room-title {
      font-family: Noto Sans TC;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 26px;
      color: #1c1c1c;
      margin-left: 15px;
      margin-block: 13px 14px;
    }
    .room-body {
      flex: 1;
      overflow-y: scroll;
      margin: 0 15px;

      .connection {
        text-align: center;
        background-color: #e5e5e5;
        border-radius: 50px;
        width: fit-content;
        margin: 0 auto;
        margin-bottom: 15px;
        padding: 10px 15px;
        font-family: Noto Sans TC;
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 15px;
        text-align: center;
        color: #657786;
      }

      .msg-in {
        background: #e6ecf0;
        border-radius: 25px 25px 25px 0px;
        width: fit-content;
        margin-bottom: 35px;
        padding: 10px 15px;
        font-family: Noto Sans TC;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 20px;
        color: #1c1c1c;
      }

      .msg-out {
        background: #ff6600;
        border-radius: 25px 25px 0px 25px;
        margin: 0 0 35px auto;
        width: fit-content;
        padding: 10px 15px;
        font-family: Noto Sans TC;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 20px;
        color: #ffffff;
      }
    }
    .room-footer {
      display: flex;
      align-items: center;
      height: 55px;
      border: 1px solid #e6ecf0;

      input {
        height: 32px;
        flex: 1;
        margin: 12px 17px 11px 15px;
        padding: 0 0 0 15px;
        background: #e6ecf0;
        border-radius: 50px;
        border: none;
        outline: none;

        &::placeholder {
          font-family: Noto Sans TC;
          font-style: normal;
          font-weight: normal;
          font-size: 15px;
          line-height: 15px;
          color: rgba(0, 0, 0, 0.4);
        }
      }
      svg {
        height: 20px;
        width: 19px;
        margin-right: 17.5px;
        margin-top: 4px;
      }
    }
  }
}
// 客製scrollbar
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
import Navbar from "./../components/Navbar";
import { io } from "socket.io-client";
import { TWLocale } from "./../utils/mixins";
import user from "./../api/user";
import { keepUnauthorizedOut } from '../utils/helpers';

let c = 0; // testing

export default {
  name: "PublicChatRoom",
  components: {
    Navbar,
  },
  data() {
    return {
      userId: localStorage.getItem("user"),
      userData: {},
      msgs: [
        { text: "I came", type: "connection", time: `${TWLocale.showTime}` }, // TODO 顯示中文時間
        { text: "I saw", type: "msg-in", time: `${TWLocale.showTime}` },
        { text: "Icecream", type: "msg-out", time: `${TWLocale.showTime}` },
      ],
      newMsg: "",
      attendees: [
        {
          avatar:
            "https://loremflickr.com/320/240/restaurant,food/?random=8.858769683928713&lock=89.77442629509149",
          name: "Taro",
          account: "JOJO",
        },
        {
          avatar:
            "https://loremflickr.com/320/240/restaurant,food/?random=8.858769683928713&lock=89.77442629509149",
          name: "Taro",
          account: "JOJO",
        },
      ],
      // 連線至socket server
      socket: io("https://actwitter.herokuapp.com"),
    };
  },
  methods: {
    getIn() {
      // testing
      this.msgs.push({ text: `${this.userId}又進來啦!`, type: "connection" });
    },
    getOut() {
      // testing
      this.msgs.push({
        text: `${this.userId}又出去啦! 打我啊笨蛋`,
        type: "connection",
      });
    },
    msgIn() {
      //testing
      if (c > 5) {
        this.msgs.push({
          text: `再多的言語也無法挽回離開的心`,
          type: "connection",
          time: `${TWLocale.showTime}`,
        });
      } else if (c <= 2) {
        this.msgs.push({
          text: "你聽我說",
          type: "msg-in",
          time: `${TWLocale.showTime}`,
        });
        c++;
      } else if (c <= 4) {
        this.msgs.push({
          text: "拜託!我有苦衷",
          type: "msg-in",
          time: `${TWLocale.showTime}`,
        });
      } else {
        this.msgs.push({
          text: "求你了😭 別走",
          type: "msg-in",
          time: `${TWLocale.showTime}`,
        });
        c++;
      }
    },
    msgOut() {
      // testing
      if (c > 7) {
        return;
      } else if (c <= 2) {
        this.msgs.push({
          text: "我跟你說",
          type: "msg-out",
          time: `${TWLocale.showTime}`,
        });
        c++;
      } else if (c <= 4) {
        this.msgs.push({
          text: "我不想再聽你解釋了!😤",
          type: "msg-out",
          time: `${TWLocale.showTime}`,
        });
        c++;
      } else {
        this.msgs.push({
          text: "😤😤😤",
          type: "msg-out",
          time: `${TWLocale.showTime}`,
        });
        c++;
      }
    },
    async fetchUser(id) {
      try {
        const response = await user.getUserInfo(id);

        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }
        console.log("Fetch User");
        console.dir(response);
        this.userData = { ...response.data };
      } catch (error) {
        console.log("error", error);
      }
    },
    socketStart(userId) {
      // 連線並送出user id
      this.socket.emit("connectServer", userId);
      // 讀取通知 new
      this.socket.emit("read-notice", userId);
      // 觸發加入公開聊天室
      this.socket.emit("join-public-room", userId);
      console.log(`user${userId} socket just started!`);
    },

    sendMessage() {
      this.msgs.push({
        text: this.newMsg,
        type: "msg-out",
        time: `${TWLocale.showTime}`,
      });
      // 向公開聊天室發送訊息
      this.socket.emit("public-msg", {
        userId: this.userId,
        message: this.newMsg,
      });
      this.newMsg = "";
    },

    listenToServer() {
      // 接收通知 new
      this.socket.on("notices", (notice) => {
        console.log(notice);
      });

      this.socket.on("read-notice", (notice) => {
        console.log(notice);
      });

      //監聽接收公開聊天室的紀錄
      this.socket.on("public-chat-record", (publicChatRecord) => {
        console.log(publicChatRecord);
      });

      // 監聽接收線上使用者列表及所有使用者資料
      this.socket.on("online-list", (inRoomUsers) => {
        console.log(inRoomUsers);
      });

      // 監聽公開聊天室公告廣播
      this.socket.on("public-online-notice", (userId) => {
        console.log(userId);
      });

      // 監聽公開聊天室使用者下線訊息
      this.socket.on("public-offline-notice", (userId) => {
        console.log(userId);
      });

      // 監聽公開聊天室聊天訊息
      this.socket.on("public-msg", ({ userId, message }) => {
        console.log(userId, message);
      });
      console.log(`socket just started listening!`);
    },
  },
  created() {
    keepUnauthorizedOut(this)
    this.fetchUser(localStorage.getItem("user"));
    this.socketStart(this.userId);
    this.listenToServer();    
  },
};
</script>
