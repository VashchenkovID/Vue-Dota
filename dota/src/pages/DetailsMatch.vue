<template>
  <div>
    <div class="content">
      <header>
        <div class="navbar">
          <BurgerIcon @click="showBurger" />
          <div>
            <img
              class="navbar__logo"
              src="@/components/img/startPage/logo.svg"
            />
          </div>
          <MyBurger v-model:showBurg="isBurgerVisible"></MyBurger>
        </div>
      </header>
      <section class="title">
        <h1>Детальная информация матча</h1>
        <div class="title__content">
          <div class="header">
            <div class="win">
              <div class="win__team">
                <div class="team__logo"></div>
                <div class="team__winner">Победа radiant</div>
              </div>
            </div>
            <div class="kills-radiant">{{ details.radiant_score }}</div>
            <div class="all-draft">
              <div></div>
              <div class="time">{{ details.start_time }}</div>
              <div class="last-time">функция когда закончился</div>
            </div>
            <div class="kills-dire">{{ details.dire_score }}</div>
            <div class="match-in">
              <div class="info__icon">
                <ul>
                  <li>ID матча</li>
                  <li>{{ details.match_id }}</li>
                </ul>
              </div>
              <div class="info__icon">
                <ul>
                  <li>Регион</li>
                  <li>Russia</li>
                </ul>
              </div>
              <div class="info__icon">
                <ul>
                  <li>Навык</li>
                  <li>{{ leagueInfo.tier }}</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="warning">
            <div>logo</div>
            <div>
              Запись этого матча не может быть проанализирована, так как
              недоступна вся информация о матче
            </div>
          </div>
          <div class="buttons">
            <button>Анализ</button>
            <button>Загрузить запись</button>
          </div>
        </div>
      </section>
      <section class="table">
        <div class="table__header">
          <div>Radiant</div>
          <div>Статистика команды</div>
          <div>победители/проигравшие(реализовать по данным)</div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import BurgerIcon from "@/components/UI/BurgerIcon.vue";
import MyBurger from "@/components/UI/MyBurger.vue";

export default {
  data() {
    return {
      playersInfo: [],
      playersID: [],
      details: [],
      leagueInfo: [],
      isBurgerVisible: false,
    };
  },
  methods: {
    showBurger() {
      this.isBurgerVisible = true;
    },
  },
  mounted() {
    const detail = sessionStorage.getItem("detail");
    if (detail) {
      this.details = JSON.parse(detail);
      console.log(this.details);
      this.leagueInfo = this.details.league;
      this.playersInfo = this.details.players;
      console.log(this.playersInfo);
    }
  },
  components: { BurgerIcon, MyBurger },
};
</script>

<style  scoped>
h1 {
  text-align: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  /* identical to box height */

  text-transform: uppercase;
  color: #e0d8ff;
}
.content {
  padding: 30px;
}
.navbar {
  display: flex;
}

.navbar__logo {
  width: 190px;
  height: 32px;
  margin-left: 20px;
}
</style>