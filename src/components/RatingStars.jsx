import { HiStar } from "react-icons/hi2";
import BgBlackStrokeCard from "./BgBlackStrokeCard";
import TextSmVariant from "./TextSmVariant";

const RatingStars = (props) => {
  const flooredRating = Math.floor(props.rating);
  //   const remainder = props.rating - flooredRating;

  return (
    <BgBlackStrokeCard className="flex flex-row items-center max-sm:px-2">
      {Array(flooredRating)
        .fill()
        .map((_, index) => (
          <HiStar
            key={`ratingstar-${index}`}
            className="fill-red45 size-3 sm:size-4"
          />
        ))}

      {Array(5 - flooredRating)
        .fill()
        .map((_, index) => (
          <HiStar
            key={`ratingstar-${index}`}
            className="fill-gray60 size-3 sm:size-4"
          />
        ))}

      <TextSmVariant
        text={flooredRating.toFixed(1)}
        className="text-[0.7rem] sm:text-sm ml-1"
      />
    </BgBlackStrokeCard>
  );
};

export default RatingStars;
