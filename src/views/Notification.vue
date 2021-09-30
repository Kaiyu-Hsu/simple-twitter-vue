<template>
  <div class="container">
    <Navbar />
    <div class="notification">
      <div class="tiltle">
        <span>通知</span>
      </div>
      <div>
        <div class="a-note">
          <img src="" alt="" />
          <div class="note">John 有新的推文通知</div>
          <div class="content">
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
            cillum dolor. Voluptate exercitation incididunt aliquip deserunt
            reprehenderit elit laborum.
          </div>
        </div>
      </div>
    </div>
    <Followers />
  </div>
</template>

<style lang="scss" scoped>
.container {
  position: absolute;
  left: 378px;
  height: 100%;
  bottom: 0px;
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
  font-family: Noto Sans TC;
  font-style: normal;
  font-weight: bold;
  .notification {
    width: 600px;
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
}
</style>

<script>
import Navbar from "./../components/Navbar.vue";
import Followers from "./../components/Followers.vue";
import { keepUnauthorizedOut } from "./../utils/helpers";

export default {
  name: "Notification",
  components: {
    Navbar,
    Followers,
  },
  created() {
    keepUnauthorizedOut(this)
  }
};
</script>
