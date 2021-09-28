import { apiHelper } from "../utils/helpers";

export const tweet = {
  getTweet(id) {
    const token = localStorage.getItem("token");

    // 這裡 return 的會是一個 Promise
    return apiHelper.get(`api/tweets/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  getCurrentUser(id) {
    return apiHelper.get(`api/users/${id}/userInfo`);
  },
};
