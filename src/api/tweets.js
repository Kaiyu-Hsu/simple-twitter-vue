import { apiHelper } from "../utils/helpers";

export const fetchData = {
  getTweets() {
    // 這裡 return 的會是一個 Promise
    return apiHelper.get("api/tweets");
  },
};
