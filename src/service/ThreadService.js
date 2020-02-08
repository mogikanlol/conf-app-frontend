import { animeBoard } from "@/api/stub/anime-board-stub";

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

  static updatePost(threadId, post) {
    const thread = animeBoard.threads.find(thread => thread.id === threadId);
    const index = thread.posts.findIndex(el => el.id === post.id);
    thread.posts.splice(index, 1, post);

    return new Promise((resolve) => {
      resolve(post);
    });
  }
}