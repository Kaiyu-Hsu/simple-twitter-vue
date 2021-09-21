<template>
  <div class="main">
    <!-- AdminNavbar.vue -->
    <AdminNavbar />
    <!-- AdminList.vue -->
    <!-- AdminUsers.vue -->
  </div>
</template>

<style lang="scss" scoped>
.main {
  width: 1440px;
  height: 1200px;
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
