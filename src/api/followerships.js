import { apiHelper } from "./../utils/helpers";
const getToken = () => localStorage.getItem("token");

export default {
  following() {
    // TODO 應帶有id去判別追蹤哪一個follower
    return apiHelper.post(`/api/followships`, null, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
  unfollowing(followerId) {
    return apiHelper.delete(`/api/followships/${followerId}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
};
