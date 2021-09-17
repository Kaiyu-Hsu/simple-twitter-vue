<template>
  <div class="user-tabs">
    <div
      class="tweets"
      :class="{ active: $route.name == 'tweets' }"
      @click.stop.prevent="tweets"
    >
      推文
    </div>
    <div
      class="repliers"
      :class="{ active: $route.name == 'replied' }"
      @click.stop.prevent="replied"
    >
      推文與回覆
    </div>
    <div
      class="liked"
      :class="{ active: $route.name == 'likes' }"
      @click.stop.prevent="likes"
    >
      喜歡的內容
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user-tabs {
  border-bottom: 1px solid #e6ecf0;
  position: relative;
  top: 50px;
  display: flex;
  font-family: "Noto Sans TC", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  color: #657786;
  .tweets,
  .repliers,
  .liked {
    width: 130px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .active {
    border-bottom: 2px solid #ff6600;
    color: #ff6600;
  }
}
</style>

<script>
export default {
  methods: {
    tweets() {
      this.$router.push({ name: "tweets" });
    },
    replied() {
      this.$router.push({ name: "replied" });
    },
    likes() {
      this.$router.push({ name: "likes" });
    },
  },
};
</script>
