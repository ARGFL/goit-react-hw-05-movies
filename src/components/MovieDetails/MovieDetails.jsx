import { useEffect, useState, Suspense } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import { getMovieDetails } from "../services/movieAPI";
import styles from "./MovieDetails.module.css";

function MovieDetails() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        getMovieDetails(movieId).then(setMovie);
    }, [movieId]);

    if (!movie) return <p>Loading movie details...</p>;

    return (
        <div className={styles.container}>
            <Link to="/" className={styles.backButton}>&larr; Go back</Link>
            <div className={styles.detailsWrapper}>
                <img
                    src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://via.placeholder.com/300x450?text=No+Image"}
                    alt={movie.title}
                    className={styles.poster}
                />
                <div className={styles.details}>
                    <h1>{movie.title} ({movie.release_date?.slice(0, 4)})</h1>
                    <p><strong>User Score:</strong> {Math.round(movie.vote_average * 10)}%</p>
                    <h3>Overview</h3>
                    <p>{movie.overview}</p>
                    <h3>Genres</h3>
                    <p>{movie.genres.map(g => g.name).join(", ")}</p>
                </div>
            </div>

            <div className={styles.additionalInfo}>
                <h3>Additional information</h3>
                <ul>
                    <li><Link to="cast">Cast</Link></li>
                    <li><Link to="reviews">Reviews</Link></li>
                </ul>
            </div>

            <Suspense fallback={<p>Loading...</p>}>
                <Outlet />
            </Suspense>
        </div>
    );
}

export default MovieDetails;

