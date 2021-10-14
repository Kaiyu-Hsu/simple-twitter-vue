import { apiHelper } from "../utils/helpers";

const getToken = () => localStorage.getItem("token");

export default {
  getAllTweets() {
    return apiHelper.get(`api/admin`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  getAllUsers() {
    return apiHelper.get(`api/admin/users`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  deleteTweet(id) {
    return apiHelper.delete(`api/admin/tweets/${id}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
};
