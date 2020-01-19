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
        <ThreadPost 
          v-for="(post, index) in thread.posts" 
          :key=index 
          :post=post
          class="mb-1 px-1 py-1"
        ></ThreadPost>
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
import ThreadPost from "@/components/ThreadPost"
export default {
  name: "thread",
  components: { NewPostForm, ThreadPost },
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