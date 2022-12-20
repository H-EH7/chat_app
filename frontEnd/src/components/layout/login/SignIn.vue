<template>
  <div class="sign-in">
    <div class="form-container">
      <label for="id">ID: </label>
      <input id="id" type="text" v-model="id" />
    </div>
    <div class="form-container">
      <label for="pw">PW: </label>
      <input id="pw" type="password" v-model="pw" />
    </div>
    <div class="form-container">
      <button @click="logIn">Log-In</button> | <button @click="goSignUp">Sign-Up</button>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["changeSignMode"],
  data() {
    return {
      id: "",
      pw: "",
    };
  },
  methods: {
    async logIn() {
      const response = await fetch(`http://localhost:3000/user/login`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          id: this.id,
          pwd: this.pw,
        }),
      });

      this.$router.push("/main");
    },
    goSignUp() {
      this.$emit("changeSignMode");
    },
  },
};
</script>

<style scoped>
.sign-in {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10%;
}

.form-container {
  margin: 3% 0;
}
</style>
