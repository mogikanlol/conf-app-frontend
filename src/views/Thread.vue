<template>
  <div ref="messagesContainer">
    <v-container>
      <v-btn color="primary" class="my-2 mx-2" @click="goBack()">Back</v-btn>
      <v-btn color="primary" class="my-2 mx-2" @click="goBottom()">Bottom</v-btn>
      <ThreadFirstPost 
        class="mb-2" 
        :thread=thread 
      />
      <ThreadPost 
        v-for="(post, index) in thread.posts" 
        :key=index 
        :post=post
        @delete-post="deletePost"
      />
      <div class="my-4">
        <NewPostForm @add-post="addPost" ref="childForm" />
      </div>
      <v-btn color="primary" class="my-2 mx-2" @click="goBack()">Back</v-btn>
      <v-btn color="primary" class="my-2 mx-2" @click="goTop()">Top</v-btn>
    </v-container>
  </div>
</template>

<script>
import NewPostForm from "@/components/thread/NewPostForm"
import ThreadService from "@/service/ThreadService"
import ThreadPost from "@/components/thread/ThreadPost"
import ThreadFirstPost from "@/components/thread/ThreadFirstPost"

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
    },

    deletePost(postId) {
      ThreadService.deletePost(this.thread.id, postId);
    },

    goTop() {
      window.scrollTo(0,0);
    },

    goBottom() {
      window.scrollTo(0,document.body.scrollHeight);
    },

    goBack() {
      this.$router.go(-1);
    }
  },
  created() {
    ThreadService.getById(this.$route.params.id)
      .then(thread => this.thread = thread);
  }
}
</script>