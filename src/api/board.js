let genres = ["Music", "Games", "Japan", "Movies", "Technologies", "Creative"]
let boards = [];
for(let i = 0; i < 50; i++) {
    boards.push({title: "Board #" + i, genre: genres[Math.floor(Math.random() * genres.length)]});
}

export default {
    getAll (callback) {
        setTimeout( () => callback(boards), 100);
    }
}