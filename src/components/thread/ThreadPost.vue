<template>
  <v-card class="mb-1 px-1 py-1">
    <div>
      #{{localPost.id}}
      <div style="float:right">
        <v-icon @click="editPost()" >mdi-pencil</v-icon>
        <v-icon @click="deletePost()" >mdi-close</v-icon>
      </div>
    </div>
    <v-card-text>
      <div class="text--primary" v-if="editable == false">
        {{localPost.content}}
      </div>
      <div v-if="editable == true">
        <v-textarea
          filled
          auto-grow
          v-model="localPost.content"
        />
        <v-btn class="mr-2" color="primary" @click="changePost()">Save</v-btn>
        <v-btn class="mr-2" color="primary" @click="discardChanges()">Discard</v-btn>
      </div>
      
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    editable: false,
    localPost: {}
  }),
  props: {
    post: Object
  },
  created() {
    this.localPost = {
      id: this.post.id,
      content: this.post.content
    }
  },
  watch: {
    post(newPost) {
      this.localPost = {
        id: newPost.id,
        content: newPost.content
      }
    }
  },
  methods: {
    deletePost() {
      if (confirm("Are you sure you want to delete this post?")) {
        this.$emit("delete-post", this.post.id);
      }
    },

    editPost() {
      this.editable = true;
    },

    changePost() {
      this.$emit('change-post', this.localPost);
      this.editable = false;
    },

    discardChanges() {
      this.editable = false;
    }
  }
}
</script>