import { useLayoutEffect } from "react";
import { useRef } from "react";
import { HiEye, HiStar } from "react-icons/hi";
import { RiMovie2Line } from "react-icons/ri";

const MustWatchMovieCard = (props) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    props.onCardRendered(ref.current.clientWidth);
  }, []);

  function constructTmdbImageLink(path) {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }

  return (
    <div className="bg-black10 h-max w-max p-4 rounded-lg" ref={ref}>
      <div className="rounded-lg relative flex">
        <div className="w-max h-max">
          <img
            src={constructTmdbImageLink(props.posterPath)}
            className="w-[253px] h-[324px] object-center object-cover rounded-lg"
            alt=""
          />
        </div>

        {/* <div className="absolute w-full h-full z-10 bg-gradient-to-t from-page-black"></div> */}
      </div>

      <div className="flex flex-row items-center justify-between mt-4 mb-2">
        <div className="bg-black08 py-2 px-2 rounded-full border-[2px] border-strokeBlack">
          <div className="flex flex-row items-center gap-1">
            <RiMovie2Line
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
              <HiStar className="fill-red45" size={"0.9em"} />
              <HiStar className="fill-red45" size={"0.9em"} />
              <HiStar className="fill-red45" size={"0.9em"} />
              <HiStar className="fill-red45" size={"0.9em"} />
              <HiStar className="fill-gray60" size={"0.9em"} />
            </div>

            <p className="text-gray60 font-manrope text-[0.7rem]">
              {props.seenCount}k
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MustWatchMovieCard;
