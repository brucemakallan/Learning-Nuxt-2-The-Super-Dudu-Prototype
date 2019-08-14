<template>
  <div class="homepage">
    <h1>Homepage</h1>
    <div>{{ product.title }}</div>
    <div>
      <font-awesome-icon :icon="['fab', 'facebook']" />
      <font-awesome-icon :icon="['fas', 'coffee']" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: "Homepage",
  computed: {
    ...mapGetters({
      products: "products/products",
      product: "products/product"
    })
  },
  mounted() {
    this.showWelcomeMessage()
  },
  methods: {

  },
  notifications: {
    showWelcomeMessage: {
      title: 'Page Mounted',
      message: 'Testing notifications',
      type: 'success',
      timeout: 3000
    }
  },
}
</script>

<style>
</style>
