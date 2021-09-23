import { apiHelper } from "../utils/helpers";

const reqInterceptor = () => {
  // axios 攔截器觀察 requset 內容
  apiHelper.interceptors.request.use((req) => {    
    console.log(`${req.method} ${req.url}`);
    // Important: request interceptors **must** return the request.
    return req;
  });
}

export const fetchData = {
  getTweets() {
    const token = localStorage.getItem("token");        

    reqInterceptor();
    // 這裡 return 的會是一個 Promise
    return apiHelper.get("api/tweets", {
      headers: { Authorization: `Bearer ${token}`}
    });
  },
  postTweets(id, description) {
    const token = localStorage.getItem("token");

    reqInterceptor()
    return apiHelper.post("api/tweets", {
      "user": {id},
      "body": {description}
    },
    {
      headers: { Authorization: `Bearer ${token}`},
    });
  }
};
