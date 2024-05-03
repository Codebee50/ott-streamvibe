import { constructTmdbImageLink } from "../constants";
import { imageErrorHandler } from "../constants";
import RoundBgIcon from "./RoundBgIcon";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import { useRef } from "react";
import DetailCard from "./DetailCard";
import TextSmVariant from "./TextSmVariant";

const RenderCastList = (props) => {
  const castContainerRef = useRef();

  function scrollContainerLeftByWidth(container) {
    container.scrollLeft -= container.clientWidth;
  }

  function scrollContainerRightByWidth(container) {
    container.scrollLeft += container.clientWidth;
  }
  return (
    <DetailCard className={"flex flex-col"}>
      <div className="flex flex-row w-full justify-between items-center">
        <TextSmVariant text={"Cast"} />
        <div className="flex flex-row items-center gap-[7px]">
          <RoundBgIcon
            icon={HiArrowLeft}
            onClick={scrollContainerLeftByWidth.bind(
              null,
              castContainerRef.current
            )}
          />
          <RoundBgIcon
            icon={HiArrowRight}
            onClick={scrollContainerRightByWidth.bind(
              null,
              castContainerRef.current
            )}
          />
        </div>
      </div>
      <div
        className="flex flex-row items-center w-full overflow-x-scroll no-scrollbar mt-5"
        ref={castContainerRef}
      >
        {props.castList
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
  );
};

export default RenderCastList;
