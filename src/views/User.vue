<template>
  <div class="home">
    <Navbar />
    <div class="profile">
      <!-- ShowUser -->
      <ShowUser @open-edit-modal="openModal" />
      <!-- UserTabs -->
      <UserTabs />
      <!-- 推文 -->
      <router-view />
    </div>
    <!-- edit modal -->
    <UserEditModal v-if="isModalVisible" @close="closeModal" />
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
  z-index: -1;
}
</style>

<script>
import Popular from "./../components/popular";
import Navbar from "./../components/Navbar";
import ShowUser from "./../components/ShowUser";
import UserTabs from "./../components/UserTabs";
import UserEditModal from "../components/UserEditModal.vue";

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
      isModalVisible: false,
    };
  },
  methods: {
    openModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>
