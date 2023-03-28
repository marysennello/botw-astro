
<template>
  <div class="headernav">
  <!--head for importing google fonts-->
    <head>
      <!--google fonts-->
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Noto+Serif:wght@400;700&family=Rufina:wght@700&family=Syne:wght@400;500;600&display=swap" rel="stylesheet">
    </head>

  <!--header and nav for every page-->
  <header id="header">
    <div class="header-container">
      <div class="header">
        <h1 class="text-center">Hyrulian Astrology</h1>
      </div>
    </div>
  </header>

  <nav class="navbar navbar-expand-lg">
    <!--hamburger toggle button to reveal nav on small screens-->
    <button class="btn bg-light btn-light navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0 container">
        <li class="nav-item active">
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/about">About</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/hyrule-regions">Regions of Hyrule</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/champion-elements">Hyrule's Champions</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/monster-astro">Monster Astrology</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</div>
</template>

<script>

export default {
  name: 'HeaderNav',
  //components: {
  //  HelloWorld
  //},
  data (){
    return {
    show: true,
    }
  }
}


</script>

<style>

</style>