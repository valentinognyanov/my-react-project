import * as request from './requester';

const baseUrl = 'http://localhost:3030/jsonstore/movies';

export const getAll = async () => {
    const res = await request.get(baseUrl);
    const movies = Object.values(res);
    
    console.log(movies);
    return movies;
}