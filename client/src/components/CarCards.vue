<template>
  <v-container class="d-flex flex-wrap " fluid justify-center>
    <CarCard :c="c" v-for="c of cars" :key="c.id" />
  </v-container>
</template>

<script>
import CarCard from '@/components/CarCard.vue';

export default {
  name: 'CarCards',
  props: {
    cars: {
      type: Array,
    },
    refresh: {
      type: Function,
    },
  },
  components: {
    CarCard,
  },
};
</script>
<style></style>
