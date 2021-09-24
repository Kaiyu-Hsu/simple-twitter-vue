<template>
  <div class="container">
    <Navbar />
    <h1>Private Message!!</h1>
  </div>
</template>

<style lang="scss" scoped>
.container {
  position: absolute;
  left: 378px;
  height: 100%;
  bottom: 0px;
  border-left: 1px solid #e6ecf0;
}
</style>

<script>
import Navbar from "./../components/Navbar";
export default {
  name: "PrivateMessage",
  components: {
    Navbar,
  },
};
</script>
