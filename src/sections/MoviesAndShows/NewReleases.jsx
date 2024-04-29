import { useEffect, useState } from "react";
import ImagesHorizonalSlider from "../../components/ImagesHorizonalSlider";
import ReleasedMovieCard from "../../components/ReleasedMovieCard";


const NewReleases = () => {
  const [trendingMovieList, setTrendingMovieList] = useState([]);

  function fetchTrendingMovies() {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${
        import.meta.env.VITE_TMDP_API_TOKEN
      }&sort_by=primary_release_date.desc`
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
      className="pt-[5vh] pb-[10vh] sm:pb-[15vh]"
      mainList={trendingMovieList.map((item) => {
        return {
          id: item.id,
          posterPath: item.poster_path,
          releaseDate: item.release_date
        };
      })}
      component={ReleasedMovieCard}
      headerText={"New Releases"}
    />
  );
};

export default NewReleases;
