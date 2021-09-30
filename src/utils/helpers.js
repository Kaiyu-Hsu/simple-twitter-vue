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

// 阻擋未登入的使用者透過修改網址進入特定頁面
export function keepUnauthorizedOut(VueComponet) {
  if (!localStorage.getItem("token")) {
    Toast.fire({
      icon: "warning",
      position: "top",
      title: "請先登入",
    });
    VueComponet.$router.push("/");
    throw "Please sign in first"
  }
}

// axios 攔截器觀察 requset 內容
apiHelper.interceptors.request.use((req) => {
  console.log(`${req.method} ${req.url}`);
  console.log(req);
  // Important: request interceptors **must** return the request.
  return req;
});
