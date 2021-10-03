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
  width: 70%;
  height: 100%;
  position: absolute;
  left: 30%;
  bottom: 0px;
}
</style>

<script>
import { keepUnauthorizedOut } from "../utils/helpers";
import AdminNavbar from "./../components/AdminNavbar.vue";

export default {
  name: "AdminMain",
  components: {
    AdminNavbar,
  },
  created() {
    keepUnauthorizedOut(this);
  },
};
</script>
