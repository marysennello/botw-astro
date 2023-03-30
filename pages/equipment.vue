<template>
  <div class="wrapper">

   <HeaderNav />

    <main class="main">
      <section>
        <h2 class="heading">Weapons of Hyrule</h2>
        <h3>Wow look I used an API to pull in all the weapons! </h3>
      </section>
      <section class="container" v-if="equipment">
        <div class="container">
          <div class="row">
            
              <card 
                v-for="item of equipment.data"
                :key="item.id"
                :item="item" >
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
    Card ,    
  },
  
  data() {
    return {
      loading: true,
      equipment: null,
      errored: false,
      
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

</style>

