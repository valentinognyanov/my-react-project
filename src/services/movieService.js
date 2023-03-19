import * as request from './requester';

const baseUrl = 'http://localhost:3030/jsonstore/movies';

export const getAll = async () => {
    const result = await request.get(baseUrl);
    const movies = Object.values(result);
    
    console.log(movies);
    return movies;
};

export const create = async (movieData) => {
    const result = await request.post(baseUrl, movieData);
    
    console.log(result);
    return result;
};