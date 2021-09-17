<template>
  <div class="home">
    <Navbar />
    <div class="setting">
      <header>帳戶設定</header>
      <div class="form-container">
        <form action="" id="setting-form">
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
            <input type="text" v-model="passwordCheck" />
            <hr />
          </div>
        </form>
        <button type="submit" form="setting-form" @click="handleSubmit">
          儲存
        </button>
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

  .form-container {
    text-align: center;

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

export default {
  name: "Setting",
  components: {
    Navbar,
  },
  data() {
    return {
      // TODO 向後端要資料，這筆隨便寫的
      account: "@132",
      name: "BRTHBRDT",
      email: "srgvre@gmail.com",
      password: "gersybesybe",
      passwordCheck: "gersybesybe",
    };
  },
  methods: {
    handleSubmit() {
      if (this.password === this.passwordCheck) {
        const data = JSON.stringify({
          account: this.account,
          name: this.name,
          email: this.email,
          password: this.password,
        });
        // TODO: 向後端修改使用者帳號
        console.log("data", data);
      } else {
        window.alert('"密碼"與"密碼確認"欄位的資料不一致，請維持一致喔!');
      }
    },
  },
};
</script>
