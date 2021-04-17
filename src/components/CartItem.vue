<template>
  <li>
    <img v-bind:src="$props.item.thumbnailUrl" alt="" />
    <div class="info-container">
      <div class="text-row">
        <router-link
          :to="{ name: 'ProductDetails', params: { id: $props.item.id } }"
        >
          <h4>{{ title }}</h4>
        </router-link>
        <h4>{{ price.toFixed(2) }} €</h4>
      </div>
      <div class="quantity-row">
        <button
          v-on:click="deleteFromCart($props.item.id)"
          class="delete-button"
        >
          Delete
        </button>
      </div>
    </div>
  </li>
</template>

<script>
import { mapMutations } from "vuex";
import { generatePrice } from "../util";

export default {
  name: "CartItem",
  props: {
    item: Object,
  },
  computed: {
    title: function () {
      return this.item.title.split(" ").slice(0, 2).join(" ");
    },
    price: function () {
      return generatePrice(this.item?.title || "");
    },
  },
  methods: {
    ...mapMutations(["deleteFromCart"]),
  },
};
</script>

<style scoped>
a {
  cursor: pointer;
  text-decoration: none;
  color: #000;
}
a:visited {
  color: #000;
}
li {
  display: flex;
  flex-direction: row;
  background-color: #fff;
  box-shadow: 0px 3px 8px 4px rgba(0, 0, 0, 0.1);
  margin: 16px;
  border-radius: 8px;
  overflow: hidden;
}
img {
  height: 100px;
  width: 100px;
}
.info-container {
  display: flex;
  flex: 1;
  flex-direction: column;
}
.text-row {
  display: flex;
  flex: 3;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.quantity-row {
  display: flex;
  flex: 2;
  flex-direction: row;
  padding-left: 8px;
}
h4 {
  text-align: left;
  padding: 0;
  margin: 16px;
  user-select: none;
}
.delete-button {
  border: none;
  cursor: pointer;
  background-color: #fff;
  color: #000;
}
.delete-button:hover {
  text-decoration: underline;
}
.delete-button:focus {
  outline: none;
}
</style>
