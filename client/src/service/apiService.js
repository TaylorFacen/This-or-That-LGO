import axios from 'axios';

export default {
    getUser: async email => {
        const url = `/api/users/${email}`;
        return axios.get(url)
    }
}