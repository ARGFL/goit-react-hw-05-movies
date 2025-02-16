import { useParams } from "react-router-dom";
import MovieDetails from "../../components/MovieDetails/MovieDetails";

function MovieDetailsPage() {
  const { movieId } = useParams();
  
  return <MovieDetails movieId={movieId} />;
}

export default MovieDetailsPage;
