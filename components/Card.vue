<template>
  
    <div 
      class="col-lg col-md col-sm astro-grid" 
      :style="{ 'order':item.id }"
      @click="toggleShowHide"
      >

      <img 
      :src="item.image" 
      :alt="item.name" 
      class="card__img"
      >

      <h3 class="text-capitalize">{{ item.name }}</h3>

      <p>{{item.description}}</p>
      <!-- POPUP CONTENT: ALL ITEMS FROM BEFORE PLUS OTHER STATS -->
      <div class="popup" v-if="isHidden">
        <div class="popup-inner">
         
            <img 
            :src="item.image" 
            :alt="item.name" 
            class="card__img"
            >

          <!-- div containing everythind besides the image -->
          <div class="moreinfo">
            <h3 class="text-capitalize">{{ item.name }}</h3>
            <p>{{item.description}}</p>
            <!-- only show attack stat if weapon has attack stat -->
            <span v-if="item.attack > 0">
              <p>
                <span class="bold">Attack Power:</span> {{item.attack}}</p>
            </span>
            <!-- only show defense stat if weapon has defense stat -->
            <span v-if="item.defense > 0">
              <p>
                <span class="bold">Defense Power:</span> {{item.defense}}</p>
            </span>
            <!-- only show common location if weapon has common location -->
            <span v-if="item.common_locations">
              <!-- pull list of common locations -->
              <ul class="commonlocations">
                <span class="bold">Common Locations:</span>
                <li v-for="locations of item.common_locations">{{locations}}</li>
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
  name: 'Card',
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
      equipment: Object,
      data: Array,
      item: Object, 
      image: String,
      description: String,
      name: String,
      id: Number,
      attack: Number,
      defense: Number,
      common_locations: Array,

  }
}
</script>

<style>
.card__img {
  max-width: 275px;
}

.commonlocations {
  list-style-image: url(assets/imgs-etc/botw-star-micro.png);
  color: #fdffe0;
}
.bold {
  font-weight: 700;
  font-size: 1em;
}
li {
  font-size: 0.9em;
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
  justify-content: center;
  margin: 0 10%;
}

.popup .popup-inner {
  background: #36454f;
  padding: 20px;
  border-radius: 40px;
  border: 1px solid #92c582;
}
.moreinfo {
  width: 35%;
}
</style>
