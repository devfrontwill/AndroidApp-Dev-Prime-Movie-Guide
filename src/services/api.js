import axios from 'axios';

// URL FILMES EM CARTAZ
// https://api.themoviedb.org/3/

// movie/now_playing &language=pt-BR &page=1

export const key = 'b77719a2b75267654655415eb6111a49'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default api;