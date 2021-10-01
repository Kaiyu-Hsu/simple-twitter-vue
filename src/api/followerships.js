import { apiHelper } from "./../utils/helpers";
const getToken = () => localStorage.getItem("token");

export default {
  following(id) {
    return apiHelper.post(
      `/api/followships`,
      { id },
      {
        headers: { Authorization: `Bearer ${getToken()}` },
      }
    );
  },
  unfollowing(followerId) {
    return apiHelper.delete(`/api/followships/${followerId}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
};
