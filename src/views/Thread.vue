<template>
  <div>
    <v-container>
      <v-card class="mb-2">
        <v-card-title>
          {{thread.title}}
        </v-card-title>
        <v-img contain height="400px" width="400px" :src=thread.image></v-img>
        <div>
          {{thread.content}}
        </div>
      </v-card>
      <div>
        <v-card v-for="(post, index) in thread.posts" :key=index class="mb-1 px-1 py-1">
          <div>#{{post.id}}</div>
          <div>{{post.content}}</div>
        </v-card>
      </div>
      <div class="my-4">
        <NewPostForm @add-post="addPost" ref="childForm"></NewPostForm>
      </div>
    </v-container>
  </div>
</template>

<script>
import NewPostForm from "@/components/NewPostForm"
import ThreadService from "@/service/ThreadService"
export default {
  name: "thread",
  components: { NewPostForm },
  data: () => ({
    thread: {}
  }),
  methods: {
    addPost(inputText) {
      const post = {
        threadId: this.thread.id,
        content: inputText
      };
      ThreadService.addPost(post);
      this.$refs.childForm.resetForm();
    }
  },
  created() {
    ThreadService.getById(this.$route.params.id)
      .then(thread => this.thread = thread);
  }
}
</script>