<template>


  <v-row class="text-center mt-3" justify="center">
    <v-col v-for="align in alignments" :key="align" :align-self="align" >
        
    <div v-if="align === 'center'" > 
    <v-card  class="rounded-circle my-8" v-for="(bble, i) in bubbly" :key="i" md="3"  >
      <img 
        class="rounded-circle"
        :src="'/' + bble.src"
        alt="image"
        height="200px"
        width="200px"
        
      />
    </v-card>
    </div>


    <div v-else>
    <v-card outlined class="rounded-circle"  v-for="(bble, i) in bubbly" :key="i" md="3" >
      <img 
        class="rounded-circle"
        :src="'/' + bble.src"
        alt="image"
        height="200px"
        width="200px"
      />
      </v-card>
    </div>

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