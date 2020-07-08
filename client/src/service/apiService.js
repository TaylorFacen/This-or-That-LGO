import axios from 'axios';

export default {
    getUser: async email => {
        const url = `/api/users/${email}`;
        return axios.get(url)
    },
    getQuestions: async () => {
        const url = '/api/questions';
        const resp = await axios.get(url);
        return resp.data;
    },
    postAnswerChoice: async (userId, questionId, answerId) => {
        const url = `/api/users/${userId}/answers`;
        return axios.post(url, { questionId, answerId })
    }
}