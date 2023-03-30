
<template>
  <div class="headernav">
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
          <li v-for="page in pages"
            class="nav-item">
            <nuxt-link :to="page.route"> {{ page.title }}</nuxt-link>
          </li>
          <!-- insert page for the big 3 page when completed -->
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
    pages: [
      { title: 'Home',
        route: '/' 
      },
      { title: 'Monster Astrology',
      route: '/monster-astro' 
      },
      { title: 'Hyrule\'s Elemental Champions',
        route: '/champion-elements' 
      },
      { title: 'Equipment List',
      route: '/equipment' 
      },
      { title: 'Monster List',
      route: '/monsters' 
      },
    ]
    }
  }
}


</script>

<style>

</style>