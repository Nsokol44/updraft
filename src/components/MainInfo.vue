<template>
  <v-carousel v-model="model" class="pt-3" cycle>
    <v-carousel-item v-for="(color, i) in colors" :key="color" :src="color"  reverse-transition="fade-transition"
      transition="fade-transition">
      <v-sheet :color="color"  height="100%" tile>
        <v-row class="fill-height" align="center" justify="center">
          <div class="text-h2">Slide {{ i + 1 }}</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data: () => ({
      model: 0,
      colors: [
        {
        src: 'found_rev-01.jpeg',
        },
        'primary',
        'yellow darken-2',
        'red',
      ],
    }),
  }
</script>
