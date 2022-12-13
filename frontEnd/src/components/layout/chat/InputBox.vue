<template>
  <div class="input-container">
    <textarea></textarea>
    <button>SEND</button>
  </div>
</template>

<style scoped>
textarea {
  border-radius: 10px;
  resize: none;
  margin: 1%;
  padding: 1rem;
  width: 89%;
  height: 90%;
}

button {
  border: none;
  border-radius: 10px;
  margin-right: 1%;
  width: 9%;
  height: 90%;
  background-color: #98aec1;
}

button:active {
  background-color: #798d9c;
}

.input-container {
  position: fixed;
  top: 80%;
  left: 0;
  width: 100%;
  height: 20%;
  background-color: white;
  display: flex;
  align-items: center;
}
</style>
