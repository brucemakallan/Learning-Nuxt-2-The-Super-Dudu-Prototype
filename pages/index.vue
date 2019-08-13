<template>
  <div class="homepage">
    <h1>Homepage</h1>
    <div>{{ this.product.title }}</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Homepage",
  computed: {
    ...mapGetters({
      products: "products/products",
      product: "products/product"
    })
  }
};
</script>

<style>
</style>
