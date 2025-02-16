import { useEffect, useState } from "react";
import { getTrendingMovies } from "../services/movieAPI";
import { Link } from "react-router-dom";
import styles from "./Home.module.css"; 

function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getTrendingMovies().then(setMovies);
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Trending Today</h1>
            <ul className={styles.movieList}>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;



