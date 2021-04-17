<template>
  <header>
    <router-link to="/"><h3>Placeholder</h3></router-link>
    <router-link to="/cart">
      <img src="../assets/shopping-cart.svg" alt="" />
      {{ cartButtonLabel }}
    </router-link>
  </header>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Header",
  computed: mapState({
    cartButtonLabel: (state) =>
      state.cart.length > 0 ? `Cart (${state.cart.length})` : "Cart",
  }),
};
</script>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to right, #cb356b, #bd3f32);
  box-shadow: 0px 3px 8px 4px rgba(0, 0, 0, 0.2);
  padding: 16px;
}
a {
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
}
h3 {
  color: #fff;
  margin: 0;
}
img {
  margin-right: 8px;
}
</style>
