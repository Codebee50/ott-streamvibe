import { HiStar } from "react-icons/hi2";
import TextSmVariant from "./TextSmVariant";

const RatingStars = (props) => {
  const classes = "flex flex-row items-center max-sm:px-2 " + props.className;
  let flooredRating = Math.floor(props.rating);

  flooredRating = flooredRating > 5 ? 5 : flooredRating; //ensuring our rating is not greater than 5
  return (
    <div className={classes}>
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
    </div>
  );
};

export default RatingStars;
