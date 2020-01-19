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
import { mapState} from 'vuex'
import NewPostForm from "@/components/NewPostForm"
export default {
  name: "thread",
  components: { NewPostForm },
  methods: {
    addPost(inputText) {
      const post = {
        threadId: this.thread.id,
        content: inputText
      };
      this.$store.dispatch("thread/addPost", post);
      this.$refs.childForm.resetForm();
    }
  },
  computed: mapState({
    thread: state => state.thread.evaThread,
  }),
  created() {
    this.$store.dispatch("thread/getById", this.$route.params.id);
  }
}
</script>