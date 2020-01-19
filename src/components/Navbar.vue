<template>
  <nav>
    <v-app-bar flat>
      <router-link to="/">
        <v-btn depressed>
          <span>The Header Home</span>
        </v-btn>
      </router-link>
      <v-spacer></v-spacer>
      <v-btn depressed>
        <span>Sign In</span>
      </v-btn>
    </v-app-bar>    
  </nav>
</template>

<script>
export default {
    
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>