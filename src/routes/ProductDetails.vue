<template>
  <div class="container">
    <div v-if="loading" class="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="product" class="content">
      <h1>{{ product.title.split(" ").slice(0, 2).join(" ") }}</h1>
      <div class="grid-container">
        <div class="grid-item">
          <img v-bind:src="product.url" alt="" />
        </div>
        <div class="grid-item">
          <div class="price-container">
            <span class="price">{{ price.toFixed(2) }} €</span>
            <button v-on:click="addToCart(product)">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { generatePrice } from "../util";

export default {
  name: "ProductDetails",
  data() {
    return {
      error: null,
      loading: false,
      product: null,
    };
  },
  computed: {
    price: function () {
      return generatePrice(this.product?.title || "");
    },
  },
  created() {
    this.getProduct();
  },
  methods: {
    ...mapMutations(["addToCart"]),
    async getProduct() {
      this.error = null;
      this.product = null;
      this.loading = true;

      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/photos?albumId=1&id=${this.$route.params.id}`
        );
        const data = await response.json();
        if (data.length > 0) {
          this.product = data[0];
        }
      } catch (error) {
        this.error = error.response;
      }
      this.loading = false;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex: 1;
  flex-direction: column;
}
h1 {
  text-align: start;
  margin: 32px;
}
.grid-container {
  display: grid;
  grid-gap: 16px;
  align-items: center;
  margin: 32px;
}
.grid-item {
  display: inline-grid;
}
.price-container {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
}
.price {
  font-size: 24px;
  margin: 16px;
  font-weight: bold;
}
img {
  width: 100%;
  border-radius: 16px;
}
button {
  height: 48px;
  width: 192px;
  margin: 16px 0;
  border: none;
  border-radius: 48px;
  cursor: pointer;
  transition: 0.2s all;
  background: linear-gradient(to right, #cb356b, #bd3f32);
  color: #fff;
  font-size: 18px;
}
button:hover {
  transform: scale(1.05);
}
button:focus {
  outline: none;
}
@media (min-width: 600px) {
  .grid-container {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
