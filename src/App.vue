<template>
  <div>
    <!-- <v-app > -->
      <!-- <v-content class="grey lighten-4" > -->
        <Navbar />
        <router-view></router-view>
      <!-- </v-content> -->
    <!-- </v-app> -->
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "App",
  components: { Navbar }
}
</script>

<style>
body {
  font-family: "Roboto", sans-serif;
  line-height: 1.5;
  font-size: 16px;
}
</style>
