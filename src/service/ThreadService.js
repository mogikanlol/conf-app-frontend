import { animeBoard } from "@/api/stub/anime-board-stub";

import axios from 'axios'

export default class ThreadService {

  static getById (id) {
    return axios.get("/threads/" + id);
  }

  static addPost(post) {
    return axios.post("/posts", post);
  }

  static deletePost(threadId, postId) {
    const thread = animeBoard.threads.find(thread => thread.id === threadId);
    thread.posts = thread.posts.filter(post => post.id !== postId);
    return new Promise(() => {});
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