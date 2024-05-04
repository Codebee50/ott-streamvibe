import { HiArrowRight } from "react-icons/hi";
import defaultbg from "../assets/images/defaultbg.png";
import { useLayoutEffect } from "react";
import { useRef } from "react";

const MovieCollectionCard = (props) => {
  const ref = useRef(null);

  const getGenreListLink = (genreId, contentType) => {
    console.log("getting link");

    return `/moviesandshows?tab=genre&id=${genreId}&content=${contentType}&page=1`;
  };

  useLayoutEffect(() => {
    props.onCardRendered(ref.current.clientWidth);
  }, []);

  return (
    <a
      className="bg-black10 h-max w-max p-4 rounded-lg"
      ref={ref}
      href={getGenreListLink(props.id, props.type)}
    >
      <div className="w-[235px] h-[252px] rounded-lg relative flex">
        <div className="w-full h-full grid grid-cols-2 gap-[2px]">
          {props.imageLinks.map((imageLink, index) => (
            <img
              key={`img-${props.name}-${index}`}
              src={
                imageLink !== "empty"
                  ? `https://image.tmdb.org/t/p/w500${imageLink}`
                  : defaultbg
              }
              alt=""
              className="object-cover object-center w-[115px] h-[120px] rounded-lg"
              width={115}
              height={120}
            />
          ))}
        </div>

        <div className="absolute w-full h-full z-10 bg-gradient-to-t from-page-black"></div>
      </div>

      <div className="flex flex-row items-center justify-between mt-2">
        <p className="text-white font-manrope">{props.name}</p>
        <HiArrowRight fill="#ffffff" width={30} height={30} />
      </div>
    </a>
  );
};

export default MovieCollectionCard;
