import { useEffect, useState, useCallback, useRef } from "react";
import MovieCollectionCard from "../components/MovieCollectionCard";
import SlideIndicator from "../components/SlideIndicator";
import TextL from "../components/TextL";
import TextSm from "../components/TextSm";
import SolidSlideIndicator from "../components/SolidSlideIndicator";

const Categories = () => {
  const [genreList, setGenreList] = useState([]);
  const [moviesList, setMoviesList] = useState([]);
  const categoriesContainerRef = useRef();
  const [scrollIndex, setScrollIndex] = useState(0);
  const [scrollLeft, setSCrollLeft] = useState(0);
  
  function getjson(url, errorMsg = "Something went wrong") {
    return fetch(url).then((response) => {
      if (!response.ok) throw new Error(`${errorMsg}: ${response.status}`);
      return response.json();
    });
  }

  const getMoviesList = useCallback(async () => {
    const genreIds = genreList.map((genre) => genre.id);
    const movies = [];

    console.log(genreIds.join('|'))
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
      });
  }

  function leftSlideHandler() {
    categoriesContainerRef.current.scrollLeft -=
      categoriesContainerRef.current.getBoundingClientRect().width;

    // 😝😝
    // if (scrollIndex - 1 >= 0) {
    //   setScrollIndex((prevIndex) => prevIndex - 1);
    // }
  }

  function rightSlideHandler() {
    categoriesContainerRef.current.scrollLeft +=
      categoriesContainerRef.current.getBoundingClientRect().width;

    // if (getSlideRatio() - scrollIndex > 0 || scrollIndex === 0) {
    //   setScrollIndex((prevIndex) => prevIndex + 1);
    // }
  }

  // num of items * width of individual item/ window.innerWidth
  useEffect(() => {
    fetchGenres();
  }, []);

  useEffect(() => {
    const scrollLeftDebouncer = setTimeout(() => {
      const containerWidth =
        categoriesContainerRef.current.getBoundingClientRect().width;

      setScrollIndex(Math.floor(scrollLeft / containerWidth));
    }, 200);

    return () => {
      clearTimeout(scrollLeftDebouncer);
    };
  }, [scrollLeft]);

  function slideScrollHandler(event) {
    setSCrollLeft(event.target.scrollLeft);
  }

  function getSlideRatio() {
    const slideRatio =
      (genreList.length * 236) /
      categoriesContainerRef?.current?.getBoundingClientRect().width;
    return slideRatio || null;
  }

  function getPercentageScrolled() {
    return (scrollLeft / (genreList.length * 236)) * 100;
  }

  return (
    <section className="w-full min-h-[2vh] bg-page-black padding-x max-container flex flex-col pt-[35vh] pb-[20vh]">
      <div className="w-full flex flex-row items-center justify-between ">
        <div className="flex flex-col items-start">
          <TextL text="Explore our wide variety of categories" />
          <TextSm text="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new" />
        </div>

        <div>
          {!(window.innerWidth < 820) && (
            <SlideIndicator
              onRightClick={rightSlideHandler}
              onLeftClick={leftSlideHandler}
              slideRatio={getSlideRatio()}
              scrollIndex={scrollIndex}
            />
          )}
        </div>
      </div>

      <div
        className="mt-10 w-full flex flex-row overflow-x-scroll gap-3 no-scrollbar"
        ref={categoriesContainerRef}
        onScroll={slideScrollHandler}
      >
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

        {
          window.innerWidth < 820 && (
            <div className="mt-7 w-full flex items-center justify-center">
            <SolidSlideIndicator value={getPercentageScrolled()} />
          </div>
          )
        }
   
    </section>
  );
};

export default Categories;
