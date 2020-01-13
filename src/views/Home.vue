<template>
  <div>
    <v-card max-height="600px">
      <v-card-title>Boards</v-card-title>
      <v-card-text>
        <v-row>
          <v-col v-for="(value, index) in Object.keys(boards)" :key = index>
            <h4>{{value}}</h4>
            <div v-for="(board, index) in boards[value]" :key = index>
              {{board.title}}
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>

export default {
  name: "home",
  data: () => ({
    boards: {}
  }),
  created() {
    let genres = ["Music", "Games", "Japan", "Movies", "Technologies"]
    let boards = [];
    for(let i = 0; i < 50; i++) {
      boards.push({title: "Board #" + i, genre: genres[Math.floor(Math.random() * genres.length)]});
    }
    console.log(boards);
    
    let result = {};
    boards.forEach( value => {
        result[value.genre] = result[value.genre] || [];
        result[value.genre].push(value);
      }
    );
    console.log(result);
    this.boards = result;
  }
};
</script>
