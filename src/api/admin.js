import { apiHelper } from "../utils/helpers";

export default {
  getAllTweets() {
    const token = JSON.parse(localStorage.getItem("token"));

    return apiHelper.get(`api/admin`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  getAllUsers() {
    const token = JSON.parse(localStorage.getItem("token"));

    return apiHelper.get(`api/admin/users`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
};
