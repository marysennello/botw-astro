<template>
  <div class="home">
    <main class="main">
      <section>
        <h2>Big 3 Monsters</h2>
        <!-- <h3>check out some cool tool tips in the footer</h3> -->
        <p class="lead p-intro"> content WIP </p>
        
      </section>
      <div class="container">
        <!-- SUN SIGN SELECT -->
        <div class="sign-select">
          <b-form-select id="sunsign">
            <b-form-select-option 
            v-for="sign in signs" 
            :key="sign.name" 
            :sign="sign"
            :value="sign.name" 
            v-model="selected"
            @:change="signSelected(event)">
              {{sign.name}}
            </b-form-select-option>
          </b-form-select>
          <div class="mt-3"><strong>{{ selected }}</strong> Sun</div>
        </div>

        <!-- MOON SIGN SELECT -->
        <div class="sign-select">
          <b-form-select id="sunsign" v-model="moonSelected" :options="options">
            <b-form-select-option 
            v-for="sign in signs" 
            :key="sign.name" 
            :sign="sign"
            :value="sign.name" 
            v-model="selected"
            @:change="signSelected(event)">
            {{sign.name}}</b-form-select-option>
          </b-form-select>
          <div class="mt-3"><strong>{{ moonSelected }} Moon</strong></div>
        </div>

        <!-- RISING SIGN SELECT -->
        <div class="sign-select">
          <b-form-select id="sunsign" v-model="risingSelected" :options="options">
            <b-form-select-option 
            v-for="sign in signs" 
            :key="sign.name" 
            :sign="sign"
            :value="sign.name" 
            v-model="selected"
            @:change="signSelected(event)">
              {{sign.name}}</b-form-select-option>
          </b-form-select>
          <div class="mt-3"><strong>{{ risingSelected }}</strong> Rising</div>
        </div>
      </div>
      <!-- END SELECTIONS -->
      <!-- buttons -->
      <!-- <p>
        <button class="calculate">What's in the stars?</button>
        <button class="natalChart">Wait - I don't know mine!</button>
        <button class="resetCalculate hidden">Reset</button>
      </p> -->
      <!-- Results Section -->

      <div id="resultsContainer" class="container sign-chosen-hidden">
        <div class="row">
          <!-- SUN SIGN RESULTS -->
          <div class="block">
            <h2>{{ sunSelected }}</h2>
            <h3>result</h3>
            <div class="sign-img">

            </div>
            <p class="zelda-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

            <p class="sign-description">
              <!--javascript to populate details about result-->
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <!-- MOON SIGN RESULTS -->
          <div class="block">
            <h2>example</h2>
            <h3>result</h3>
            <div class="sign-img">

            </div>
            <p class="zelda-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

            <p class="sign-description">
              <!--javascript to populate details about result-->
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <!-- RISING SIGN RESULTS -->
          <div class="block">
            <h2>example</h2>
            <h3>result</h3>
            <div class="sign-img">

            </div>
            <p class="zelda-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

            <p class="sign-description">
              <!--javascript to populate details about result-->
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>




      </div>

      
      <!-- Little korok activity -->
      <section>
       
        <div class="korok">
          <h4>
            <button class="korokbutton" v-on:click="show = !show">Examine?</button>
          </h4>
          <img v-if="show" src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda-hd/c/c3/KP_FairyDust.jpg?width=2240" class="korokpuzzle">
          <img v-else src="https://cdn.vox-cdn.com/thumbor/vFQLJ3ZDw2DYKmL54jvv1H0O_Pg=/0x0:1920x1080/1520x1013/filters:focal(807x387:1113x693):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/55337577/cover_1_0000_Layer_6.0.jpg" class="korokpuzzle">
        </div>
      </section>
      <!-- end little korok activity -->
    </main>
  </div>
</template>

<script>

import Star from "assets/imgs-etc/botw-star.png"

export default {
  name: 'HomeView',

  props: {
    name : String,
    sunImg : String,
    sunMonster : String,
    moonImg : String,
    moonMonster : String,
    risingImg : String,
    risingMonster : String,
    selected : String,
  },
 

  data (){
    return {
    show: true,
    
    //data for dropdown menus
    selected: null,
    signs:
      [
        {
          name : "Aries",
          sunImg : "fire-breath_lizalfos",
          sunMonster : "Fire-Breath Lizalfos",
          moonImg : "fire_keese",
          moonMonster : "Fire Keese",
          risingImg : "silver_bokoblin",
          risingMonster : "Silver Bokoblin",

        },
        {
          name : "Taurus",
          sunImg : "blue-maned_lynel",
          sunMonster : "Blue-Maned Lynel",
          moonImg : "stone_talus_(luminous)",
          moonMonster : "Stone Talus (Luminous)",
          risingImg : "chuchu",
          risingMonster : "Chuchu",
        },
        {
          name : "Gemini",
          sunImg : "electric_wizzrobe",
          sunMonster : "Electric Wizzrobe",
          moonImg : "yiga_footsoldier",
          moonMonster : "Yiga Footsoldier",
          risingImg : "guardian_scout_ii",
          risingMonster : "Guardian Scout II",
        },
        {
          name : "Cancer",
          sunImg : "naydra",
          sunMonster : "Naydra",
          moonImg : "treasure_octorok",
          moonMonster : "Treasure Octorok",
          risingImg : "ice-breath_lizalfos",
          risingMonster : "Ice-Breath Lizalfos",
        },
        {
          name : "Leo",
          sunImg : "white-maned_lynel",
          sunMonster : "White-Maned Lynel",
          moonImg : "meteo_wizzrobe",
          moonMonster : "Meteo Wizzrobe",
          risingImg : "electric_lizalfos",
          risingMonster : "Electric Lizalfos",
        },
        {
          name : "Virgo",
          sunImg : "guardian_stalker",
          sunMonster : "Guardian Stalker",
          moonImg : "lynel",
          moonMonster : "Lynel",
          risingImg : "forest_octorok",
          risingMonster : "Forest Octorok",
        },
        {
          name : "Libra",
          sunImg : "blue_lizalfos",
          sunMonster : "Blue Lizalfos",
          moonImg : "yiga_blademaster",
          moonMonster : "Yiga Blademaster",
          risingImg : "stalkoblin",
          risingMonster : "Stalkoblin",
        },
        {
          name : "Scorpio",
          sunImg : "blizzrobe",
          sunMonster : "Blizzrobe",
          moonImg : "decayed_guardian",
          moonMonster : "Decayed Guardian",
          risingImg : "water_octorok",
          risingMonster : "Water Octorok",
        },
        {
          name : "Sagittarius",
          sunImg : "guardian_scout_iii",
          sunMonster : "Guardian Scout III",
          moonImg : "guardian_scout_i",
          moonMonster : "Guardian Scout",
          risingImg : "silver_lizalfos",
          risingMonster : "Silver Lizalfos",
        },
        {
          name : "Capricorn",
          sunImg : "black_moblin",
          sunMonster : "Black Moblin",
          moonImg : "stone_talus",
          moonMonster : "Stone Talus",
          risingImg : "guardian_turret",
          risingMonster : "Guardian Turret",
        },
        {
          name : "Aquarius",
          sunImg : "guardian_skywatcher",
          sunMonster : "Guardian Sky Watcher",
          moonImg : "blue_bokoblin",
          moonMonster : "Blue Bokoblin",
          risingImg : "silver_moblin",
          risingMonster : "Silver Moblin",
        },
        {
          name : "Pisces",
          sunImg : "lizalfos",
          sunMonster : "Lizalfos",
          moonImg : "hinox",
          moonMonster : "Hinox",
          risingImg : "ice_chuchu",
          risingMonster : "Ice Chuchu",
        },
        {
          name : "??",
          sunImg : Star,
          sunMonster : "??",
          moonImg : Star,
          moonMonster : "??",
          risingImg : Star,
          risingMonster :"??",

        }
      ]
    }
  },

  methods: {
    signSelected(event) {
      //console log value
      console.log(event.target.value)
      //change text of result
    }
  }
}


</script>


<style>
.korokpuzzle {
max-width: 80%;
border-radius: 50px;
}
.korokbutton {
color: black;
}
.korok {
  width: 50%;
  overflow: hidden;
  display: none;
  }
.container, .row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
}
.sign-select, .block {
  width: 30%;
  padding: 1rem;
  
}
</style>
