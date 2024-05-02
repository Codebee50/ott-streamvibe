import { useEffect, useState } from "react";
import ImagesHorizonalSlider from "./ImagesHorizonalSlider";
import TvShowCardsm from "./TvShowCardsm";

const RenderTvShowsCards = (props) => {
  const [mainList, setMainList] = useState([]);

  function fetchList() {
    fetch(
      `${props.endpoint}?api_key=${import.meta.env.VITE_TMDP_API_TOKEN}${
        !props.append ? "" : props.append
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setMainList(data.results);
      });
  }

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <ImagesHorizonalSlider
      className="pt-[5vh] pb-[6vh]"
      mainList={mainList.map((item) => {
        return {
          id: item.id,
          seenCount: Math.floor(item.vote_average),
          posterPath: item.poster_path,
          title: item.original_name,
          date: item.first_air_date,
        };
      })}
      component={TvShowCardsm}
      headerText={props.title}
    />
  );
};

export default RenderTvShowsCards;
