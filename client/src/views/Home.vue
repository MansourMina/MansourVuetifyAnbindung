<template>
  <v-container>
    <CarCards :cars="cars" :refresh="getCars" />
  </v-container>
</template>

<script>
import CarCards from '../components/CarCards.vue';
import axios from 'axios';

export default {
  name: 'Home',

  components: {
    CarCards,
  },

  data: () => ({
    cars: [],
  }),

  created() {
    this.getCars();
  },
  methods: {
    async getCars() {
      const { data } = await axios({
        url: 'http://localhost:3000/cars',
        method: 'GET',
      });
      this.cars = data;
    },
  },
};
</script>
