import { boards } from "@/api/stub/boards-stub";
import { animeBoard } from "@/api/stub/anime-board-stub";

export default class BoardService {

  static getAll() {
    let result = {};
    boards.forEach( value => {
      result[value.genre] = result[value.genre] || [];
      result[value.genre].push(value);
      }
    );
    return new Promise( (resolve) => {
      resolve(result);
    });
  }

  static getById(id) {
    const board = id === 'a'? animeBoard : {}

    return new Promise( (resolve) => {
        resolve(board);
    });
  }
}