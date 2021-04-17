import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";

import App from "./App.vue";
import Cart from "./routes/Cart.vue";
import ProductDetails from "./routes/ProductDetails";
import ProductList from "./routes/ProductList";
import { items } from "./mockdata";

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(VueRouter);

const routes = [
  { path: "/", component: ProductList },
  { path: "/product", component: ProductDetails },
  { path: "/cart", component: Cart },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

const store = new Vuex.Store({
  state: {
    items,
  },
  mutations: {
    testMutation(state, item) {
      console.log(item);
    },
  },
});

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
