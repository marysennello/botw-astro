<template>
  <div id="app">

  <!--VIEWS ROUTED IN HERE-->
    <HomeView />

  </div>
</template>

<script>

export default {
  name: 'IndexPage'
}
</script>



<style>
@import "@/assets/css/style.css";

#app {
  //font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  displaalign-content: stretch;
  justify-content: space-around;
  width: 100%;
}
y: flex;
  flex-wrap: wrap;
  
.headernav, footer, nav {
  width: 100%;
}

nav {
  padding: 30px;
  width: 100%;
}
nav a {
    color: #2c3e50;
  text-decoration: none;
  padding: 1em 2em;
}
a:hover {
  text-decoration: none;
  color: #fdffe0;
  font-weight: 500;
}
router-link-exact-active {
  color: #536f50;
}

</style>
