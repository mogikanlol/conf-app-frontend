<template>
  <v-card class="mb-1 px-1 py-1">
    <div>#{{post.id}}</div>
    <div>{{post.content}}</div>
  </v-card>
</template>

<script>
export default {
  props: {
    post: {}
  }
}
</script>