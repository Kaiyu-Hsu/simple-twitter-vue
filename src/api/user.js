import { apiHelper } from "../utils/helpers";

export default {
  getUserInfo(id) {
    const token = localStorage.getItem("token");

    return apiHelper.get(`api/users/${id}/userInfo`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  getEditUser(id) {
    const token = localStorage.getItem("token");

    return apiHelper.get(`api/users/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  putEditUser(id, body) {
    const token = localStorage.getItem("token");

    return apiHelper.put(`api/users/${id}`, body, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  getFollowers(id) {
    const token = localStorage.getItem("token");

    return apiHelper.get(`api/users/${id}/followers`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  getFollowings(id) {
    const token = localStorage.getItem("token");

    return apiHelper.get(`api/users/${id}/followings`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  getReplied(id) {
    const token = localStorage.getItem("token");

    return apiHelper.get(`api/users/${id}/replied_tweets`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  getPopular(id) {
    const token = localStorage.getItem("token");

    return apiHelper.get(`api/tweets/${id}/top10`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
};
