<template>
  <div class="container">
    <div class="navbar">
      <div class="navbar__burger" @click="showBurger"></div>
      <div>
        <img class="navbar__logo" src="@/components/img/startPage/logo.svg" />
      </div>
    </div>
    <MyBurger v-model:showBurg="isBurgerVisible"></MyBurger>
    <div class="content">
      <h1>Список команд</h1>
      <div class="tabHeader">
        <div class="tab-column">Ранг</div>
        <div class="tab-column">Название команды</div>
        <div class="tab-column">Рейтинг</div>
        <div class="tab-column">Победы</div>
        <div class="tab-column">Проигрыши</div>
      </div>
      <TeamList v-if="!isPostsLoading" :teams="teams"></TeamList>
      <div v-else>Загрузка</div>
      <div class="loadmore">
        <MyRouterButton class="loadMore" @click="loadMoreTeams">
          Загрузить еще</MyRouterButton
        >
      </div>
    </div>
    <footer class="footer">
      <div class="footer__content">
        <div class="footer__text">2022© OpenDota</div>
        <div>
          <nav>
            <a href="" class="footer__text nav">О нас</a
            ><a href="" class="footer__text nav">Политика конфидициальности</a
            ><a href="" class="footer__text nav">Документация API</a>
          </nav>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import MyRouterButton from "@/components/UI/MyRouterButton.vue";
import TeamList from "@/components/TeamList.vue";
import axios from "axios";
import MyBurger from "@/components/UI/MyBurger.vue";
export default {
  data() {
    return {
      isBurgerVisible: false,
      teams: [],
      posts: [],
      isPostsLoading: false,
    };
  },
  methods: {
    fetchTeams() {
      try {
        this.isPostsLoading = true;
        setTimeout(async () => {
          this.isPostsLoading = false;
          const response = await axios.get(
            "https://api.opendota.com/api/teams"
          );
          this.posts = response.data;

          for (let i = 0; i < this.posts.length; i++) {
            if (this.teams.length < 10) {
              this.teams.push(this.posts[i]);
              this.posts.shift(this.posts[i]);
            }
          }
          return this.teams, this.postOne;
        }, 1000);
      } catch (e) {
        alert("Ошибка");
      }
    },
    loadMoreTeams() {
      for (let i = 0; i < this.posts.length; i++) {
        this.teams.push(this.posts[i]);
      }
    },
    showBurger(){
      this.isBurgerVisible = true;
    }
  },
  mounted() {
    this.fetchTeams();
  },
  computed: {},
  components: { MyRouterButton, TeamList, MyBurger },
};
</script>

<style  scoped>
.container {
  margin-left: 22px;
}
.content {
  margin-left: 270px;
  margin-right: 270px;
}
.navbar {
  padding: 20px;
  display: flex;
}

.navbar__burger {
  position: relative;
  display: inline-block;
  margin-top: 5px;
  width: 20px;
  height: 1px;
  padding-top: 3px;
  border-top: 0.2em solid #fffbfb;
  border-bottom: 0.2em solid #fffcfc;
  text-shadow: 0 1px 0 #151414;
}

.navbar__burger:before {
  content: "";
  position: absolute;
  top: 0.7em;
  left: 0px;
  width: 100%;
  border-top: 0.2em solid #f7efef;
}
.navbar__logo {
  width: 190px;
  height: 32px;
  margin-left: 20px;
}
h1 {
  margin-top: 0;
  padding-top: 128px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  /* identical to box height */

  text-transform: uppercase;

  background: linear-gradient(268.55deg, #ebc1ff 0%, #e0d8ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  text-shadow: 0px 8px 16px rgba(16, 0, 37, 0.15);
}
.tabHeader {
  background: #301070;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
}
.tab-column {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  white-space: nowrap;
  margin: 20px 0px 20px 30px;
  padding-right: 20px;
  color: #ffffff;
}
.tab-column:last-child{
  padding-right: 50px;
}
.footer {
  background: rgba(16, 0, 37);

  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
}
.footer__content {
  padding: 25px 80px 25px 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.footer__text {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: #e0d8ff;
}
.nav:not(:last-child) {
  margin-right: 40px;
}
.loadMore {
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: 480px;
}
</style>