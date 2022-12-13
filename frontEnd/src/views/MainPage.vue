<template>
  <div class="bg"></div>
  <the-title></the-title>
  <the-nav></the-nav>
  <router-view></router-view>
</template>

<script>
import TheTitle from "../components/layout/main/TheTitle.vue";
import TheNav from "../components/layout/main/TheNav.vue";

export default {
  components: {
    TheTitle,
    TheNav,
  },
};
</script>

<style scoped>
.bg {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #e0dbcd;
}
</style>
