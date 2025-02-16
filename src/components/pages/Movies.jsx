import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { searchMovies } from "../services/movieAPI";
import styles from "./Movies.module.css";

function Movies() {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query") || "";

    useEffect(() => {
        if (query) {
            searchMovies(query)
                .then((results) => {
                    if (results.length > 0) {
                        setMovies(results);
                    } else {
                        setMovies([]);
                    }
                })
                .catch((error) => {
                    console.error("Error fetching search results:", error);
                    setMovies([]);
                });
        }
    }, [query]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const searchValue = form.elements.query.value.trim();
        if (!searchValue) return;
        setSearchParams({ query: searchValue });
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.searchForm}>
                <input
                    type="text"
                    name="query"
                    defaultValue={query}
                    placeholder="Search for a movie..."
                    className={styles.searchInput}
                />
                <button type="submit" className={styles.searchButton}>Search</button>
            </form>

            {movies.length > 0 ? (
                <ul className={styles.movieList}>
                    {movies.map((movie) => (
                        <li key={movie.id}>
                            <Link to={`/movies/${movie.id}`}>
                                {movie.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : query ? (
                <p>No results found for "{query}"</p>
            ) : (
                <p>Search for a movie</p>
            )}
        </div>
    );
}


export default Movies;