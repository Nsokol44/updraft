<template>
  <!-- New Box -->
  <v-container grid-list-lg>
    <v-row class="mx-3" justify="space-between">
      <v-col v-for="(item, n) in projects" :key="n.id" cols="4">
        <div class="pt-3">
          <v-card class="mx-auto" max-width="344">
            <v-img :src="'/' + item.src" height="200px"></v-img>

            <v-card-title>
              {{ item.name }}
            </v-card-title>

            <v-card-subtitle> {{item.subtext}} </v-card-subtitle>

            <v-card-actions>
              <v-btn color="orange lighten-2" text> Explore </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="show = !show">
                <v-icon>{{
                  show ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  {{ item.text }}
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  data: () => ({
    //
    projects: [
      {
        name: "Found Spatial",
        src: "found_rev-01.jpeg",
        subtext: "Drones, GIS, and Spatial Analytics",
        text: "Found Spatial is a platform dedicated to enhancing spatial perspectives, interactions, and thinking."
      },
      {
        name: "Fulmin Energy",
        src: "SocialMedia_Logo1.jpg",
        subtext: "Saltwater Batteries for the Future",
        text: "Fulmin Energy seeks to bring new forms of energy storage and generation to market."

      },
      {
        name: "Healbot Games",
        src: "Healbot_Logo_HealbotOnly.png",
        subtext: "Games that Engage",
        text: "Healbot Games aims to create engaging and fun user experiences."

      },
    ],
    show: false,

    items: [
      {
        color: "#1F7087",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Supermodel",
        artist: "Foster the People",
      },
      {
        color: "#952175",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Halcyon Days",
        artist: "Ellie Goulding",
      },
    ],
  }),
  methods: {
    getImgUrl: function (path) {
      return require("../assets/" + path);
    },
  },
};
</script>