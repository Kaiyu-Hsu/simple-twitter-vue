<template>
  <div class="home">
    <Navbar :initial-user="userData" />
    <div class="profile">
      <!-- ShowUser -->
      <ShowUser @open-edit-modal="openModal" />
      <!-- UserTabs -->
      <UserTabs />
      <!-- 推文 -->
      <router-view :initial-user="userData" />
    </div>
    <!-- edit modal -->
    <UserEditModal v-if="isModalVisible" @close="closeModal" />
    <Popular />
    <ReplyModal
      @open-reply-modal="openReplyModal"
      @close-reply-modal="closeReplyModal"
      :tweet-content="oneTweet"
      :initial-user="userData"
    />
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
import Popular from "./../components/Popular";
import Navbar from "./../components/Navbar";
import ShowUser from "./../components/ShowUser";
import UserTabs from "./../components/UserTabs";
import UserEditModal from "./../components/UserEditModal.vue";
import ReplyModal from "./../components/ReplyModal.vue"
import data from "../../public/api-users-id-v2.json";

export default {
  name: "User",
  components: {
    Popular,
    Navbar,
    ShowUser,
    UserTabs,
    UserEditModal,
    ReplyModal
  },
  data() {
    return {
      userData: {},
      userTweets: [],
      popular: [],
      isModalVisible: false,
      isReplyModalVisible: false,
    };
  },
  methods: {
    fetchData() {
      this.userData = {
        ...data,
        ...data.userData,
      };
      this.userTweets = [...data.userTweets];
      this.popular = [...data.popular];
    },
    openModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    openReplyModal() {
      this.isReplyModalVisible = true;
    },
    closeReplyModal() {
      this.isReplyModalVisible = false;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>
