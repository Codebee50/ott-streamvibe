import { useLayoutEffect } from "react";
import { useRef } from "react";

const ReleasedMovieCard = (props) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    props.onCardRendered(ref.current.clientWidth);
  }, []);

  function constructTmdbImageLink(path) {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }

  return (
    <div className="bg-black10 h-max w-max p-4 rounded-lg" ref={ref}>
      <div className="w-[224px] rounded-lg relative flex">
        <div className="w-full h-full">
          <img
            src={constructTmdbImageLink(props.posterPath)}
            className="w-full h-[281px] object-center object-cover rounded-lg"
            alt=""
          />
        </div>

        {/* <div className="absolute w-full h-full z-10 bg-gradient-to-t from-page-black"></div> */}
      </div>

      <div className="flex flex-row items-center justify-between mt-4">
        <div className="bg-black08 py-1 px-3 rounded-full border-[2px] border-strokeBlack w-full">
          <div className="w-full text-center">
            <p className="text-gray60 font-manrope text-center">Released at {props.releaseDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReleasedMovieCard;
