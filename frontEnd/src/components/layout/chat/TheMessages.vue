<template>
  <div class="the-messages" ref="messageBox">
    <base-message mode="you">Hi</base-message>
    <base-message mode="me">Who are you?</base-message>
  </div>
</template>

<script>
// 스크롤 맨 밑으로 내리는 함수
const scrollToBottom = (messageBox) => {
  messageBox.scrollTop = messageBox.scrollHeight;
};

export default {
  // 스크롤 밑으로 내리기
  mounted() {
    scrollToBottom(this.$refs.messageBox);
  },
  updated() {
    scrollToBottom(this.$refs.messageBox);
  },
};
</script>

<style scoped>
.the-messages {
  position: fixed;
  top: 10%;
  left: 0;
  width: 100%;
  height: 70%;
  overflow: auto;
}
</style>
