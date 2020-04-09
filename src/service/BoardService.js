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
    const requestFormData = new FormData();
    const threadJson = JSON.stringify({
      content: thread.content,
      title: thread.title,
      boardId: id
    });
    const threadBlob = new Blob([threadJson], {type: 'application/json'});

    requestFormData.append("thread", threadBlob);
    requestFormData.append("image", thread.image);

    return axios({
      method: "post",
      url: "/threads",
      data: requestFormData,
      headers: {'Content-Type': 'multipart/form-data'}
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