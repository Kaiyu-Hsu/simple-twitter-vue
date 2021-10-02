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
  postTweets(description) {
    const token = localStorage.getItem("token");

    return apiHelper.post(
      "api/tweets",
      {
        description: description.trim(), // req.body.description
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  },
  postReply(id) {
    const token = localStorage.getItem("token");
    return apiHelper.post(`api/tweets/${id}/replies`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  postLike(tweetId, userId) {
    const token = localStorage.getItem("token");
    return apiHelper.post(
      `api/tweets/${tweetId}/like`,
      { userId },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  },
  postUnlike(tweetId, userId) {
    const token = localStorage.getItem("token");
    return apiHelper.post(
      `api/tweets/${tweetId}/unlike`,
      { userId },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  },
};
