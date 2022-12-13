import { createApp } from "vue";
import openSocket from "socket.io-client";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import BaseFriend from "./components/ui/BaseFriend.vue";
import BaseChat from "./components/ui/BaseChat.vue";
import BaseMessage from "./components/ui/BaseMessage.vue";

const app = createApp(App);

// openSocket("http://localhost:3000");

app.use(store);
app.use(router);

app.component("base-friend", BaseFriend);
app.component("base-chat", BaseChat);
app.component("base-message", BaseMessage);

app.mount("#app");
