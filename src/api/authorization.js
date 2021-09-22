// import { apiHelper } from '../utils/helpers';
import axios from 'axios'

export default {
  signIn({ email, password }) {
    // 這裡 return 的會是一個 Promise
    return axios.post("http://localhost:3000/api/signin", {
      email,
      password,
    });
  },
};
