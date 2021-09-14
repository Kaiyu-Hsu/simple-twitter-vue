<template>
  <div class="home">
    <Navbar />
    <div class="setting">
      <header>帳戶設定</header>
      <div class="form-container">
        <form action="" id="profile-form"></form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.setting {
  position: absolute;
  left: 378px;
  height: 100%;
  border-left: 1px solid #e6ecf0;
}
</style>

<script>
import Navbar from "./../components/Navbar";

export default {
  name: "Setting",
  components: {
    Navbar,
  },
};
</script>
