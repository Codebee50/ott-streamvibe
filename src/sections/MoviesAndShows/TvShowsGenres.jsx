import { useEffect, useState, useCallback } from "react";
import ImagesHorizonalSlider from "../../components/ImagesHorizonalSlider";
import MovieCollectionCard from "../../components/MovieCollectionCard";
const TvShowsGenres = () => {
  const [genreList, setGenreList] = useState([]);
  const [moviesList, setMoviesList] = useState([]);

  async function getjson(url, errorMsg = "Something went wrong") {
    return fetch(url).then((response) => {
      if (!response.ok) throw new Error(`${errorMsg}: ${response.status}`);
      return response.json();
    });
  }

  const getMoviesList = useCallback(async () => {
    const genreIds = genreList.map((genre) => genre.id);
    const movies = [];
    if (genreIds.length > 0) {
      const data = await Promise.all([
        getjson(
          `https://api.themoviedb.org/3/discover/tv?language=en&api_key=${
            import.meta.env.VITE_TMDP_API_TOKEN
          }&with_genres=${genreIds.join("|")}&page=1`
        ),
        getjson(
          `https://api.themoviedb.org/3/discover/tv?language=en&api_key=${
            import.meta.env.VITE_TMDP_API_TOKEN
          }&with_genres=${genreIds.join("|")}&page=2`
        ),
        getjson(
          `https://api.themoviedb.org/3/discover/tv?language=en&api_key=${
            import.meta.env.VITE_TMDP_API_TOKEN
          }&with_genres=${genreIds.join("|")}&page=3`
        ),
        getjson(
          `https://api.themoviedb.org/3/discover/tv?language=en&api_key=${
            import.meta.env.VITE_TMDP_API_TOKEN
          }&with_genres=16|99|10768`
        ),
      ]);

      data.forEach((item) => {
        item.results.forEach((item) => {
          movies.push(item);
        });
      });
      setMoviesList(movies);
      // setSlideRatio(getSlideRatio());
    }
  }, [genreList]);

  useEffect(() => {
    getMoviesList();
  }, [getMoviesList]);

  function fechPosterImagesByGenreId(genreId) {
    const foundPosters = [];
    moviesList.forEach((movie) => {
      if (foundPosters.length >= 4) {
        return;
      }
      if (movie.genre_ids.includes(genreId)) {
        foundPosters.push(movie.poster_path);
      }
    });

    if (foundPosters.length < 4) {
      for (let i = foundPosters.length; i < 4; i++) {
        foundPosters.push("empty");
      }
    }
    return foundPosters;
  }

  function fetchGenres() {
    fetch(
      `https://api.themoviedb.org/3/genre/tv/list?api_key=${
        import.meta.env.VITE_TMDP_API_TOKEN
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setGenreList(data.genres);
      });
  }

  // num of items * width of individual item/ window.innerWidth
  useEffect(() => {
    fetchGenres();
  }, []);

  return (
    <ImagesHorizonalSlider
      className="pt-[5vh] pb-[6vh]"
      mainList={genreList.map((genre) => {
        const posterPaths = fechPosterImagesByGenreId(genre.id);
        return {
          id: genre.id,
          name: genre.name,
          imageLinks: posterPaths,
          type: "tv",
        };
      })}
      component={MovieCollectionCard}
      headerText={"Our Genres"}
    />
  );
};

export default TvShowsGenres;
