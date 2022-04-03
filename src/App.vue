<template>
  <div id="app">
    <AppHeader />
    <AppContainer>
      <router-view></router-view>
    </AppContainer>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppContainer from "./components/AppContainer.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppContainer,
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
</style>
