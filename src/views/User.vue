<template>
  <div class="home">
    <Navbar />
    <Popular />
  </div>
</template>

<script>
import Popular from "./../components/Popular";
import Navbar from "./../components/Navbar";

export default {
  name: "User",
  components: {
    Popular,
    Navbar,
  },
};
</script>
