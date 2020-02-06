<template>
  <v-card>
    <v-card-title>
      {{thread.title}}
    </v-card-title>
    <v-img contain height="400px" width="400px" :src=thread.imageUrl></v-img>
    <div>
      {{thread.content}}
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    thread: {}
  }
}
</script>