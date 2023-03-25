import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data/movies';

export const movieCommentsFactory = (token) => {
    const request = requestFactory(token);

    const create = async (data) => {
        const result = await request.post(baseUrl, data);

        console.log(result);

        return result;
    }
}