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
    // TODO
    return apiHelper.post(
      "api/tweets",
      {        
        description  // req.body.description        
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  },
  postReply(id) {
    apiHelper.post(`api/tweets/${id}/replies`, {});
  },
};
