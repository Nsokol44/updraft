<template>
  <v-app>
    <v-app-bar
      absolute
      color="grey darken-4"
      dark
      hide-on-scroll
      scroll-target="#scrolling-techniques-4"
      app
    >
      <v-spacer></v-spacer>

      <div class="d-flex align-center">
        <v-img
          class="mx-auto"
          src="@/assets/Updraft-01.png"
          max-height="240"
          max-width="250"
          contain
        ></v-img>
      </div>

      <v-spacer></v-spacer>

      <v-btn elevation="2" icon outlined color="white"> Login </v-btn>

      <v-btn icon>
        <v-icon color="white">mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <MainInfo />
      <Landing />
      <ToDoList />
    </v-content>

    <v-main> </v-main>

    <v-footer color="grey darken-4" padless>
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          rounded
          class="my-2"
        >
          {{ link }}
        </v-btn>

        <v-col class="py-4 text-center white--text" cols="12">
          <strong>Copyright</strong> {{ new Date().getFullYear() }}
          <strong> Updraft Company</strong>
        </v-col>
      </v-row>
    </v-footer>



  </v-app>
</template>

<script>
import ToDoList from "./components/ToDoList.vue";
import Landing from "./components/Landing.vue";
import MainInfo from "./components/MainInfo.vue";

export default {
  name: "App",

  components: {
    ToDoList,
    Landing,
    MainInfo,
  },

  data: () => ({
    //
    links: [
      "Home",
      "About Us",
      "Team",
      "Contact Us",
      "Youtube",
    ],
  }),
};
</script>
