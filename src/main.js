import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";

import App from "./App.vue";
import Cart from "./routes/Cart.vue";
import ProductDetails from "./routes/ProductDetails";
import ProductList from "./routes/ProductList";
import { generatePrice } from "./util";

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
    items: [],
  },
  mutations: {
    setItems(state, items) {
      items.forEach((i) => {
        i.price = generatePrice(i.title);
      });
      state.items = items;
    },
  },
});

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
