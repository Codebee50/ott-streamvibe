import { useEffect, useRef, useState } from "react";
import DetailCard from "../../components/DetailCard";
import TextSmVariant from "../../components/TextSmVariant";
import { constructTmdbImageLink } from "../../constants";
import { imageErrorHandler } from "../../constants";
import RoundBgIcon from "../../components/RoundBgIcon";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";

const DetailSection = (props) => {
  const [castList, setCastList] = useState([]);
  const castContainerRef = useRef();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        props.movie.id
      }/credits?language=en&api_key=${import.meta.env.VITE_TMDP_API_TOKEN}`
    )
      .then((response) => response.json())
      .then((data) => {
        setCastList(data.cast);
      });
  }, []);

  function scrollCastContainerLeft() {
    castContainerRef.current.scrollLeft -=
      castContainerRef.current?.clientWidth;
  }

  function scrollCastContainerRight() {
    castContainerRef.current.scrollLeft += castContainerRef.current.clientWidth;
  }

  return (
    <section className="w-full padding-x pt-28 max-container min-h-[30vh] bg-page-black flex flex-row gap-3 pb-5">
      <div className="w-[60%] flex flex-col gap-4">
        <DetailCard className={"flex flex-col"}>
          <TextSmVariant text={"Description"} />
          <TextSmVariant
            text={props.movie.overview}
            className={"text-white mt-2 text-[0.9rem]"}
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

      <div className="w-[40%] h-10"></div>
    </section>
  );
};

export default DetailSection;
