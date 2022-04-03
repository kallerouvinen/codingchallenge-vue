import { createApp } from 'vue';
import { createStore } from "vuex";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import ShoppingCart from "./routes/ShoppingCart.vue";
import ProductDetails from "./routes/ProductDetails";
import ProductList from "./routes/ProductList";

const routes = [
  { name: "ProductList", path: "/", component: ProductList },
  {
    name: "ProductDetails",
    path: "/product/:id",
    component: ProductDetails,
  },
  { name: "ShoppingCart", path: "/cart", component: ShoppingCart },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const store = createStore({
  state: {
    cart: [],
  },
  mutations: {
    addToCart(state, item) {
      state.cart.push(item);
    },
    deleteFromCart(state, id) {
      const index = state.cart.findIndex((i) => i.id === id);
      state.cart.splice(index, 1);
    },
  },
});

const app = createApp(App);

app.use(store);
app.use(router);
app.config.productionTip = false;

app.mount("#app");
