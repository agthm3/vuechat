<template>
  <Navbar />
  <main class="content mt-2 shadow-sm p-0">
    <div class="bg-secondary text-white">
      <h3 class="p-3">Chat Group</h3>
    </div>
    <div class="chat-wrapper">
      <Chatbox />
      <Chatform />
    </div>
  </main>
</template>

<script>
import Navbar from "../components/navbar.vue";
import Chatbox from "../components/chat/chatbox.vue";
import Chatform from "../components/chat/form.vue";
export default {
  components: {
    Navbar,
    Chatbox,
    Chatform,
  },
};
</script>

<style></style>
