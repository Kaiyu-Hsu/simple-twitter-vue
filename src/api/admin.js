import { apiHelper } from "../utils/helpers";

export default {
  getAllTweets() {
    const token = localStorage.getItem("token");

    return apiHelper.get(`api/admin`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  getAllUsers() {
    const token = localStorage.getItem("token");

    return apiHelper.get(`api/admin/users`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
};
