import { Fragment, useCallback, useState } from "react";
import NavAndDrawer from "../components/NavAndDrawer";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import BigPictureHeading from "../components/BigPictureHeading";
import DetailSection from "../sections/MovieDetail/DetailSection";
import StartFreeTrialSection from "../sections/StartFreeTrialSection";
import Footer from "../sections/Footer";

const MovieDetailPage = () => {
  const [searchParams] = useSearchParams();
  const movieId = searchParams.get("id");
  const [movie, setMovie] = useState({});

  const fetchMovie = useCallback(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${
        import.meta.env.VITE_TMDP_API_TOKEN
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
      })
      .catch((err) => {
        console.log("Error loading genre in categories", err);
      });
  }, [movieId]);

  function constructTmdbImageLink(path) {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }

  useEffect(() => {
    fetchMovie();
  }, [fetchMovie]);

  return (
    <Fragment>
      <NavAndDrawer page="Movies & Shows" />
      <BigPictureHeading
        imageUrl={constructTmdbImageLink(movie.poster_path)}
        title={movie.title}
        overview={movie.overview}
      />

      {movie?.title && <DetailSection movie={movie} />}
      <StartFreeTrialSection />
      <Footer />
    </Fragment>
  );
};

export default MovieDetailPage;
