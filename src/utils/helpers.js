import axios from "axios";
import Swal from "sweetalert2";

//ruby route
// const baseURL = "https://ac-simple-twitter-api.herokuapp.com";

//rex route
const baseURL = "https://actwitter.herokuapp.com";

export const apiHelper = axios.create({
  baseURL,
});

export const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
});

// axios 攔截器觀察 requset 內容
apiHelper.interceptors.request.use((req) => {
  console.log(`${req.method} ${req.url}`);
  console.log(req);
  // Important: request interceptors **must** return the request.
  return req;
});
