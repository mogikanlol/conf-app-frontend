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
                <router-link :to="{ name: 'board', params: {id: board.id } }">
                  {{board.title}}
                </router-link>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-card>
  </div>
</template>

<script>
// import { mapState} from 'vuex'

import BoardService from "@/service/BoardService"

export default {
  name: "home",
  data: () => ({
    boards: []
  }),
  created() {
    BoardService.getAll()
      .then(boards => this.boards = boards);
  }
};
</script>

<style scoped>
a {
    text-decoration: none;
}
</style>