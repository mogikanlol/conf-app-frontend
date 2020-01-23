<template>
  <v-card class="mb-1 px-1 py-1">
    <div>
      #{{post.id}}
      <v-icon @click="deletePost()" small style="float:right">mdi-close</v-icon>
      </div>
    <div>{{post.content}}</div>
  </v-card>
</template>

<script>
export default {
  props: {
    post: {}
  },
  methods: {
    deletePost() {
      if (confirm("Are you sure you want to delete this post?")) {
        this.$emit("delete-post", this.post.id);
      }
    }
  }
}
</script>