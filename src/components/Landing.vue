<template>
  <!-- New Box -->


<div class="pt-3">

  <v-card
    max-width="1200"
    class="mx-auto"
  >

    <v-app-bar
      dark
      color="blue lighten-2"
    >

      <v-toolbar-title>The Updraft Ecosystem</v-toolbar-title>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-container>
      <v-row dense>
        <!-- <v-col>
          <v-card
            color="#385F73"
            dark
          >
            <v-card-title class="text-h5">
              Unlimited music now
            </v-card-title>

            <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>

            <v-card-actions>
              <v-btn text>
                Listen Now
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col> -->

        <v-col
          v-for="(item, i) in projects"
          :key="i"
          
        >
          <v-card
            :color="item.color"
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="text-h5"
                  v-text="item.name"
                ></v-card-title>

                <v-card-subtitle v-text="item.subtext"></v-card-subtitle>

                <v-card-actions>
                  <v-btn
                    v-if="item.name === 'play music'"
                    class="ml-2 mt-3"
                    fab
                    icon
                    height="40px"
                    right
                    width="40px"
                  >
                    <v-icon>mdi-play</v-icon>
                  </v-btn>

                  <v-btn
                    v-else
                    class="ml-2 mt-5"
                    outlined
                    rounded
                    small
                  >
                    See More
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>



  </div>
</template>


<script>
export default {
  data: () => ({
    //
    projects: [
      {
        name: "Found Spatial",
        src: "found_rev-01.jpeg",
        subtext: "Drones, GIS, Analytics, and Spatial Perspectives",
        text: "Found Spatial is a platform dedicated to enhancing spatial perspectives, interactions, and thinking.",
        flex: 4,
      },
      {
        name: "Fulmin Energy",
        src: "SocialMedia_Logo1.jpg",
        subtext: "Saltwater Batteries for the Future",
        text: "Fulmin Energy seeks to bring new forms of energy storage and generation to market.",
        flex: 4,
      },
      {
        name: "Healbot Games",
        src: "Healbot_Logo_1e.png",
        subtext: "Revolutionary Games that Engage",
        text: "Healbot Games aims to create engaging and fun user experiences.",
        flex: 4,
      },
    ],
    show: false,
  }),

};
</script>