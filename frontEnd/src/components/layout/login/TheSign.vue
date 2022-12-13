<template>
  <div class="the-sign">
    <div class="container">
      <header>
        <h1>TITLE</h1>
      </header>
      <sign-in v-if="isSignIn" @changeSignMode="changeMode"></sign-in>
      <sign-up v-else @changeSignMode="changeMode"></sign-up>
    </div>
  </div>
</template>

<script>
import SignIn from "./SignIn.vue";
import SignUp from "./SignUp.vue";

export default {
  components: {
    SignIn,
    SignUp,
  },
  data() {
    return {
      mode: "sign-in",
    };
  },
  computed: {
    isSignIn() {
      return this.mode === "sign-in";
    },
  },
  methods: {
    changeMode() {
      if (this.isSignIn) {
        this.mode = "sign-up";
      } else {
        this.mode = "sign-in";
      }
    },
  },
};
</script>

<style scoped>
.the-sign {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  width: 50%;
  min-width: 400px;
  min-height: max-content;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: white;
  display: flex;
  flex-direction: column;
}

header {
  background-color: #455e58;
  color: white;
  width: 100%;
  padding: 1rem;
}

header h1 {
  margin: 0;
  text-align: center;
}
</style>
