<template>
  <div id="app">
    <router-link to="/">Go to Product View</router-link>
    <router-link to="/cart">Go to Cart</router-link>
    <router-link to="/product">Go to Product Details</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
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
