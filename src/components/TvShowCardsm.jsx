import { useLayoutEffect } from "react";
import { useRef } from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { PiTelevisionSimple } from "react-icons/pi";
import defaultbg from "../assets/images/defaultbg.png";
import { getShowDetailLink } from "../constants";

const TvShowCardsm = (props) => {
  const ref = useRef(null);

  const { onCardRendered } = props;

  useLayoutEffect(() => {
    onCardRendered(ref.current.clientWidth);
  }, [onCardRendered]);

  function constructTmdbImageLink(path) {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }

  function onImageErrorHandler(event) {
    event.target.src = defaultbg;
  }

  return (
    <a
      className="bg-black10 h-max w-max p-4 rounded-lg"
      ref={ref}
      href={getShowDetailLink(props.id)}
    >
      <div className="rounded-lg relative flex">
        <div className="w-max h-max">
          <img
            src={constructTmdbImageLink(props.posterPath)}
            className="w-[253px] h-[324px] object-center object-cover rounded-lg"
            alt=""
            onError={onImageErrorHandler}
          />
        </div>
      </div>

      <div className="flex flex-row items-center justify-between mt-4 mb-2">
        <div className="bg-black08 py-2 px-2 rounded-full border-[2px] border-strokeBlack">
          <div className="flex flex-row items-center gap-1">
            <PiTelevisionSimple
              className="fill-gray60 flex-shrink-0"
              size={"0.9em"}
            />
            <p className="text-gray60 font-manrope text-[0.7rem] line-clamp-1 max-w-[90px]">
              {props.title}
            </p>
          </div>
        </div>

        <div className="bg-black08 py-2 px-2 rounded-full border-[2px] border-strokeBlack">
          <div className="flex flex-row items-center gap-1">
            <div className="flex flex-row">
              <MdOutlineDateRange className="fill-gray60" size={"0.9em"} />
            </div>

            <p className="text-gray60 font-manrope text-[0.7rem]">
              {props.date}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default TvShowCardsm;
