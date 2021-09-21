<template>
  <div class="main">
    <AdminNavbar />

    <router-view />
    <!-- AdminList.vue -->
    <!-- AdminUsers.vue -->
  </div>
</template>

<style lang="scss" scoped>
.main {
  // border-left: 1px solid #e5e5e5;
  // border-right: 1px solid #e5e5e5;
  width: 80%;
  height: 100%;
  position: absolute;
  left: 27%;
  bottom: 0px;
}
</style>

<script>
import AdminNavbar from "./../components/AdminNavbar.vue";
export default {
  name: "AdminMain",
  components: {
    AdminNavbar,
  },
};
</script>
