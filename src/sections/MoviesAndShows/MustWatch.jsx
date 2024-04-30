import { useEffect, useState } from "react";
import ImagesHorizonalSlider from "../../components/ImagesHorizonalSlider";
import MustWatchMovieCard from "../../components/MustWatchMovieCard";

const MustWatch = () => {
  const [mustWatchMovieList, setMustWatchMovieList] = useState([]);

  function fetchTrendingMovies() {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${
        import.meta.env.VITE_TMDP_API_TOKEN
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setMustWatchMovieList(data.results);
      });
  }

  useEffect(() => {
    fetchTrendingMovies();
  }, []);
  return (
    <ImagesHorizonalSlider
      className="pt-[5vh] pb-[6vh]"
      mainList={mustWatchMovieList.map((item) => {
        return {
          id: item.id,
          seenCount: Math.floor(item.vote_average),
          posterPath: item.poster_path,
          title: item.title,
        };
      })}
      component={MustWatchMovieCard}
      headerText={"Must - Watch Movies"}
    />
  );
};

export default MustWatch;
