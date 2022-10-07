import axios from 'axios';

axios.defaults.baseURL = `https://api.themoviedb.org/3/`;

const KEY = `a01427bba16efe7ca9c6e0e311cfd6fb`;

export const IMAGE_URL = `https://image.tmdb.org/t/p/w500`;

 export function axiosTrend() {
    return axios.get(`trending/movie/week?api_key=${KEY}`);
    
 }

 export function axiosGetMomiesDetails(movie_id) {
    return axios.get(`movie/${movie_id}?api_key=${KEY}`);
    
 }

 export function axiosGetMovieActors(movie_id) {
    return axios.get(`movie/${movie_id}/credits?api_key=${KEY}`);
    
 }

 export function axiosGetReviewsFilms(movie_id) {
    return axios.get(`movie/${movie_id}/reviews?api_key=${KEY}`);
    
 }

 
 export function axiosGetSearchFilms(name) {
    return axios.get(`/search/movie?api_key=${KEY}&query=${name}`);
    
 }