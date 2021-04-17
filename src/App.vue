<template>
  <div id="app">
    <Header />
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
html,
body {
  height: 100%;
}
body {
  margin: 0;
}
#app {
  display: flex;
  flex-direction: column;
  height: 100%;
  white-space: pre-line;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container {
  width: 100%;
  max-width: 1200px;
  align-self: center;
}
</style>
