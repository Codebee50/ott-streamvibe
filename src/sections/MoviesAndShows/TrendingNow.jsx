import { useEffect, useState } from "react";
import ImagesHorizonalSlider from "../../components/ImagesHorizonalSlider";
import MovieCardSm from "../../components/MovieCardSm";
const TrendingNow = () => {
  const [trendingMovieList, setTrendingMovieList] = useState([]);

  function fetchTrendingMovies() {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${
        import.meta.env.VITE_TMDP_API_TOKEN
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setTrendingMovieList(data.results);
      });
  }

  useEffect(() => {
    fetchTrendingMovies();
  }, []);
  return (
    <ImagesHorizonalSlider
      className="pt-[5vh] pb-[6vh]"
      mainList={trendingMovieList.map((item) => {
        return {
          id: item.id,
          seenCount: Math.floor(item.vote_average),
          posterPath: item.poster_path
        };
      })}
      component={MovieCardSm}
      headerText={"Trending Now"}
    />
  );
};

export default TrendingNow;
