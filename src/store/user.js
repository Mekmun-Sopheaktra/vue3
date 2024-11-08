import { defineStore } from 'pinia';
import { ref } from 'vue';
import users from '@/assets/json/users.json'; // Assuming it's inside the assets folder

export const useUserStore = defineStore('users', () => {
  const data = ref([]);

  const all = () => {
    data.value = users; // Directly assign static data
  };

  return {
    all,
    data,
  };
});
