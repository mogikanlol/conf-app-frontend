<template>
  <div>
    <v-card>
      <v-card-title>
        {{thread.title}}
      </v-card-title>
      <v-container> 
        <v-img width="100px" height="100px" :src=thread.image></v-img>
        <div>
          {{thread.shortContent}}
        </div>
        <div class="text-right">
          <router-link :to="{name: 'thread', params: {id: thread.id} }">
            <v-btn color="primary">In Thread</v-btn> 
          </router-link>
        </div>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    thread: {}
  }
}
</script>