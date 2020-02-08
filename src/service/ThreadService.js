import axios from 'axios'

export default class ThreadService {

  static getById (id) {
    return axios.get("/threads/" + id);
  }

  static addPost(post) {
    return axios.post("/posts", post);
  }

  static deletePost(postId) {
    return axios.delete("/posts/" + postId);
  }

  static updatePost(post) { 
    return axios.patch("/posts/" + post.id, {
      content: post.content
    })
  }
}