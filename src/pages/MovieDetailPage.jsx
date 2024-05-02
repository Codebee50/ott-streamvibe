import { Fragment, useState } from "react";
import NavAndDrawer from "../components/NavAndDrawer";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import BigPictureHeading from "../components/BigPictureHeading";

const MovieDetailPage = () => {
  const [searchParams] = useSearchParams();
  const movieId = searchParams.get("id");
  const [movie, setMovie] = useState({});

  function fetchMovie() {
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
  }

  function constructTmdbImageLink(path) {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <Fragment>
      <NavAndDrawer page="Movies & Shows" />
      <BigPictureHeading
        imageUrl={constructTmdbImageLink(movie.poster_path)}
        title={movie.title}
        overview={movie.overview}
      />
    </Fragment>
  );
};

export default MovieDetailPage;
