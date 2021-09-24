import axios from "axios";

export default {
  signIn({ email, password }) {
    // ruby route
    // return axios.post(
    //   "https://ac-simple-twitter-api.herokuapp.com/api/signin",
    //   {
    //     email,
    //     password,
    //   }

    // rex route
    return axios.post("https://actwitter.herokuapp.com/api/signin", {
      email,
      password,
    });
  },
};
