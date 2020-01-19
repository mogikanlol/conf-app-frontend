<template>
  <div>
    <v-container>
      <ThreadFirstPost 
        class="mb-2" 
        :thread=thread 
      />
      <ThreadPost 
        v-for="(post, index) in thread.posts" 
        :key=index 
        :post=post
      />
      <div class="my-4">
        <NewPostForm @add-post="addPost" ref="childForm" />
      </div>
    </v-container>
  </div>
</template>

<script>
import NewPostForm from "@/components/NewPostForm"
import ThreadService from "@/service/ThreadService"
import ThreadPost from "@/components/ThreadPost"
import ThreadFirstPost from "@/components/ThreadFirstPost"

export default {
  name: "thread",
  components: { NewPostForm, ThreadPost, ThreadFirstPost },
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