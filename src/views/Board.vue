<template>
  <div>
    <v-container>
      <ThreadPreviewListItem 
        v-for="(value, index) in threads" 
        :key = index 
        class="mb-2" 
        :thread= value
      ></ThreadPreviewListItem>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ThreadPreviewListItem from "@/components/ThreadPreviewListItem"
export default {
  name: "board",
  components: { ThreadPreviewListItem },
  computed: mapState({
    animeBoard: state => state.board.animeBoard,
    threads: state => state.board.animeBoard.threads
  }),
  created() {
    this.$store.dispatch("board/getById", this.$route.params.id);
  }
}
</script>
