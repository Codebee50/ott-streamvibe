import BgBlackStrokeCard from "./BgBlackStrokeCard";
import RatingStars from "./RatingStars";
import TextSmVariant from "./TextSmVariant";

const MovieReviewCard = (props) => {
  function formatDateTime(dateTimeString) {
    const dateTime = new Date(dateTimeString);
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "UTC", // Adjust timezone if needed
    };
    return dateTime.toLocaleString("en-US", options);
  }

  function getStreamVibeRating(tmdbRating) {
    console.log(tmdbRating);
    return tmdbRating / 2 < 1 ? 1.5 : tmdbRating / 2;
  }

  return (
    <BgBlackStrokeCard className="flex flex-col items-center justify-center sm:w-[377px] max-sm:w-[310px] h-[223px] bg-black06 px-7 shrink-0">
      <div className="flex w-full flex-row justify-between">
        <div className="flex flex-col">
          <p className="font-manrope text-white text-sm">{props.author}</p>

          <TextSmVariant
            text={formatDateTime(props.created_at)}
            className="text-[0.8rem]"
          />
        </div>

        <RatingStars
          rating={getStreamVibeRating(props.author_details.rating)}
        />
      </div>

      <div className="w-full">
        <TextSmVariant
          text={props.content}
          className="mt-5 line-clamp-4 text-[0.9rem]"
        />
      </div>
    </BgBlackStrokeCard>
  );
};

export default MovieReviewCard;
