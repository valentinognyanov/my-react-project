import { requestFactory } from './requester';

const host = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3030'
    : 'http://localhost:3030'; // production host url
const url = `${host}/data/comments`;


export const commentServiceFactory = () => {
    const request = requestFactory();

    const getAllComments = async (movieId) => {
        const searchQuery = encodeURIComponent(`movieId="${movieId}"`);
        const relationQuery = encodeURIComponent(`author=_ownerId:users`);

        const result = await request.get(`${url}?where=${searchQuery}&load=${relationQuery}`);
        const comments = Object.values(result);

        return comments;
    };

    const create = async (movieId, comment) => {
        const result = await request.post(url, { movieId, comment });

        return result;
    };

    return {
        getAllComments,
        create,
    };
};

