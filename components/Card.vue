<script>
  export default {
    name: 'Card',
    props: {
        equipment: Object,
        data: Array,
        item: Array, 
        image: String,
        description: String,
        name: String,

    }
  }
</script>

<template>

    <div class="col-lg col-md col-sm astro-grid">
      <img :src="item.image" :alt="item.name" class="card__img">
     <h3 class="text-capitalize">{{ item.name }}</h3>
      <p>{{item.description}}</p>
    </div>

</template>

<style>
.card__img {
  max-width: 275px;
}
</style>
