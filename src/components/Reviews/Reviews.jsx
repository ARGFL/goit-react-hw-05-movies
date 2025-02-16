import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../services/movieAPI";
import styles from "./Reviews.module.css";

function Reviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        getMovieReviews(movieId)
            .then(data => {
                if (data && data.length > 0) {
                    setReviews(data);
                } else {
                    setReviews([]);
                }
            })
            .catch(err => {
                console.error("Error fetching reviews:", err);
                setError("Failed to load reviews.");
            })
            .finally(() => setLoading(false));
    }, [movieId]);

    if (loading) return <p>Loading reviews...</p>;
    if (error) return <p className={styles.error}>{error}</p>;
    if (!reviews.length) return <p>No reviews available for this movie.</p>;

    return (
        <div className={styles.reviewList}>
            {reviews.map(review => (
                <div key={review.id} className={styles.reviewItem}>
                    <h3>Author: {review.author}</h3>
                    <p>{review.content}</p>
                    {review.url && (
                        <a href={review.url} target="_blank" rel="noopener noreferrer">
                            Read full review
                        </a>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Reviews;
