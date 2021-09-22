import { apiHelper } from "../utils/helpers";

export const fetchData = {
  getTweet(id) {
    // 這裡 return 的會是一個 Promise
    return apiHelper.get(`api/tweets/${id}`);
  },
  getCurrentUser(id) {
    return apiHelper.get(`api/users/${id}/userInfo`)
  }
};
