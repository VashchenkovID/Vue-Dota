<template>
  <div>Команды</div>
  <button @click="fetchUsers">получить</button>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get(
          "https://api.opendota.com/api"
        );
        console.log("====================================");
        console.log(response);
        console.log("====================================");
      } catch (e) {
        alert("ошибка");
      }
    },
  },
};
</script>

<style  scoped>
</style>