import axios from "axios";

export default {
  signIn({ account, password }) {
    // 這裡 return 的會是一個 Promise
    return axios.post("/signin", {
      account,
      password,
    });
  },
};
