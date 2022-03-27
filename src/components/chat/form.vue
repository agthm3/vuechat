<template>
  <form class="d-flex chat-form">
    <div class="alert alert-danger">{{ error }}</div>
    <input
      type="text"
      placeholder="Tulis pesan anda..."
      class="form-control rounded-0"
      v-model="message"
      required
      @keypress.enter.prevent="handleSubmit"
    />
    <button
      class="btn btn-primaruy rounded-0"
      type="submit"
      @click.prevent="handleSubmit"
    >
      <i class="fas fa-paper-plane"></i>
    </button>
  </form>
</template>

<script>
import { ref } from "vue";
import useCollection from "../../composable/useCollection";
import { timestamp } from "../../config/firebase";

export default {
  setup() {
    const message = ref("");
    const { error, storeDoc } = useCollection("message");

    const handleSubmit = async () => {
      const chat = {
        name: "Halil",
        message: message.value,
        createdAt: timestamp(),
      };

      await storeDoc(chat);
      if (!error.value) {
        message.value = "";
      }
    };

    return { message, handleSubmit, error };
  },
};
</script>

<style></style>
