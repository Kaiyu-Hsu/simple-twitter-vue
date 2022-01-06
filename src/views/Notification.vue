<template>
  <div class="container">
    <Navbar />
    <div class="notification">
      <div class="tiltle">
        <span>通知</span>
      </div>
      <div>
        <div class="a-note">
          <img src="http://img.yao51.com/jiankangtuku/qnkswqwpy.jpeg" alt="" />
          <div class="note">John 有新的推文通知</div>
          <div class="content">
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
            cillum dolor. Voluptate exercitation incididunt aliquip deserunt
            reprehenderit elit laborum.
          </div>
        </div>
      </div>
    </div>
    <Popular />
    <!-- <Followers /> -->
  </div>
</template>

<style lang="scss" scoped>
.notification {
  width: 42%;
  position: absolute;
  left: 0px;
  height: 100%;
  margin-left: 27%;
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
  font-family: Noto Sans TC;
  font-style: normal;
  font-weight: bold;
  .tiltle {
    font-size: 18px;
    padding: 15px 0px 15px 15px;
    border-bottom: 1px solid #e6ecf0;
  }
  .a-note {
    border-bottom: 1px solid #e6ecf0;
    padding: 10px 15px;
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: #c4c4c4;
    }
    .note {
      margin: 5px 0px;
      font-weight: 500;
      font-size: 15px;
    }
    .content {
      color: #657786;
      font-weight: 500;
      font-size: 15px;
    }
  }
}
</style>

<script>
import Navbar from "./../components/Navbar.vue";
import Popular from "./../components/Popular";
// import Followers from "./../components/Followers.vue";
import { keepUnauthorizedOut, roleAccessControl } from "./../utils/helpers";

export default {
  name: "Notification",
  components: {
    Navbar,
    Popular,
    // Followers,
  },
  created() {
    keepUnauthorizedOut(this);
    roleAccessControl(this, "8347");
  },
};
</script>
