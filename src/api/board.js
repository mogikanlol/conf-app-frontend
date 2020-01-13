import { boards } from "./boards-stub";

export default {
    getAll (callback) {
        setTimeout( () => callback(boards), 100);
    }
}