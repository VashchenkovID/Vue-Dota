<template>
  <router-link class="link" to="/details"
    ><div class="container" @click="detailMatch">
      <div id="id">
        <div class="container__id">{{ match.match_id }}</div>
        <div class="container__start-time">{{ timeAfterMatch() }}</div>
      </div>
      <div class="column">
        {{ timeMatch() }}
      </div>

      <div class="radiant">{{ match.radiant_name }}</div>
      <div class="dire">{{ match.dire_name }}</div>
    </div></router-link
  >
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      detail: [],
    };
  },
  props: {
    match: {
      type: Object,
      required: true,
    },
  },
  methods: {
    detailMatch() {
      try {
        setTimeout(async () => {
          const response = await axios.get(
            `https://api.opendota.com/api/matches/${this.match.match_id}`
          );
          this.detail = response.data;
          sessionStorage.setItem("detail", JSON.stringify(this.detail));
        }, 10);
      } catch (e) {
        alert("Ошибка");
      }
    },
    timeAfterMatch() {
      const date = Date.now();
      let currentDate = this.match.start_time;
      let time = Math.ceil(-(currentDate - date));
      let hours = new Date(time).getHours();
      return `${hours} часов назад / immortal`;
    },
    timeMatch() {
      let currentDate = this.match.start_time;
      var minutes = new Date(currentDate).getMinutes();
      var seconds = new Date(currentDate).getSeconds();
      return `${minutes}:${seconds}`;
    },
    destruction() {
  
    },
  },
  mounted() {
    this.destruction();
  },
};
</script>

<style scoped>
.link {
  color: #e0d8ff;
}
.container {
  margin: 25px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
}
.column {
  margin-left: 48px;
}
#id {
  width: 205px;
}
.flex {
  display: flex;
  padding-left: 134px;
}
.container__id {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #bbdd00;
}
.container__start-time {
}
.radiant {
  margin-left: 180px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  color: #bbdd00;
  width: 200px;
}
.dire {
  margin-left: 230px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  color: #bbdd00;
}
</style>