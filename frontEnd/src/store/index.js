import { createStore } from "vuex";

import chatMoudle from "./chat/index.js";

const store = createStore({
  modules: { chat: chatMoudle },
  state() {
    return {
      userId: "",
      name: "",
      profilePic: "",
      friendsList: [],
      chatsList: [],
    };
  },
  getters: {},
  mutations: {},
  actions: {},
});

export default store;
