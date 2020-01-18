import { evaThread } from "./stub/evangelion-thread-stub"

export default {

    getById (id, callback) {
        const thread = id == 0 ? evaThread : {};
        callback(thread);
    }

}