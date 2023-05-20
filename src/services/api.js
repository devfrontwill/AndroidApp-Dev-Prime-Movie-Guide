import axios from 'axios';

// URL FILMES EM CARTAZ:
// https://api.themoviedb.org/3 (URL-BASE)
// trending/movie/day?api_key=93266ac1262b0ebcca5932e384f6dbbb&language=pt-BR&page=1

export const key = '93266ac1262b0ebcca5932e384f6dbbb'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default api;