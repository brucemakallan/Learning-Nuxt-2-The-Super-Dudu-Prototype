<template>
  <div class="_404-page">
    <div v-if="error.statusCode === 404">
      <h1>😬 Oops! Page Not Found</h1>
    </div>
    <div v-else>
      <h1>An error occurred</h1>
      <h2>{{ error.message }}</h2>
    </div>
    <nuxt-link to="/">
      <button class="btn btn-primary">
        Back to Homepage
      </button>
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

<style scoped>
._404-page {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: linear-gradient(177deg, rgba(122, 122, 122, 0.05) 0%, rgba(122, 122, 122, 0.05) 40%,rgba(64, 64, 64, 0.05) 40%, rgba(64, 64, 64, 0.05) 100%),
  linear-gradient(300deg, rgba(200, 200, 200, 0.1) 0%, rgba(200, 200, 200, 0.1) 62%,rgba(39, 39, 39, 0.1) 62%, rgba(39, 39, 39, 0.1) 100%),
  linear-gradient(28deg, rgba(243, 243, 243, 0.01) 0%, rgba(243, 243, 243, 0.01) 58%,rgba(154, 154, 154, 0.01) 58%, rgba(154, 154, 154, 0.01) 100%),
  linear-gradient(318deg, rgba(136, 136, 136, 0.04) 0%, rgba(136, 136, 136, 0.04) 58%,rgba(205, 205, 205, 0.04) 58%, rgba(205, 205, 205, 0.04) 100%),
  linear-gradient(297deg, rgba(240, 240, 240, 0.09) 0%, rgba(240, 240, 240, 0.09) 53%,rgba(146, 146, 146, 0.09) 53%, rgba(146, 146, 146, 0.09) 100%),
  linear-gradient(10deg, rgba(19, 19, 19, 0.1) 0%, rgba(19, 19, 19, 0.1) 18%,rgba(125, 125, 125, 0.1) 18%, rgba(125, 125, 125, 0.1) 100%),
  linear-gradient(84deg, rgba(146, 146, 146, 0.08) 0%, rgba(146, 146, 146, 0.08) 10%,rgba(123, 123, 123, 0.08) 10%, rgba(123, 123, 123, 0.08) 100%),
  linear-gradient(90deg, rgb(144, 202, 249),rgb(245, 222, 179));
}
</style>
