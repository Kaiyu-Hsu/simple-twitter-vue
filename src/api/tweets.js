import { apiHelper } from "../utils/helpers";

export const tweets = {
  getTweets() {
    const token = localStorage.getItem("token");

    // 這裡 return 的會是一個 Promise
    return apiHelper.get("api/tweets", {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  getReply(id) {
    const token = localStorage.getItem("token");

    // 這裡 return 的會是一個 Promise
    return apiHelper.get(`api/tweets/${id}/replies`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  postTweets(id, description, paramsId) {
    const token = localStorage.getItem("token");
    // TODO
    return apiHelper.post(
      "api/tweets",
      {
        user: { id }, // user.id
        body: { description }, // body.comment
        params: { paramsId }, // params.id
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  },
  postReply(id) {
    apiHelper.post(`api/tweets/${id}/replies`, {});
  },
  postLike(id) {
    const token = localStorage.getItem("token");
    apiHelper.post(`api/tweets/${id}/like`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  postUnlike(id) {
    const token = localStorage.getItem("token");
    apiHelper.post(`api/tweets/${id}/unlike`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
};
