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

  background: url(@/components/img/Image.jpg) no-repeat;
  background-position: top;
  background-size: 100%;
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
      rgba(16, 0, 37, 0.8) 100px,
      rgba(16, 0, 37) 47%,
      rgba(16, 0, 37)
    )
    no-repeat;
  margin: 0;
  padding: 0;
  width: 100%;
}
</style>