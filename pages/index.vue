<template>
  <div class="page homepage">
    <h1>Homepage</h1>
    <div>{{ product.title }}</div>
    <nuxt-link to="/about">
      About
    </nuxt-link>
    <div class="icons">
      <font-awesome-icon :icon="['fab', 'facebook']" />
      <font-awesome-icon :icon="['fas', 'coffee']" />
      <CssLoader />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import CssLoader from '../components/CssLoader'

export default {
  name: "Homepage",

  components: {
    CssLoader
  },

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
  }
}
</script>

<style lang="scss" scoped>
</style>

