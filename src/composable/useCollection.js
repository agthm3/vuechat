import { ref } from "vue";
import { projectFirestore } from "../config/firebase";

const useCollection = (collectin) => {
  const error = ref(null);

  const storeDoc = async (document) => {
    error.value = null;
    try {
      await projectFirestore.collection(collection).add(document);
    } catch (err) {
      console.error(err.message);
      error.value = "Could not send the message";
    }
  };

  return { error, storeDoc };
};

export default useCollection;
