<template>
  <div>
    <h3 v-if="error">Oopsie! Something went wrong!</h3>
    <div class="skeleton" v-if="loading">
      <ProductCardSkeleton
        v-for="i in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
        v-bind:key="i.id"
      />
    </div>
    <ul v-if="products">
      <ProductCard v-for="i in products" v-bind:key="i.id" v-bind:item="i" />
    </ul>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import ProductCard from "../components/ProductCard.vue";
import ProductCardSkeleton from "../components/ProductCardSkeleton.vue";

export default {
  name: "ProductList",
  components: {
    ProductCard,
    ProductCardSkeleton,
  },
  created() {
    this.getProducts();
  },
  data() {
    return {
      error: null,
      loading: false,
      products: [],
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
        this.products = await response.json();
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
  display: grid;
  grid-gap: 32px;
  align-items: center;
  margin: 32px;
  list-style-type: none;
  padding: 0;
}
.skeleton {
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 16px 8px;
}
@media (min-width: 560px) {
  ul {
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 800px) {
  ul {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media (min-width: 1040px) {
  ul {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
</style>
