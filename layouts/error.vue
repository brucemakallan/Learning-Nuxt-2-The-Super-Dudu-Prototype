<template>
  <div class="_404-page">
    <div v-if="error.statusCode === 404">
      <h1>{{ error.message }}</h1>
    </div>
    <div v-else>
      <h1>An error occurred</h1>
      <h2>{{ error.message }}</h2>
    </div>
    <nuxt-link to="/">
      Homepage
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => ({
        statusCode: 404,
        message: 'Page not found'
      })
    }
  }
}
</script>

<style>

</style>
