import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/jsonstore/comments';

export const movieCommentsFactory = (token) => {
    const request = requestFactory(token);

    const create = async (data) => {
        const result = await request.post(baseUrl, data);

        return result;
    };

    const getAllComments = async (movieId) => {
        const query = encodeURIComponent(`movieId="${movieId}"`);
        const result = await request.get(`${baseUrl}?where=${query}`);
        const comments = Object.values(result);

        return comments;
    }

    return {
        create,
        getAllComments,
    }
}