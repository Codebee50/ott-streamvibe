import { useEffect, useRef, useState } from "react";
import DetailCard from "../../components/DetailCard";
import TextSmVariant from "../../components/TextSmVariant";
import { constructTmdbImageLink } from "../../constants";
import { imageErrorHandler } from "../../constants";
import RoundBgIcon from "../../components/RoundBgIcon";
import {
  HiArrowLeft,
  HiArrowRight,
  HiOutlineCalendar,
  HiOutlineLanguage,
} from "react-icons/hi2";
import DetailHeading from "../../components/DetailHeading";
import BgBlackStrokeCard from "../../components/BgBlackStrokeCard";
import { RiAppsLine } from "react-icons/ri";
import CrewMember from "../../components/CrewMember";

const DetailSection = (props) => {
  const [castList, setCastList] = useState([]);
  const [crewList, setCrewList] = useState([]);
  const castContainerRef = useRef();
  const releaseDate = props.movie.release_date.split("-")[0];
  const director = getMovieDirector();
  const musicEngineer = getMusicEngineer();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        props.movie.id
      }/credits?language=en&api_key=${import.meta.env.VITE_TMDP_API_TOKEN}`
    )
      .then((response) => response.json())
      .then((data) => {
        setCastList(data.cast);
        setCrewList(data.crew);
      });
  }, []);

  function scrollCastContainerLeft() {
    castContainerRef.current.scrollLeft -=
      castContainerRef.current?.clientWidth;
  }

  function scrollCastContainerRight() {
    castContainerRef.current.scrollLeft += castContainerRef.current.clientWidth;
  }

  function getMovieDirector() {
    const director = crewList.find((crew) => crew.job === "Director");

    if (director) return director;

    return crewList.find((crew) => crew.department === "Directing");
  }

  function getMusicEngineer() {
    const musicEngineer = crewList.find(
      (crew) => crew.job === "Original Music Composer"
    );

    if (musicEngineer) return musicEngineer;

    return crewList.find((crew) => crew.department === "Sound");
  }

  return (
    <section className="w-full padding-x pt-28 max-container min-h-[30vh] bg-page-black flex flex-col-reverse s-2:flex-row gap-3 pb-5">
      <div className="w-full s-2:w-[60%] flex flex-col gap-4">
        <DetailCard className={"hidden s-2:flex flex-col"}>
          <TextSmVariant text={"Description"} />
          <TextSmVariant
            text={props.movie.overview}
            className={"text-white mt-2 text-[0.9rem] leading-6"}
          />
        </DetailCard>

        <DetailCard className={"flex flex-col"}>
          <div className="flex flex-row w-full justify-between items-center">
            <TextSmVariant text={"Cast"} />
            <div className="flex flex-row items-center gap-[7px]">
              <RoundBgIcon
                icon={HiArrowLeft}
                onClick={scrollCastContainerLeft}
              />
              <RoundBgIcon
                icon={HiArrowRight}
                onClick={scrollCastContainerRight}
              />
            </div>
          </div>
          <div
            className="flex flex-row items-center w-full overflow-x-scroll no-scrollbar mt-5"
            ref={castContainerRef}
          >
            {castList
              .filter((cast) => cast.profile_path !== null)
              .map((cast) => (
                <div
                  key={`cast-${cast.id}`}
                  className="w-[89px] h-[89px] shrink-0 rounded-lg mx-[3px]"
                >
                  <img
                    src={constructTmdbImageLink(cast.profile_path)}
                    alt={cast.original_name}
                    className="w-full h-full object-cover object-center rounded-lg"
                    onError={imageErrorHandler}
                  />
                </div>
              ))}
          </div>
        </DetailCard>
      </div>

      <div className="w-full s-2:w-[40%] flex flex-col gap-3">
        <DetailCard className={"flex s-2:hidden flex-col"}>
          <TextSmVariant text={"Description"} />
          <TextSmVariant
            text={props.movie.overview}
            className={"text-white mt-2 text-[0.9rem] leading-6"}
          />
        </DetailCard>
        <DetailCard className="flex flex-col gap-5">
          <div className="flex flex-col">
            <DetailHeading icon={HiOutlineCalendar} text="Released Year" />
            <p className="text-white font-manrope mt-2">{releaseDate}</p>
          </div>

          <div className="flex flex-col gap-2">
            <DetailHeading
              icon={HiOutlineLanguage}
              text="Available Languages"
            />
            <div className="w-full flex flex-row items-cen flex-wrap">
              {props.movie.spoken_languages.map((language) => (
                <BgBlackStrokeCard key={language.name}>
                  <p className="font-manrope text-white text-sm">
                    {language.english_name}
                  </p>
                </BgBlackStrokeCard>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <DetailHeading icon={RiAppsLine} text="Genres" />
            <div className="w-full flex flex-row items-cen flex-wrap">
              {props.movie.genres.map((genre) => (
                <BgBlackStrokeCard key={genre.name}>
                  <p className="font-manrope text-white text-sm">
                    {genre.name}
                  </p>
                </BgBlackStrokeCard>
              ))}
            </div>
          </div>

          {director && (
            <div className="flex flex-col gap-2">
              <DetailHeading text="Director" />
              <div className="w-full flex flex-row items-cen flex-wrap">
                <CrewMember {...director} />
              </div>
            </div>
          )}

          {musicEngineer && (
            <div className="flex flex-col gap-2">
              <DetailHeading text="Music" />
              <div className="w-full flex flex-row items-cen flex-wrap">
                <CrewMember {...musicEngineer} />
              </div>
            </div>
          )}
        </DetailCard>
      </div>
    </section>
  );
};

export default DetailSection;
