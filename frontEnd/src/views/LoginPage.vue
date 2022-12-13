<template>
  <div class="bg"></div>
  <the-sign></the-sign>
</template>

<script>
import TheSign from "../components/layout/login/TheSign.vue";

export default {
  components: {
    TheSign,
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
  background-color: #798d9c;
}
</style>
