import { apiHelper } from "../utils/helpers";

const getToken = () => localStorage.getItem("token");
const getUserId = () => localStorage.getItem("user");

export const tweet = {
  getTweet(id) {
    // 這裡 return 的會是一個 Promise
    return apiHelper.get(`api/tweets/${id}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  getCurrentUser() {
    return apiHelper.get(`api/users/${getUserId()}/userInfo`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  replyTweet(id, comment) {
    return apiHelper.post(
      `api/tweets/${id}/replies`,
      { comment },
      { headers: { Authorization: `Bearer ${getToken()}` } }
    );
  },
};
