<template>
  <div class="base-chat" @dblclick="enterChat">
    <div class="profile-pic">PIC</div>
    <div class="chat-container">
      <div class="preview">
        <div>{{ name }}</div>
        <div>{{ message }}</div>
      </div>
      <div class="recent-time">2022-12-08</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pic: {
      type: URL,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  methods: {
    enterChat() {
      this.$router.push("/chat");
    },
  },
};
</script>

<style scoped>
.base-chat {
  height: 10%;
  background-color: white;
  display: flex;
  justify-content: flex-start;
}

.base-chat:hover {
  background-color: rgb(200, 200, 200);
}

.profile-pic {
  height: 100%;
  width: 10%;
  background-color: #798d9c;
  display: flex;
  justify-content: center;
  align-items: center;
}

.chat-container {
  height: 100%;
  width: 90%;
  display: flex;
}

.preview {
  height: 100%;
  width: 80%;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.recent-time {
  height: 100%;
  width: 20%;
  padding: 15px;
  text-align: end;
}
</style>
