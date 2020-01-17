<template>
  <div>
    <v-container>
      <v-card v-for="(value, index) in threads" :key = index class="mb-2">
        <v-card-title>
          {{value.title}}
        </v-card-title>
        <v-container> 
          <v-img width="100px" height="100px" :src=value.image></v-img>
          <div>
            {{value.shortContent}}
          </div>
          <div class="text-right">
            <v-btn color="primary">In Thread</v-btn> 
          </div>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { mapState} from 'vuex'
export default {
  name: "board",
  computed: mapState({
    animeBoard: state => state.board.animeBoard,
    threads: state => state.board.animeBoard.threads
  }),
  created() {
    this.$store.dispatch("board/getById", this.$route.params.id);
  }
}
</script>
