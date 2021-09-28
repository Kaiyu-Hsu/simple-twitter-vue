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
            <input type="text" v-model="email" />
            <hr />
          </div>
          <div class="input-wrapper">
            <span>密碼</span>
            <input type="text" v-model="password" />
            <hr />
          </div>
          <div class="input-wrapper">
            <span>密碼確認</span>
            <input type="text" v-model="checkPassword" />
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
          // 取消預設style, 後續整合再透過reset.scss檔案取消瀏覽器預設style
          // 並且回來刪除 all: unset 這一行
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
      // 取消預設style, 後續整合再透過reset.scss檔案取消瀏覽器預設style
      // 並且回來刪除 all: unset 這一行
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
    }
  }
}
</style>

<script>
import Navbar from "./../components/Navbar";
import { Toast } from "./../utils/helpers";
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
      // TODO 向後端要資料，這筆隨便寫的
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
        const response = await user.getEditUser(getUserId());

        if (response.statusText !== "OK") {
          Toast.fire({
            icon: "warning",
            title: "伺服器忙碌中，請重新整理頁面",
          });
          throw new Error(response.statusText);
        }

        console.log("Edit User");
        console.log(response);
        this.userData = { ...response.data };
        this.account = this.userData.account;
        this.name = this.userData.name;
        this.email = this.userData.email;
      } catch (error) {
        console.log("error", error);
      }
    },
    async putEditUser() {
      const data = {
        account: this.account,
        name: this.name,
        email: this.email,
        password: this.password,
        checkPassword: this.checkPassword,
      };

      if (this.password !== this.checkPassword) {
        Toast.fire({
          icon: "warning",
          title: "密碼 與 密碼確認 請輸入相同組合",
        });
      }
      try {
        const response = await user.putEditUser(
          getUserId(),
          data
        );

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
        console.log("error", error);
      }
    },
  },
  created() {
    console.log(`created at Setting.vue`);
    this.getEditUser();
  },
};
</script>
