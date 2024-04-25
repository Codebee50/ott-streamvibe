import { useEffect, useState, useCallback } from "react";
import MovieCollectionCard from "../components/MovieCollectionCard";
import SlideIndicator from "../components/SlideIndicator";
import TextL from "../components/TextL";
import TextSm from "../components/TextSm";

const Categories = () => {
  const [genreList, setGenreList] = useState([]);
  const [transformedGenreList, setTransformedGenreList] = useState([]);
  const [moviesList, setMoviesList] = useState([]);

  function getjson(url, errorMsg = "Something went wrong") {
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
      ]);

      data.forEach((item) => {
        item.results.forEach((item) => {
          movies.push(item);
        });
      });
      setMoviesList(movies);
    }
  }, [genreList]);

  useEffect(() => {
    getMoviesList();
  }, [getMoviesList]);

  async function getImageLinks(genreId, genreName) {
    let foundNum = 0;
    let imageLInks = [];

    if (foundNum < 4) {
      const responose = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${
          import.meta.env.VITE_TMDP_API_TOKEN
        }&with_genres=${genreId}`
      );

      if (responose.ok) {
        const movieGenre = await responose.json();
        movieGenre.results.forEach((movie) => {
          if (foundNum >= 4) {
            return;
          }

          if (movie.genre_ids.includes(genreId)) {
            imageLInks.push(movie.poster_path);
            foundNum += 1;
          }
        });
      }
    }

    return {
      id: genreId,
      name: genreName,
      imageLinks: imageLInks,
    };
  }

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
      });
  }

  const transformGenreList = useCallback(async () => {
    try {
      const genreMovies = await Promise.all(
        genreList.map((genre) => getImageLinks(genre.id, genre.name))
      );
      setTransformedGenreList(genreMovies);
    } catch (err) {
      console.error(err);
    }
  }, [genreList]);

  useEffect(() => {
    fetchGenres();
  }, []);

  return (
    <section className="w-full min-h-[2vh] bg-page-black padding-x max-container flex flex-col pt-[35vh] pb-[20vh]">
      <div className="w-full flex flex-row items-center justify-between ">
        <div className="flex flex-col items-start">
          <TextL text="Explore our wide variety of categories" />
          <TextSm text="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new" />
        </div>

        <div>
          <SlideIndicator />
        </div>
      </div>

      <div className="mt-10 w-full flex flex-row overflow-x-scroll gap-3 no-scrollbar">
        {genreList.map((genreItem) => {
          const posterPaths = fechPosterImagesByGenreId(genreItem.id);
          return (
            <MovieCollectionCard
              key={genreItem.id}
              name={genreItem.name}
              imageLinks={posterPaths}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Categories;
