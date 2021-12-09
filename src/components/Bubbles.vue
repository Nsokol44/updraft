<template>


  <v-row class="text-center mt-3" justify="center">
    <v-col v-for="align in alignments" :key="align" :align-self="align">
    
    <v-card outlined class="rounded-circle">
      <img v-for="(bble, i) in bubbly" :key="i" cols="3" md="3"
        class="rounded-circle"
        :src="'/' + bble.src"
        alt="image"
        height="200px"
        width="200px"
      />

      <div></div>
    </v-card>
    </v-col>
  </v-row>



</template>


<script>
export default {
  data: () => ({
    //
    bubbly: [
      {
        name: "image1",
        src: "found_rev-01.jpeg",
      },
      {
        name: "image2",
        src: "SocialMedia_Logo1.jpg",
      },
      {
        name: "image3",
        src: "Healbot_Logo_1e.png",
      },
    ],
    alignments: ["start", "center", "end"],
  }),
};
</script>