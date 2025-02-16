import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../services/movieAPI";
import PropTypes from "prop-types";
import styles from "./Cast.module.css";

function Cast() {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        getMovieCredits(movieId)
            .then(data => {
                if (data && data.cast) {
                    setCast(data.cast);
                } else {
                    setCast([]);
                }
            })
            .catch(err => {
                console.error("Error fetching cast:", err);
                setError("Failed to load cast information.");
            })
            .finally(() => setLoading(false));
    }, [movieId]);

    if (loading) return <p>Loading cast...</p>;
    if (error) return <p className={styles.error}>{error}</p>;
    if (!cast.length) return <p>No cast information available.</p>;

    return (
        <div className={styles.castList}>
            {cast.map(actor => (
                <div key={actor.id} className={styles.castItem}>
                    <img 
                        src={actor.profile_path 
                            ? `https://image.tmdb.org/t/p/w200${actor.profile_path}` 
                            : "https://via.placeholder.com/100x150?text=No+Image"} 
                        alt={actor.name || "Unknown Actor"} 
                        className={styles.castImage}
                    />
                    <p><strong>{actor.name || "Unknown"}</strong></p>
                    <p>Character: {actor.character || "N/A"}</p>
                </div>
            ))}
        </div>
    );
}

// ✅ Add PropTypes to ensure correct props
Cast.propTypes = {
    cast: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string,
            character: PropTypes.string,
            profile_path: PropTypes.string,
        })
    )
};

export default Cast;
