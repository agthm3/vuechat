<template>
  <div class="form-auth">
    <div v-if="showLogin">
      <Login />
      <p>
        Belum punya akun?
        <a href="#" @click="showLogin = false">Buat akun</a>
      </p>
    </div>

    <div v-else>
      <Register />
      <p>
        Sudah punya akun?
        <a href="#" @click="showLogin = true">Login disini</a>
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "../components/auth/login.vue";
import Register from "../components/auth/register.vue";
import { ref } from "vue";
export default {
  name: "Home",
  components: {
    Login,
    Register,
  },
  setup() {
    const showLogin = ref(true);

    return { showLogin };
  },
};
</script>
