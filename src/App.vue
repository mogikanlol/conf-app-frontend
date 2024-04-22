<template>
  <v-app >
    <v-content class="grey lighten-4" >
      <Navbar />
        <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: { Navbar }
}
</script>

<style>
</style>
