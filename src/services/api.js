import axios from "axios";
//Base da URL:https://api.themoviedb.org/3/
//URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=beda60dc1f7125fe09e2a99d5092ac80&language=pt-BR


const api = axios.create ({
    baseURL:'https://api.themoviedb.org/3/'
});

export default api;