<template>
  <div>
    <v-container>
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
import ThreadPreview from "@/components/ThreadPreview"
import BoardService from "@/service/BoardService"

export default {
  name: "board",
  components: { ThreadPreview },
  data: () => ({
    board: {}
  }),
  created() {
    BoardService.getById(this.$route.params.id)
      .then(board => this.board = board);
  }
}
</script>
