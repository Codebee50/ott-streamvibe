import { HiArrowDown } from "react-icons/hi2";
import RoundBgIcon from "./RoundBgIcon";
import TextSmVariant from "./TextSmVariant";
import { ImSpinner8 } from "react-icons/im";
import { Fragment, useState } from "react";
import { HiArrowUp } from "react-icons/hi";
import { TMDB_API_TOKEN } from "../constants";
import RenderEpisodesList from "./RenderEpisodesList";

const SeasonCard = (props) => {
  const [cardState, setCardState] = useState("closed"); //open, closed, loading
  const [episodesList, setEpisodesList] = useState([]);

  function getDisplayIcon() {
    if (cardState === "loading") {
      return ImSpinner8;
    }

    if (cardState === "closed") {
      return HiArrowDown;
    }

    if (cardState === "open") {
      return HiArrowUp;
    }
  }

  function cardClickedHandler() {
    setCardState("loading");

    if (episodesList.length > 0) {
      setCardState(cardState === "open" ? "closed" : "open");
      return; //display episodes using the list
    } else {
      fetch(
        `https://api.themoviedb.org/3/tv/${props.seriesId}/season/${props.season.season_number}?api_key=${TMDB_API_TOKEN}`
      )
        .then((response) => {
          if (!response.ok) {
            setCardState("closed");
            alert(
              `Error fetching episodes for ${props.season.name} please try again`
            );
            return {};
          }

          return response.json();
        })
        .then((data) => {
          setEpisodesList(data.episodes);
          setCardState("open");
        })
        .catch((error) => {
          alert(
            `Error fetching episodes for ${props.season.name} please try again`
          );
          console.log(error);
          setCardState("closed");
        });
    }
  }

  return (
    <Fragment>
      <div
        className="py-4 px-5 border-[0.8px] border-strokeBlack  bg-black06 rounded-md w-full flex flex-col"
        onClick={cardClickedHandler}
      >
        <div className="w-full flex flex-row items-center justify-between cursor-pointer">
          <div className="flex flex-row gap-2 items-start flex-wrap">
            <p className="text-white font-semibold font-manrope">
              {props.season.name}
            </p>
            <TextSmVariant
              text={`${props.season.episode_count} Episodes`}
              className="text-[0.75re]"
            />
          </div>

          <RoundBgIcon
            icon={getDisplayIcon()}
            loading={cardState === "loading"}
          />
        </div>

        {cardState === "open" && (
          <RenderEpisodesList
            episodesList={episodesList}
            poster_path={props.season.poster_path}
          />
        )}
      </div>
    </Fragment>
  );
};

export default SeasonCard;
