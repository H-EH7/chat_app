<template>
  <div class="sign-up">
    <div class="form-container">
      <label for="new-id">ID</label>
      <input id="new-id" type="text" v-model="newId" />
    </div>
    <div class="form-container">
      <label for="new-pw">Password</label>
      <input id="new-pw" type="password" v-model="newPW" />
    </div>
    <div class="form-container">
      <label for="confirm-pw">Confirm Password</label>
      <input id="confirm-pw" type="password" v-model="confirmPW" />
    </div>
    <div class="form-container">
      <label for="new-name">Name</label>
      <input id="new-name" type="text" v-model="newName" />
    </div>
    <button @click="SignUp">Submit</button>
  </div>
</template>

<script>
export default {
  emits: ["changeSignMode"],
  data() {
    return {
      newId: "",
      newPW: "",
      confirmPW: "",
      newName: "",
    };
  },
  methods: {
    async SignUp() {
      if (this.newPW !== this.confirmPW) {
        alert("Please confirm your password!");
        return;
      }

      const newUser = {
        id: this.newId,
        pw: this.newPW,
        name: this.newName,
      };

      const response = await fetch(`https://chat-jit-default-rtdb.firebaseio.com/users/${this.newId}.json`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        return;
      }

      this.$emit("changeSignMode");
    },
  },
};
</script>

<style scoped>
button {
  width: 10rem;
  padding: 0.5rem;
  border: none;
  border-radius: 10px;
  margin-bottom: 3%;
  background-color: #98aec1;
}

button:active {
  background-color: #798d9c;
}

.sign-up {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10%;
}

.form-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 5%;
}
</style>
