import { evaThread } from "./stub/evangelion-thread-stub"

export default {

    getById (id, callback) {
        const thread = id == 0 ? evaThread : {};
        callback(thread);
    },

    addPost(post) {
        const thread = post.threadId == 0 ? evaThread: {};
        post.id = thread.posts[thread.posts.length - 1].id + 1;
        thread.posts.push(post);
    }

}