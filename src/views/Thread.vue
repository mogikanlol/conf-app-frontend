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
        <v-form ref="form" v-model="isFormValid" >
          <v-textarea
              filled
              auto-grow
              v-model="inputText"
              :rules="[rules.textarea]"
          ></v-textarea>
        </v-form>
          <v-btn @click="addPost()" color="primary" :disabled="!isFormValid">Send</v-btn>
        </div>
    </v-container>
  </div>
</template>

<script>
import { mapState} from 'vuex'
export default {
  name: "thread",
  data: () => ({
    isFormValid: false,
    inputText: '',
    rules: {
      textarea: v => (v || '').length > 0 || ''
    }
  }),
  methods: {
    addPost() {
      const post = {
        threadId: this.thread.id,
        content: this.inputText
      };
      this.$store.dispatch("thread/addPost", post);
      this.$refs.form.reset();
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