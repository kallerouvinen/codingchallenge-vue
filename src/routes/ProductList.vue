<template>
  <div>
    <h3 v-if="error">Oopsie! Something went wrong!</h3>
    <div class="skeleton" v-if="loading">
      <ProductCardSkeleton
        v-for="i in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
        v-bind:key="i.id"
      />
    </div>
    <ul v-if="items">
      <ProductCard v-for="i in items" v-bind:key="i.id" v-bind:item="i" />
    </ul>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import ProductCard from "../components/ProductCard.vue";
import ProductCardSkeleton from "../components/ProductCardSkeleton.vue";

export default {
  name: "ProductList",
  components: {
    ProductCard,
    ProductCardSkeleton,
  },
  computed: mapState({
    items: (state) => state.items,
  }),
  created() {
    this.getProducts();
  },
  data() {
    return {
      error: null,
      loading: false,
    };
  },
  methods: {
    ...mapMutations(["setItems"]),
    async getProducts() {
      this.error = null;
      this.loading = true;

      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos?albumId=1"
        );
        const data = await response.json();
        this.setItems(data);
      } catch (error) {
        this.error = error.response;
      }
      this.loading = false;
    },
  },
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
.skeleton {
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 16px 8px;
}
</style>
