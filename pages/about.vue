<template>
  <div class="wrapper">
   <HeaderNav />
    <main class="main">
      <section>
        <h2 class="heading">Weapons of Hyrule</h2>
      </section>
      <section class="container" v-if="equipment">
        <div class="container">
          <div class="row">
            <card 
              v-for="item of equipment.data"
              :key="item.id"
              :item="item"
              >
              <card />
            </card>
          </div>
        </div>
      </section>

    </main>

    <FooterSection />

   
  </div>
</template>

<script>
import axios from 'axios'
import Card from '~/components/Card.vue'

export default {
  components: {
    Card
  },
  data() {
    return {
      loading: true,
      equipment: null,
      errored: false
    }
  },
  mounted () {
  axios
    .get('https://botw-compendium.herokuapp.com/api/v2/category/equipment')
    .then(response => this.equipment = response.data)
    .catch(error => {
      this.errored = true
    })
    .finally(() => this.loading = false)
  }
  
}
</script>

<style>
/*import "/assets/css/style.css"*/
/*
.container {
  min-height: 100vh;
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  flex-wrap: wrap;
}

.heading {
  text-align: center;
  font-size: 2rem;
  color: #555;
  margin: 2rem auto;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  /*display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}*/
</style>

