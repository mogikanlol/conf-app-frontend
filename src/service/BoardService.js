import { animeBoard } from "@/api/stub/anime-board-stub";

import axios from 'axios'

export default class BoardService {

  static getAll() {
    return axios.get("/boards", {
      transformResponse: axios.defaults.transformResponse.concat((data) => {
        return this.toMapGenreToBoards(data);
      })
    });
  }

  static getById(id) {
    return axios.get("/boards/" + id);
  }

  static addNewThread(id, thread) {
    const board = id === 'a'? animeBoard : {};
    thread.id = board.threads[board.threads.length - 1].id + 1;
    thread.posts = [];
    board.threads.push(thread);
  }

  static toMapGenreToBoards(data) {
    let result = {};
    data.forEach(value => {
      result[value.genre] = result[value.genre] || [];
      result[value.genre].push(value);
    });
    return result;
  }
}