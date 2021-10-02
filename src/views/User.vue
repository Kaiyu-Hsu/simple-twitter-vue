<template>
  <div class="user" v-show="!isLoading">
    <Navbar @new-post="fetchUser" />
    <div class="profile">
      <!-- ShowUser -->
      <ShowUser :initial-user="userData" @open-edit-modal="openModal" />
      <!-- UserTabs -->
      <UserTabs />
      <!-- 推文 -->
      <router-view :initial-user="userData" />
    </div>
    <!-- edit modal -->
    <UserEditModal
      :initial-user="userData"
      v-if="isModalVisible"
      @close="closeModal"
    />
    <Popular />
  </div>
</template>

<style lang="scss" scoped>
.profile {
  border-left: 1px solid #e5e5e5;
  border-right: 1px solid #e5e5e5;
  position: absolute;
  left: 27%;
  bottom: 0px;
  width: 42%;
  height: 100%;
}
</style>

<script>
import Popular from "./../components/Popular.vue";
import Navbar from "./../components/Navbar.vue";
import ShowUser from "./../components/ShowUser.vue";
import UserTabs from "./../components/UserTabs.vue";
import UserEditModal from "./../components/UserEditModal.vue";
import { keepUnauthorizedOut, Toast } from "./../utils/helpers";
import userAPI from "./../api/userProfile";

const getUserId = () => localStorage.getItem("user");

export default {
  name: "User",
  components: {
    Popular,
    Navbar,
    ShowUser,
    UserTabs,
    UserEditModal,
  },
  data() {
    return {
      userData: {},
      isModalVisible: false,
      isLoading: true,
    };
  },
  methods: {
    // user file
    async fetchUser() {
      try {
        const response = await userAPI.getUser(getUserId());

        // 取得 API 請求後的資料
        const { data } = response;

        if (response.statusText !== "OK") {
          throw new Error(data.message);
        }

        this.userData = data;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        console.log("error", error);
        Toast.fire({
          icon: "warning",
          title: "無法載入資料",
        });
      }
    },
    openModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
  created() {
    keepUnauthorizedOut(this);
    this.fetchUser();
  },
};
</script>
