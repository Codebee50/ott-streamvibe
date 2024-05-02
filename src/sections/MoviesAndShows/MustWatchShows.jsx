import { useEffect, useState } from "react";
import ImagesHorizonalSlider from "../../components/ImagesHorizonalSlider";
import MustWatchMovieCard from "../../components/MustWatchMovieCard";

const MustWatchShows = () => {
  const [mustWatchShowsList, setMustWatchShowsList] = useState([]);

  function fetMustWatchShows() {
    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${
        import.meta.env.VITE_TMDP_API_TOKEN
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setMustWatchShowsList(data.results);
      });
  }

  useEffect(() => {
    fetMustWatchShows();
  }, []);
  return (
    <ImagesHorizonalSlider
      className="pt-[5vh] pb-[6vh]"
      mainList={mustWatchShowsList.map((item) => {
        return {
          id: item.id,
          seenCount: Math.floor(item.vote_average),
          posterPath: item.poster_path,
          title: item.original_name,
          type: "show",
        };
      })}
      component={MustWatchMovieCard}
      headerText={"Must - Watch Shows"}
    />
  );
};

export default MustWatchShows;
