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
    return axios.post("/threads", {
      ...thread,
      boardId: id
    });
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