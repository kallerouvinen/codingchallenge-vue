<template>
  <div id="app">
    <Header />
    <Container>
      <router-view></router-view>
    </Container>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Container from "./components/Container.vue";

export default {
  name: "App",
  components: {
    Header,
    Container,
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
