<template>
  
  <div 
    class="col-lg col-md col-sm astro-grid" 
    @click="toggleShowHide"
    >

    <img 
    :src="monster.image" 
    :alt="monster.name" 
    class="card__img"
    >

    <h3 class="text-capitalize">{{ monster.name }}</h3>

    <!-- POPUP CONTENT: ALL ITEMS FROM BEFORE PLUS OTHER STATS -->
    <div class="popup" v-if="isHidden">
      <div class="popup-inner">
          <div class="popup-img">
            <img 
            :src="monster.image" 
            :alt="monster.name" 
            class="card__img img-fluid"
            >
        </div>
        <!-- div containing everythind besides the image -->
        <div class="moreinfo">
          <h3 class="text-capitalize">{{ monster.name }}</h3>
          <p>{{monster.description}}</p>
          <!-- only show drops if monster drops things -->
          <span v-if="monster.drops">
            <!-- pull list of common locations -->
            <ul class="commonlocations">
              <span class="bold">Drops:</span>
              <li v-for="drop of monster.drops" class="text-capitalize"> {{drop}} </li>
            </ul>
          </span>
          <!-- only show common location if weapon has common location -->
          <span v-if="monster.common_locations">
            <!-- pull list of common locations -->
            <ul class="commonlocations">
              <span class="bold">Common Locations:</span>
              <li v-for="locations of monster.common_locations">{{locations}}</li>
            </ul>
          </span>
        </div>
      </div>
    </div>
    <!-- END OF POPUP -->

  </div>
  

</template>

<script>

export default {
name: 'MonsterCard',
data() {
    return {
      isHidden: false,
    }
  },
methods: {
  toggleShowHide() {
      this.isHidden = !this.isHidden;
    }
},

props: {
    monster: Object,
    data: Array,
    item: Object, 
    image: String,
    description: String,
    name: String,
    id: Number,
    drop: String,
   common_locations: Array,
   drops: Array,

}
}
</script>

<style>
.card__img {
max-width: 275px;
}

.bold {
font-weight: 700;
font-size: 1em;
}

.commonlocations {
list-style-image: url(assets/imgs-etc/botw-star-micro.png);
color: #fdffe0;
}
ul {
padding-left: 3em;
}

li {
font-size: 0.9em;
margin-left: 2em;

}

.popup {
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: 99;
background-color: rgba(0, 0, 0, 0.35);


display: flex;
align-items: center;
justify-content: center;

}

.popup-inner {
display: flex;
flex-wrap: wrap;
justify-content: center;
margin: 0 15%;
}

.popup .popup-inner {
background: #36454f;
padding: 20px;
border-radius: 40px;
border: 1px solid #92c582;
}

.popup-img {
overflow: hidden;
}

.moreinfo {
  min-width: 40%;
  max-width: 60%;
}
</style>

