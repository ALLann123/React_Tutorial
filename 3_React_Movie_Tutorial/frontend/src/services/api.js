const API_KEY = "GET API FROM 'https://www.themoviedb.org/settings/api'";
const BASE_URL = "https://api.themoviedb.org/3";

//send a request to our API
export const getPopularMovies = async() => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json()
        //this is a dictionary now we use the key to access the result
    return data.results
};

//send a request to our API
export const searchMovies = async(query) => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json()
        //this is a dictionary now we use the key to access the result
    return data.results
};