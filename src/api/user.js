import { apiHelper } from "../utils/helpers";

// const reqInterceptor = () => {
//   // axios 攔截器觀察 requset 內容
//   apiHelper.interceptors.request.use((req) => {
//     console.log(`${req.method} ${req.url}`);
//     // Important: request interceptors **must** return the request.
//     return req;
//   });
// };

export default {  
  getUserInfo(id) {
    
    return apiHelper.get(`api/users/${id}/userinfo`);
  },
  getEditUser(id) {
    const token = localStorage.getItem('token')
        
    return apiHelper.get(`api/users/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
  },
  putEditUser(id) {        
    return apiHelper.put(`api/users/${id}`, )
  },
  logOut() {
    
    return apiHelper.get("api/logout");
  },
  getFollowers(id) {
    const token = localStorage.getItem("token");
    
    return apiHelper.get(`api/users/${id}/followers`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  getReplied(id) {
    const token = localStorage.getItem("token");
        
    return apiHelper.get(`api/users/${id}/replied_tweets`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
};
