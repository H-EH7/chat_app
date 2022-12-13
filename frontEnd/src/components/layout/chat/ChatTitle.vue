<template>
  <div class="chat-title">
    <div class="profile-pic">PIC</div>
    <div class="title-container">
      <div>
        <div class="name">NAME</div>
        <div class="people-in-chat">2</div>
      </div>
      <button @click="back">Back</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // 뒤로가기
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
button {
  border: none;
  border-radius: 10px;
  margin: 0 1%;
  width: 10%;
  height: 50%;
  background-color: #98aec1;
}

button:active {
  background-color: #798d9c;
}

.chat-title {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 10%;
  background-color: #455e58;
  display: flex;
  align-items: center;
}

.profile-pic {
  height: 100%;
  width: 8%;
  background-color: #798d9c;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title-container {
  height: 100%;
  width: 92%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.name,
.people-in-chat {
  padding: 0.1rem 1rem;
}
</style>
