import { evaThread } from "@/api/stub/evangelion-thread-stub"

export default class ThreadService {

  static getById (id) {
    const thread = id == 0 ? evaThread : {};
    return new Promise( (resolve) => {
        resolve(thread);
    });
  }

  static addPost(post) {
    const thread = post.threadId == 0 ? evaThread: {};
    post.id = thread.posts[thread.posts.length - 1].id + 1;
    thread.posts.push(post);
  }
}