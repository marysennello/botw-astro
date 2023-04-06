<template>
  <div id="app">

  <!--VIEWS ROUTED IN HERE-->
    <HomeView />

  </div>
</template>

<script>

export default {
  name: 'IndexPage',
    data (){
    return {
      title: 'Home',

    }//end return
  }, //end data
  head() {
      return {
        title: this.title,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: 'Home Page',
            name: 'The Legend of Zelda: Breath of the Wild Home Page',
            content: 'home page'
          }
        ]
      }
    },
}
</script>



<style>
@import "@/assets/css/style.css";

#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-wrap: wrap;
  align-content: stretch;
  justify-content: space-around;
  width: 100%;
}

  
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
