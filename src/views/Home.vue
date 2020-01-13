<template>
  <div>
    <v-card max-height="600px" max-width="1500px" class="mx-auto" outlined>
      <div>
        <v-container>
          <h3>Boards</h3>
          <v-row>
            <v-col v-for="(value, index) in Object.keys(boards)" :key = index>
              <h4><u>{{value}}</u></h4>
              <div v-for="(board, index) in boards[value]" :key = index>
                {{board.title}}
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-card>
  </div>
</template>

<script>
import { mapState} from 'vuex'
export default {
  name: "home",
  computed: mapState({
    boards: state => state.board.boards,
  }),
  created() {
    this.$store.dispatch("board/getAll");
  }
};
</script>
