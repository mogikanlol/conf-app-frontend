import axios from 'axios';

export default class ConferenceService {

    static getConferences() {
        return axios.get("/conf-crud/api/v1/conferences");
    }

    static getConference(id) {
        return axios.get("/conf-crud/api/v1/conferences/" + id)
    }
}