<template>
  <div>
    <h2>Your Shopping Cart</h2>
    <h3 v-if="cart.length === 0">Cart is empty</h3>
    <ul>
      <CartItem v-for="i in cart" v-bind:key="i.id" v-bind:item="i" />
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CartItem from "../components/CartItem";

export default {
  name: "Cart",
  components: { CartItem },
  computed: mapState({
    cart: (state) => state.cart,
  }),
};
</script>

<style scoped>
div {
  display: flex;
  flex: 1;
  flex-direction: column;
}
ul {
  display: flex;
  flex: 1;
  flex-direction: column;
  list-style-type: none;
  padding: 16px 8px;
}
</style>
