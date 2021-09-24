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
