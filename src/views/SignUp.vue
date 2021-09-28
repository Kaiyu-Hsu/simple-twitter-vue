<template>
  <div class="container">
    <div class="header">
      <div class="svg-container">
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M30.6996 23.4709C30.6996 23.4709 23.2328 35.5781 17.1109 35.5781C6.40314 35.5781 16.3821 12.5132 24.1916 12.5132C29.641 12.5132 30.6996 23.4709 30.6996 23.4709Z"
            fill="#FF6600"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M39.5723 38.6972C37.4451 40.9607 34.8198 42.6976 31.9044 43.7701C28.989 44.8426 25.8639 45.2213 22.7767 44.8761C19.6895 44.5309 16.7252 43.4713 14.1188 41.7813C11.5125 40.0914 9.33573 37.8175 7.76123 35.1401C9.5314 37.5477 12.5338 39.1527 16.803 39.1527C27.3199 39.1527 33.2899 30.98 33.2899 30.98C33.2899 30.98 33.8062 37.4392 39.5593 38.6972H39.5723Z"
            fill="#FF6600"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M42.7223 15.7451C44.2963 18.7527 45.0781 22.1116 44.9939 25.505C44.9096 28.8984 43.9621 32.2144 42.2407 35.1401C40.8792 34.3764 39.8725 33.1082 39.4379 31.609L37.1558 24.7724L42.7223 15.7451Z"
            fill="#FF6600"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25.0031 5.01737C30.0185 5.01403 34.8513 6.89881 38.5398 10.2967L34.7521 16.4088C33.3811 12.843 30.5957 9.2729 25.1767 9.2729C14.0784 9.2729 5.85231 21.3888 5.85231 28.9846C5.84986 29.9669 5.97528 30.9454 6.22543 31.8953C5.11558 28.8725 4.75205 25.6265 5.16572 22.4331C5.57938 19.2398 6.75802 16.1934 8.60147 13.5531C10.4449 10.9127 12.8987 8.75634 15.7542 7.26726C18.6097 5.77818 21.7826 5.00039 25.0031 5V5.01737Z"
            fill="#FF6600"
          />
        </svg>
      </div>
      <span>建立你的帳號</span>
    </div>
    <div class="form-container">
      <form action="" id="sign-up-form" @submit.stop.prevent="signUp">
        <div class="input-wrapper">
          <span>帳號</span>
          <input
            type="text"
            name="account"
            v-model="account"
            @focus="focusInput"
          />
          <hr :class="{ 'now-focus': nowFocus === 'account' }" />
        </div>
        <div class="input-wrapper">
          <span>名稱</span>
          <input type="text" name="name" v-model="name" @focus="focusInput" />
          <hr :class="{ 'now-focus': nowFocus === 'name' }" />
        </div>
        <div class="input-wrapper">
          <span>Email</span>
          <input
            type="email"
            name="email"
            v-model="email"
            @focus="focusInput"
          />
          <hr :class="{ 'now-focus': nowFocus === 'email' }" />
        </div>
        <div class="input-wrapper">
          <span>密碼</span>
          <input
            type="password"
            name="password"
            v-model="password"
            @focus="focusInput"
          />
          <hr :class="{ 'now-focus': nowFocus === 'password' }" />
        </div>
        <div class="input-wrapper">
          <span>密碼確認</span>
          <input
            type="password"
            name="check-password"
            v-model="checkPassword"
            @focus="focusInput"
          />
          <hr :class="{ 'now-focus': nowFocus === 'password-check' }" />
        </div>
      </form>
      <button type="submit" form="sign-up-form" :disabled="isProcessing">
        註冊
      </button>
    </div>
    <div class="footer">
      <router-link class="cancel-sign-up" to="/signin">取消</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  .header {
    margin-bottom: 40px;
    margin-top: 65px;
    text-align: center;

    .svg-container {
      margin-bottom: 25px;
    }

    span {
      font-family: Noto Sans TC;
      font-style: normal;
      font-weight: bold;
      font-size: 23px;
      line-height: 33px;
      color: #1c1c1c;
    }
  }

  .form-container {
    text-align: center;

    #sign-up-form {
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
        // input focus 底下那條線的style
        .now-focus {
          background-color: #50b5ff;
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
      cursor: pointer;
    }
  }

  .footer {
    width: 540px;
    margin: 20px auto 475px auto;
    text-align: center;

    .cancel-sign-up {
      color: #0099ff;
      font-family: Noto Sans TC;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 26px;
    }
  }
}
</style>

<script>
import { apiHelper } from "./../utils/helpers";
import { Toast } from "./../utils/helpers";

export default {
  data() {
    return {
      account: "",
      name: "",
      email: "",
      password: "",
      checkPassword: "",
      isProcessing: false,
      nowFocus: "",
    };
  },
  methods: {
    focusInput(e) {
      this.nowFocus = e.target.name;
    },
    async signUp(e) {
      try {
        const form = e.target; // <form></form>
        const formData = new FormData(form);

        if (
          !this.account ||
          !this.password ||
          !this.name ||
          !this.email ||
          !this.checkPassword
        ) {
          Toast.fire({
            icon: "warning",
            title: "請填寫完整",
          });
          return;
        }

        if (this.password !== this.checkPassword) {
          Toast.fire({
            icon: "warning",
            title: "密碼與密碼確認欄位的資料不一致，請確認!",
          });
          return;
        }
        
        // TODO 要把資料傳向後端，不知道是否正確?
        const response = await apiHelper.post("api/users", formData);
        console.log("🚀 ~ file: SignUp.vue ~ line 252 ~ signUp ~ response", response)

        // 取得 API 請求後的資料
        const { data } = response;

        if (data !== "Accept") {
          throw new Error(data.message);
        }

        // 成功註冊後轉址到登入頁
        this.$router.push("/");
      } catch (error) {
        // 將密碼確認欄位清空
        this.checkPassword = "";
        Toast.fire({
          icon: "warning",
          title: "註冊失敗，請稍後再試",
        });
        console.log("error", error);
      }
    },
  },
};
</script>
