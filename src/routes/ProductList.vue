<template>
  <ul>
    <ProductCard v-for="i in items" v-bind:key="i.id" v-bind:item="i" />
  </ul>
</template>

<script>
import { mapState } from "vuex";
import ProductCard from "../components/ProductCard.vue";

export default {
  name: "ProductList",
  components: {
    ProductCard,
  },
  computed: mapState({
    items: (state) => state.items,
  }),
};
</script>

<style scoped>
ul {
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 16px 8px;
}
</style>
