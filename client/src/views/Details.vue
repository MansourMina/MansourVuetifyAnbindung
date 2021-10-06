<template>
  <v-container class="d-flex flex-wrap  " justify-center>
    <v-card class="my-12 mx-3 " max-width="500" height="800 ">
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img height="400" :src="car.image"></v-img>

      <v-card-title
        ><span class="mx-auto">{{ car.title }}</span></v-card-title
      >
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                Price
              </th>
              <th class="text-left">
                Miles
              </th>

              <th class="text-left">
                Year of Make
              </th>
              <th class="text-left">
                Current Owner
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ car.price }}</td>
              <td>{{ car.miles }}</td>
              <td>{{ car.yearOfMake }}</td>
              <td v-if="car.owner">
                {{ car.owner.firstName }} {{ car.owner.lastName }}
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <v-card-text>
        <v-row align="center" class="mx-0 text-subtitle-1">
          {{ car.description }}
        </v-row>
      </v-card-text>
      <v-card-actions>
        <div class="mr-auto">
          <v-btn
            color="white"
            class="purple darken-2 justify-content-start"
            text
            @click="$router.push(`/`)"
          >
            Go Back
          </v-btn>
        </div>
        <div class="ml-auto ">
          <v-btn color="white" class="red darken-2" text @click="buyCar()">
            Order Car
          </v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  props: {
    id: {
      type: String,
    },
  },
  data() {
    return {
      car: {},
    };
  },
  created() {
    this.getCarById();
  },
  methods: {
    async getCarById() {
      const { data } = await axios({
        url: 'http://localhost:3000/cars/' + this.id,
        method: 'GET',
      });

      this.car = data[0];
    },

    async buyCar() {
      await axios({
        url: 'http://localhost:3000/cars/' + this.car.id,
        method: 'PATCH',
        contentType: 'application/json',
        data: {
          title: this.car.title + ' *RESERVED*',
        },
      });
      this.getCarById();
      console.log(this.car.title);
    },
  },
};
</script>

<style lang="scss" scoped></style>
