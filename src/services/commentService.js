import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data/comments';

const request = requestFactory();

export const getAllComments = async (movieId) => {
    const query = encodeURIComponent(`movieId="${movieId}"`);

    const result = await request.get(`${baseUrl}?where=${query}`);
    const comments = Object.values(result);

    return comments;
};

export const create = async (movieId, comment) => {
    const result = await request.post(baseUrl, {movieId, comment});

    return result;
};
