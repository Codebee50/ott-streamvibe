import { useEffect, useState, useCallback } from "react";
import CardBlocks from "../components/ImagesHorizonalSlider";
import MovieCollectionCard from "../components/MovieCollectionCard";

const Categories = () => {
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

    console.log(genreIds.join("|"));
    if (genreIds.length > 0) {
      const data = await Promise.all([
        getjson(
          `https://api.themoviedb.org/3/discover/movie?language=en&api_key=${
            import.meta.env.VITE_TMDP_API_TOKEN
          }&with_genres=${genreIds.join("|")}&page=1`
        ),
        getjson(
          `https://api.themoviedb.org/3/discover/movie?language=en&api_key=${
            import.meta.env.VITE_TMDP_API_TOKEN
          }&with_genres=${genreIds.join("|")}&page=2`
        ),
        getjson(
          `https://api.themoviedb.org/3/discover/movie?language=en&api_key=${
            import.meta.env.VITE_TMDP_API_TOKEN
          }&with_genres=${genreIds.join("|")}&page=3`
        ),
        getjson(
          `https://api.themoviedb.org/3/discover/movie?language=en&api_key=${
            import.meta.env.VITE_TMDP_API_TOKEN
          }&with_genres=99|10402|10770&page=5`
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
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${
        import.meta.env.VITE_TMDP_API_TOKEN
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setGenreList(data.genres);
      })
      .catch(err=>{
        console.log('Error loading genre in categories', err)
      })
  }

  // num of items * width of individual item/ window.innerWidth
  useEffect(() => {
    fetchGenres();
  }, []);

  return (
    <CardBlocks
      className={"pt-[35vh] pb-[10vh] sm:pb-[15vh]"}
      mainList={genreList.map((genre) => {
        const posterPaths = fechPosterImagesByGenreId(genre.id);
        return {
          id: genre.id,
          name: genre.name,
          imageLinks: posterPaths,
        };
      })}
      component={MovieCollectionCard}
      headerText={"Explore our wide variety of categories"}
      descText={
        "Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
      }
    />
  );
};

export default Categories;
