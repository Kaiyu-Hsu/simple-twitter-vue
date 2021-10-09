<template>
  <div class="home">
    <Navbar />
    <div class="setting">
      <header>帳戶設定</header>
      <div class="form-container">
        <form action="" id="setting-form" @submit.stop.prevent="putEditUser">
          <div class="input-wrapper">
            <span>帳號</span>
            <input type="text" v-model="account" />
            <hr />
          </div>
          <div class="input-wrapper">
            <span>名稱</span>
            <input type="text" v-model="name" />
            <hr />
          </div>
          <div class="input-wrapper">
            <span>Email</span>
            <input
              type="text"
              pattern="\S+"
              title="不接受空白鍵"
              v-model="email"
            />
            <hr />
          </div>
          <div class="input-wrapper">
            <span>密碼</span>
            <input
              type="password"
              pattern="\S+"
              title="不接受空白鍵"
              v-model="password"
            />
            <hr />
          </div>
          <div class="input-wrapper">
            <span>密碼確認</span>
            <input
              type="password"
              pattern="\S+"
              title="不接受空白鍵"
              v-model="checkPassword"
            />
            <hr />
          </div>
        </form>
        <button type="submit" form="setting-form">儲存</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// TODO 微調樣式
.setting {
  position: absolute;
  left: 378px;
  height: 100%;
  bottom: 0px;
  border-left: 1px solid #e6ecf0;
  margin-left: 65px;
  padding-left: 16px;

  header {
    padding: 13px 0px 14px 20px;
    font-family: Noto Sans TC;
    font-style: normal;
    font-weight: bold;
    font-size: 19px;
    line-height: 28px;
  }
  .form-container {
    text-align: center;
    padding-left: 16px;

    #setting-form {
      .input-wrapper {
        margin: 0% auto 30px auto;
        width: 540px;
        position: relative;

        span {
          position: absolute;
          left: 10px;
          top: 5px;
          font-family: Noto Sans TC;
          font-style: normal;
          font-weight: 500;
          font-size: 15px;
          line-height: 15px;
          color: #657786;
        }
        input {
          // 取消預設style
          all: unset;

          text-align: start;
          padding-left: 10px;
          padding-top: 10px;
          width: calc(540px - 10px);
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
      }
    }
    button {
      // 取消預設style,
      all: unset;

      margin-top: 10px;
      padding: 10px 252px;
      background: #ff6600;
      border-radius: 50px;
      font-family: Noto Sans TC;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      color: #ffffff;
      line-height: 26px;
      cursor: pointer;
    }
  }
}
</style>

<script>
import Navbar from "./../components/Navbar";
import {
  keepUnauthorizedOut,
  roleAccessControl,
  Toast,
} from "./../utils/helpers";
import user from "./../api/user";

const getUserId = () => localStorage.getItem("user");

export default {
  name: "Setting",
  components: {
    Navbar,
  },
  data() {
    return {
      userData: {},
      account: "",
      name: "",
      email: "",
      password: "",
      checkPassword: "",
    };
  },
  methods: {
    async getEditUser() {
      try {
        const response = await user.getUserInfo(getUserId());

        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }

        console.log("Edit User");
        console.log(response);
        this.userData = { ...response.data };
        this.account = this.userData.account;
        this.name = this.userData.name;
        this.email = this.userData.email;
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: "伺服器忙碌中，請重新整理頁面",
        });
        console.log("error", error.response || error);
      }
    },
    async putEditUser() {
      const data = {
        account: this.account,
        name: this.name,
        email: this.email,
      };

      // 檢查是否包含 whitespace
      if (this.password.includes(" ")) {
        return Toast.fire({
          icon: "warning",
          position: "top",
          title: "不接受空白鍵",
        });
      }

      // 檢查兩次密碼是否相同
      if (this.password !== this.checkPassword) {
        return Toast.fire({
          icon: "warning",
          title: "密碼 與 密碼確認 請輸入相同組合",
        });
      }
      // 避免送出空的 password
      if (this.password.length !== 0 && this.checkPassword.length !== 0) {
        // 有輸入新密碼且符合標準時才在 data 裡面加入 password property
        data.password = this.password;
        data.checkPassword = this.checkPassword;
      }

      try {
        const response = await user.putEditUser(getUserId(), data);

        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }

        Toast.fire({
          icon: "success",
          position: "top",
          title: "資料更改成功",
        });

        this.getEditUser();
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: "伺服器忙碌中，請稍後再試",
        });
        console.log("error", error.response || error);
      }
    },
  },
  created() {
    keepUnauthorizedOut(this);
    roleAccessControl(this, "8347");
    this.getEditUser();
  },
};
</script>
