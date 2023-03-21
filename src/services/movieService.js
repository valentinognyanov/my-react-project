import * as request from './requester';

const baseUrl = 'http://localhost:3030/jsonstore/movies';

export const getAll = async () => {
    const result = await request.get(baseUrl);
    const movies = Object.values(result);
    
    return movies;
};

export const getOne = async (movieId) => {
    const result = await request.get(`${baseUrl}/${movieId}`);

    return result;
};

export const create = async (movieData) => {
    const result = await request.post(baseUrl, movieData);
    
    return result;
};