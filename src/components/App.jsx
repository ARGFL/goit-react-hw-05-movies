import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "../components/Layout"; 

// Lazy loading for better performance
const Home = lazy(() => import("../components/pages/Home"));
const Movies = lazy(() => import("../components/pages/Movies"));
const MovieDetailsPage = lazy(() => import("../components/MovieDetails/MovieDetails"));
const Cast = lazy(() => import("../components/Cast/Cast"));
const Reviews = lazy(() => import("../components/Reviews/Reviews"));

function App() {
    return (
        <Router basename="/goit-react-hw-05-movies"> {/*  Ensure correct basename for GitHub Pages */}
            <Suspense fallback={<p>Loading...</p>}>  {/* Suspense for lazy loading */}
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="movies" element={<Movies />} />
                        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
                            <Route path="cast" element={<Cast />} />
                            <Route path="reviews" element={<Reviews />} />
                        </Route>
                    </Route>
                    {/* 404 Fallback */}
                    <Route path="*" element={<p>Page not found</p>} />
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;



