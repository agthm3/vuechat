<template>
  <div class="form-auth">
    <div v-if="showLogin">
      <Login @login="accessRoom" />
      <p>
        Belum punya akun?
        <a href="#" @click="showLogin = false">Buat akun</a>
      </p>
    </div>

    <div v-else>
      <Register @register="accessRoom" />
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
import { useRouter } from "vue-router";
export default {
  name: "Home",
  components: {
    Login,
    Register,
  },
  setup() {
    const showLogin = ref(true);
    const router = useRouter();

    const accessRoom = () => {
      router.push({ name: "Room" });
    };

    return { showLogin, accessRoom };
  },
};
</script>
