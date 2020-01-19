<template>
  <div>
    <v-card>
      <div>#{{post.id}}</div>
      <div>{{post.content}}</div>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    post: {}
  }
}
</script>