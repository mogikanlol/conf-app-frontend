import { boards } from "./stub/boards-stub";
import { animeBoard } from "./stub/anime-board-stub";

export default {
    getAll (callback) {
        callback(boards);
    },

    getById(id, callback) {
        let board = id === 'a'? animeBoard : [];

        callback(board);
    }
}