import { requestFactory } from './requester';

const host = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3030'
    : 'http://localhost:3030'; // production host url
const url = `${host}/data/movies`;

export const movieServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(url);
        const movies = Object.values(result);

        return movies;
    };

    const getOne = async (movieId) => {
        const result = await request.get(`${url}/${movieId}`);
        return result;
    };

    const create = async (movieData) => {
        const result = await request.post(url, movieData);

        return result;
    };

    const edit = async (movieId, data) => request.put(`${url}/${movieId}`, data);

    const del = (movieId) => request.del(`${url}/${movieId}`);

    const search = async (input) => {
        const searchQuery = encodeURIComponent(`title LIKE "${input}"`);
        const result = await request.get(`${url}?where=${searchQuery}`);
        const movies = Object.values(result);
        
        return movies;
    };

    return {
        getAll,
        getOne,
        create,
        edit,
        delete: del,
        search,
    };
};