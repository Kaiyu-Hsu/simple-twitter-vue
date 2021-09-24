import { apiHelper } from "./../utils/helpers";
const getToken = () => localStorage.getItem("token");

export default {
  getUser(userId) {
    return apiHelper.get(`/api/users/${userId}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  getTweets(userId) {
    return apiHelper.get(`/api/users/${userId}/tweets`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  getFollowings(userId) {
    return apiHelper.get(`/api/users/${userId}/followings`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  getFollowers(userId) {
    return apiHelper.get(`/api/users/${userId}/followers`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  getReplieds(userId) {
    return apiHelper.get(`/api/users/${userId}/replied_tweets`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  getLikes(userId) {
    return apiHelper.get(`/api/users/${userId}/likes`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  getProfile(userId) {
    return apiHelper.get(`/api/users/${userId}/profile`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  getInfo(userId) {
    return apiHelper.get(`/api/users/${userId}/userInfo`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  updataForm(userId, { formData }) {
    return apiHelper.put(`/api/users/${userId} `, formData, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
};
