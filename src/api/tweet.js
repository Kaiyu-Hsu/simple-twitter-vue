import { apiHelper } from "../utils/helpers";

// const reqInterceptor = () => {
//   // axios 攔截器觀察 requset 內容
//   apiHelper.interceptors.request.use((req) => {
//     console.log(`${req.method} ${req.url}`);
//     // Important: request interceptors **must** return the request.
//     return req;
//   });
// };

export const tweet = {
  getTweet(id) {
    const token = JSON.parse(localStorage.getItem("token"))

    // 這裡 return 的會是一個 Promise
    return apiHelper.get(`api/tweets/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  getCurrentUser(id) {
    
    return apiHelper.get(`api/users/${id}/userInfo`)
  }
};
