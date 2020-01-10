<template>
  <v-app >
    <v-content class="grey lighten-4" >
      <Navbar />
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
    
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "App",
  components: { Navbar }
}
</script>

<style>
</style>
