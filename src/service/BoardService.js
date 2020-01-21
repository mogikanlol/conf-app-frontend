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

  static addNewThread(id, thread) {
    const board = id === 'a'? animeBoard : {};
    thread.id = board.threads[board.threads.length - 1].id + 1;
    board.threads.push(thread);
  }
}