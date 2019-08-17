<template>
  <nav class="navbar navbar-expand-lg">
    <nuxt-link to="/" class="navbar-brand">
      <img src="~/assets/images/logo.png" alt="Logo">
    </nuxt-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" />
    </button>
    <div id="navbarNavDropdown" class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <nuxt-link class="nav-link" to="/">
            Home <span class="sr-only">(current)</span>
          </nuxt-link>
        </li>
        <li class="nav-item dropdown">
          <nuxt-link id="navbarDropdownMenuLink" class="nav-link dropdown-toggle" to="/" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Categories
          </nuxt-link>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <nuxt-link class="dropdown-item" to="/">
              Electronics
            </nuxt-link>
            <nuxt-link class="dropdown-item" to="/">
              Fashion
            </nuxt-link>
            <nuxt-link class="dropdown-item" to="/">
              Home &amp; Kitchen
            </nuxt-link>
            <nuxt-link class="dropdown-item" to="/">
              For Kids
            </nuxt-link>
          </div>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/">
            Offers
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/">
            Trending
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/">
            Under $11
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/">
            Account
          </nuxt-link>
        </li>
      </ul>
    </div>
    <form class="form-inline">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
}
</script>

<style lang="scss" scoped>
.navbar {
  .navbar-brand img {
    height: 50px;
  }
  .nav-link {
    padding: 5px 20px;
  }
}
</style>

