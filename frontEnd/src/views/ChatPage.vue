<template>
  <div class="bg"></div>
  <chat-title></chat-title>
  <the-messages></the-messages>
  <input-box></input-box>
</template>

<script>
import TheMessages from "../components/layout/chat/TheMessages.vue";
import ChatTitle from "../components/layout/chat/ChatTitle.vue";
import InputBox from "../components/layout/chat/InputBox.vue";

export default {
  components: {
    TheMessages,
    ChatTitle,
    InputBox,
  },
};
</script>

<style scoped>
.bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #90a8a0;
}
</style>
