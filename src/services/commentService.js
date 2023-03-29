import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data/comments';

const request = requestFactory();

export const getAllComments = async (movieId) => {
    const searchQuery = encodeURIComponent(`movieId="${movieId}"`);
    const relationQuery = encodeURIComponent(`author=_ownerId:users`)

    const result = await request.get(`${baseUrl}?where=${searchQuery}&load=${relationQuery}`);
    const comments = Object.values(result);

    return comments;
};

export const create = async (movieId, comment) => {
    const result = await request.post(baseUrl, { movieId, comment });

    return result;
};
