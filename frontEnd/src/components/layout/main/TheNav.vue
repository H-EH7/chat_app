<template>
  <div class="nav-bar">
    <router-link to="/main/friendsList">FRIENDS LIST</router-link>
    <router-link to="/main/chatsList">CHATS LIST</router-link>
    <div class="button-container">
      <button @click="logOut">Log out</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logOut() {
      this.$router.replace("/login");
    },
  },
};
</script>

<style scoped>
.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 25%;
  height: 100%;
  background-color: #d6d1c3;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.button-container {
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}

a {
  width: 100%;
  height: 10%;
  border: none;
  padding: 0;
  color: black;
  background-color: #90a8a0;
  text-decoration: none;
  cursor: default;
  display: flex;
  align-items: center;
  justify-content: center;
}

a:hover,
.router-link-active {
  color: white;
  background-color: #62726d;
}

button {
  width: 80%;
  height: 10%;
  border: none;
  border-radius: 10px;
  margin-bottom: 5%;
  background-color: #98aec1;
}

button:active {
  background-color: #798d9c;
}
</style>
