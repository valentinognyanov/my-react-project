import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data/movies';

export const movieServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(baseUrl);
        const movies = Object.values(result);

        return movies;
    };

    const getOne = async (movieId) => {
        const result = await request.get(`${baseUrl}/${movieId}`);
        return result;
    };

    const create = async (movieData) => {
        const result = await request.post(baseUrl, movieData);

        return result;
    };

    const addComment = async (movieId, data) => {
        const result = await request.post(`${baseUrl}/${movieId}/comments`, data);

        return result;
    };

    const edit = async (movieId, data) => request.put(`${baseUrl}/${movieId}`, data);

    const del = (movieId) => request.del(`${baseUrl}/${movieId}`);

    return {
        getAll,
        getOne,
        create,
        edit,
        delete: del,
        addComment
    };
};