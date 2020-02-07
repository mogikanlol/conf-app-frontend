<template>
  <div>
    <v-container>
      <div class="text-center my-2">
        <v-btn color="primary" @click="showNewThreadForm = !showNewThreadForm;">
          {{!showNewThreadForm ? '[Start a New Thread]' : '[Close Form]'}}
        </v-btn>
      </div>
      <div id="newThreadForm" v-if="showNewThreadForm" class="mx-auto my-2">
        <NewThreadForm @add-thread="addThread" ref="childForm"/>
      </div>
      <ThreadPreview 
        v-for="(value, index) in board.threads" 
        :key = index 
        class="mb-2" 
        :thread= value
      ></ThreadPreview>
    </v-container>
  </div>
</template>

<script>
import ThreadPreview from "@/components/board/ThreadPreview"
import NewThreadForm from "@/components/board/NewThreadForm"
import BoardService from "@/service/BoardService"

export default {
  name: "board",
  components: { ThreadPreview, NewThreadForm },
  data: () => ({
    board: {},
    showNewThreadForm: false
  }),
  created() {
    BoardService.getById(this.$route.params.id)
      .then(res => this.board = res.data);
  },
  methods: {
    addThread(thread) {
      BoardService.addNewThread(this.$route.params.id, thread)
        .then(res => this.board.threads.push(res.data));
        
      this.$refs.childForm.resetForm();
    }
  }
}
</script>

<style scoped>

#newThreadForm {
  width: 800px
}

</style>