const API_KEY = process.env.REACT_APP_TMDB_API_KEY; 
const BASE_URL = "https://api.themoviedb.org/3";

/**
 * Fetches the trending movies of the day.
 */
export async function getTrendingMovies() {
    try {
        const response = await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US`);
        const data = await response.json();
        return data.results || [];
    } catch (error) {
        console.error("Error fetching trending movies:", error);
        return [];
    }
}

/**
 * Searches for movies based on a keyword.
 * @param {string} query - The search query.
 */
export async function searchMovies(query) {
    try {
        if (!query) return []; // Prevents unnecessary API calls
        const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US`);
        const data = await response.json();
        return data.results || [];
    } catch (error) {
        console.error("Error searching for movies:", error);
        return [];
    }
}

/**
 * Fetches the details of a specific movie by ID.
 * @param {string} movieId - The ID of the movie.
 */
export async function getMovieDetails(movieId) {
    try {
        if (!movieId) return null;
        const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
        return response.json();
    } catch (error) {
        console.error(`Error fetching details for movie ID ${movieId}:`, error);
        return null;
    }
}

/**
 * Fetches the cast information for a given movie ID.
 * @param {string} movieId - The ID of the movie.
 */
export async function getMovieCredits(movieId) {
    try {
        if (!movieId) return { cast: [] };
        const response = await fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
        return response.json();
    } catch (error) {
        console.error(`Error fetching cast for movie ID ${movieId}:`, error);
        return { cast: [] };
    }
}

/**
 * Fetches movie reviews for a given movie ID.
 * @param {string} movieId - The ID of the movie.
 */
export async function getMovieReviews(movieId) {
    try {
        if (!movieId) return [];
        const response = await fetch(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`);
        const data = await response.json();
        return data.results || [];
    } catch (error) {
        console.error(`Error fetching reviews for movie ID ${movieId}:`, error);
        return [];
    }
}

