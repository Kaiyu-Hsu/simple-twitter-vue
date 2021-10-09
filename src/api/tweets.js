import { apiHelper } from "../utils/helpers";
const token = () => localStorage.getItem("token");

export const tweets = {
  getTweets() {
    return apiHelper.get("api/tweets", {
      headers: { Authorization: `Bearer ${token()}` },
    });
  },
  getReply(id) {
    return apiHelper.get(`api/tweets/${id}/replies`, {
      headers: { Authorization: `Bearer ${token()}` },
    });
  },
  postTweets(description) {
    return apiHelper.post(
      "api/tweets",
      {
        description, // req.body.description
      },
      {
        headers: { Authorization: `Bearer ${token()}` },
      }
    );
  },
  postReply(id) {
    return apiHelper.post(`api/tweets/${id}/replies`, {
      headers: { Authorization: `Bearer ${token()}` },
    });
  },
  postLike(tweetId, userId) {
    return apiHelper.post(
      `api/tweets/${tweetId}/like`,
      { userId },
      {
        headers: { Authorization: `Bearer ${token()}` },
      }
    );
  },
  postUnlike(tweetId, userId) {
    return apiHelper.post(
      `api/tweets/${tweetId}/unlike`,
      { userId },
      {
        headers: { Authorization: `Bearer ${token()}` },
      }
    );
  },
};
