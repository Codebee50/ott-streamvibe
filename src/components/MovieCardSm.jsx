import { useLayoutEffect } from "react";
import { useRef } from "react";
import { HiClock, HiEye } from "react-icons/hi";

const MovieCardSm = (props) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    props.onCardRendered(ref.current.clientWidth);
  }, []);

  function constructTmdbImageLink(path){
    return `https://image.tmdb.org/t/p/w500${path}`
  }

  return (
    <div className="bg-black10 h-max w-max p-4 rounded-lg" ref={ref}>
      <div className="w-[224px] rounded-lg relative flex">
        <div className="w-full h-full">
            <img src={constructTmdbImageLink(props.posterPath)} className="w-full h-[281px] object-center object-cover rounded-lg" alt="" />
        </div>

        {/* <div className="absolute w-full h-full z-10 bg-gradient-to-t from-page-black"></div> */}
      </div>

      <div className="flex flex-row items-center justify-between mt-4">
        <div className="bg-black08 py-2 px-3 rounded-full border-[2px] border-strokeBlack">
            <div className="flex flex-row items-center gap-1">
                <HiClock className="fill-gray60" size={'1.5em'}/>
                <p className="text-gray60 font-manrope">{"1h 30min"}</p>
            </div>
        </div>

        <div className="bg-black08 py-2 px-3 rounded-full border-[2px] border-strokeBlack">
            <div className="flex flex-row items-center gap-1">
                <HiEye className="fill-gray60" size={'1.5em'}/>
                <p className="text-gray60 font-manrope">{props.seenCount}k</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCardSm;
