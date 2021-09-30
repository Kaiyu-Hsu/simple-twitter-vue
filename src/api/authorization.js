import { apiHelper } from "../utils/helpers";

export default {
  signIn({ email, password }) {
    // 這裡 return 的會是一個 Promise
    return apiHelper.post("api/signin", {
      email,
      password,
    });
  },
  signUp({ formData }) {
    return apiHelper.post("api/users", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
  logOut() {
    const keysToRemove = ["token", "user"];

    keysToRemove.map((item) => localStorage.removeItem(item));
  },
};
