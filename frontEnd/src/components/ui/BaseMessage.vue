<template>
  <div class="base-message" :class="mode">
    <div class="message-box">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.base-message {
  display: flex;
}

.message-box {
  overflow-wrap: break-word;
  border-radius: 10px;
  margin: 1% 2%;
  padding: 1rem;
  max-width: 47%;
}

.me {
  justify-content: flex-end;
}

.you {
  justify-content: flex-start;
}

.me .message-box {
  background-color: white;
}

.you .message-box {
  background-color: #d6d1c3;
}
</style>
