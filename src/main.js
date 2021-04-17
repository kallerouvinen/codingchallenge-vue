import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";

import App from "./App.vue";
import Cart from "./routes/Cart.vue";
import ProductDetails from "./routes/ProductDetails";
import ProductList from "./routes/ProductList";

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(VueRouter);

const routes = [
  { name: "ProductList", path: "/", component: ProductList },
  {
    name: "ProductDetails",
    path: "/product/:id",
    component: ProductDetails,
  },
  { name: "Cart", path: "/cart", component: Cart },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

const store = new Vuex.Store({
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

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
