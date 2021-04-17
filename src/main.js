import Vue from "vue";
import Vuex from "vuex";

import App from "./App.vue";
import { items } from "./mockdata";

Vue.config.productionTip = false;
Vue.use(Vuex);

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
  store,
}).$mount("#app");
