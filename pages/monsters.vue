<template>
  <div class="wrapper">

   <HeaderNav />

    <main class="main">
      <section>
        <h2 class="heading">Monsters of Hyrule</h2>
        <h3>Wow look I used an API to pull in all items of the Monsters! </h3>
        <h3>Click a monster to learn more about it. </h3>
      </section>
      <section class="container" v-if="monsters">
        <div class="container">
          <div class="row">
            
              <MonsterCard 
                v-for="monster of monsters.data"
                :key="monster.id"
                :monster="monster" >
                <MonsterCard />
                
              </MonsterCard>
             
          
          </div>
        </div>
      </section>
    </main>

    <FooterSection />

   
  </div>
</template>

<script>
import axios from 'axios'
import MonsterCard from '~/components/MonsterCard.vue'

export default {
  components: {
    MonsterCard ,    
  },
  
  data() {
    return {
      loading: true,
      monsters: null,
      errored: false,
      
    }
  },
  mounted () {
  axios
    .get('https://botw-compendium.herokuapp.com/api/v2/category/monsters')
    .then(response => this.monsters = response.data)
    .catch(error => {
      this.errored = true
    })
    .finally(() => this.loading = false)
  }
  
}
</script>

<style>

</style>

