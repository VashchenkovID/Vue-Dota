<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style  >
body {
  margin: 0;

  background-position-y: 0;
  -webkit-background-size: cover;
  background-size: cover;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}

#app {
  background: linear-gradient(
      to bottom,
      rgba(16, 0, 37, 0.9) 0%,
      rgba(16, 0, 37, 0.9) 20%,
      rgba(23, 1, 53)
    )
    no-repeat;
  margin: 0;
  padding: 0;
  width: 100%;
}
</style>