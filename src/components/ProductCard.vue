<template>
  <router-link :to="{ name: 'ProductDetails', params: { id: $props.item.id } }">
    <li>
      <img v-bind:src="$props.item.thumbnailUrl" alt="" />
      <h4>{{ $props.item.title }}</h4>
      <h4>{{ $props.item.price.toFixed(2) }} €</h4>
    </li>
  </router-link>
</template>

<script>
// import { mapMutations } from "vuex";

export default {
  name: "ProductCard",
  props: {
    item: Object,
  },
  // methods: {
  //   ...mapMutations([""]), TODO
  // },
};
</script>

<style scoped>
a {
  cursor: pointer;
  text-decoration: none;
  transition: 0.1s all;
}
a:hover {
  transform: scale(1.05);
}
li {
  width: 200px;
  height: 300px;
  background-color: #fff;
  box-shadow: 0px 3px 16px 8px rgba(0, 0, 0, 0.2);
  margin: 16px;
  border-radius: 8px;
  overflow: hidden;
}
img {
  height: 200px;
  width: 200px;
}
h4 {
  text-align: left;
  padding: 0;
  margin: 16px;
  user-select: none;
}
</style>
