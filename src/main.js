import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import * as firebase from "firebase/app";

import "./assets/app.css";

createApp(App).use(router).mount("#app");
firebase.initializeApp({
  apiKey: "AIzaSyBy1rmTwdjq0eUYxp7OWbcARryEms1oC1E",
  authDomain: "vuechat-253d1.firebaseapp.com",
  projectId: "vuechat-253d1",
  storageBucket: "vuechat-253d1.appspot.com",
  messagingSenderId: "224694267988",
  appId: "1:224694267988:web:250681515373ac8ecbfdc1",
  measurementId: "G-MXHF3D0GGV",
});
