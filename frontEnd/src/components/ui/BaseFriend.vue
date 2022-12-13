<template>
  <div class="base-friend">
    <div class="profile-pic">PIC</div>
    <div class="preview">
      <div>NAME</div>
      <div>STATE MESSAGE</div>
    </div>
  </div>
</template>

<style scoped>
.base-friend {
  height: 10%;
  background-color: white;
  display: flex;
  justify-content: flex-start;
}

.base-friend:hover {
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
