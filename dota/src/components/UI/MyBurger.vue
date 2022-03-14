<template>
  <div class="burger" v-if="showBurg" @click.stop="hideBurger">
    <div class="burger__content" @click.stop>
      <ul>
        <li>На главную</li>
        <li>Список команд</li>
        <li>Список матчей</li>
        <li>Сравнение команд</li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        showBurg:{
            type:Boolean,
            default: false,
        }
    },
    methods: {
        hideBurger() {
            this.$emit("update:showBurg", false);
        },
    },
};
</script>

<style  scoped>
.burger {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.burger__content{
    background: #fff;
    width: 400px;
    height: 1000px;
}
</style>