<template>
  <div>
    <v-container>
      <ThreadPreviewListItem 
        v-for="(value, index) in board.threads" 
        :key = index 
        class="mb-2" 
        :thread= value
      ></ThreadPreviewListItem>
    </v-container>
  </div>
</template>

<script>
import ThreadPreviewListItem from "@/components/ThreadPreviewListItem"
import BoardService from "@/service/BoardService"

export default {
  name: "board",
  components: { ThreadPreviewListItem },
  data: () => ({
    board: {}
  }),
  created() {
    BoardService.getById(this.$route.params.id)
      .then(board => this.board = board);
  }
}
</script>
