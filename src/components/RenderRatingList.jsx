import { useState, useRef, useLayoutEffect } from "react";
import DetailCard from "./DetailCard";
import TextSmVariant from "./TextSmVariant";

import RoundBgIcon from "./RoundBgIcon";
import SolidSlideIndicator from "./SolidSlideIndicator";
import BgBlackStrokeCard from "./BgBlackStrokeCard";
import { HiArrowLeft, HiArrowRight, HiPlus } from "react-icons/hi2";

import MovieReviewCard from "./MovieReviewCard";

const RenderRatingList = (props) => {
  const [percentageScrolled, setPercentageScrolled] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const ratingsContainerRef = useRef();

  function scrollContainerLeftByWidth(container) {
    container.scrollLeft -= container.clientWidth;
  }

  function scrollContainerRightByWidth(container) {
    container.scrollLeft += container.clientWidth;
  }

  function onScrollHandler() {
    setScrollLeft(ratingsContainerRef.current?.scrollLeft);
  }

  const reviewlength = props.movieReviews.length;
  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      setPercentageScrolled(getPercentageScrolled(ratingsContainerRef.current));
    }, 20);

    return () => {
      clearTimeout(timer);
    };
  }, [scrollLeft, reviewlength]);

  function getPercentageScrolled(container) {
    if (container) {
      let scrollwidth = container.scrollWidth - container.clientWidth;
      const containerPercentage = (container.clientWidth / scrollwidth) * 100;
      const percentage =
        ((container.scrollLeft + containerPercentage) / scrollwidth) * 100;
      return percentage;
    }

    return 0;
  }

  return (
    <DetailCard className="flex flex-col">
      <div className="flex w-full flex-row items-center justify-between flex-wrap">
        <TextSmVariant text="Reviews" />

        <BgBlackStrokeCard className="flex flex-row items-center gap-2 sm:py-3">
          <HiPlus className="fill-white" />
          <p className="font-manrope text-white text-[0.75rem] sm:text-sm">
            Add your review
          </p>
        </BgBlackStrokeCard>
      </div>

      <div
        className={`w-full ${
          props.movieReviews.length > 0 ? "flex" : "hidden"
        } flex-col `}
      >
        {/* movie reviews container */}
        <div
          className="w-full flex flex-row gap-2 overflow-x-scroll no-scrollbar mt-5"
          ref={ratingsContainerRef}
          onScroll={onScrollHandler}
        >
          {props.movieReviews
            .sort((a, b) => b.author_details.rating - a.author_details.rating)
            .map((review) => (
              <MovieReviewCard key={review.id} {...review} />
            ))}
        </div>

        {/* ratings slide buttons */}
        <div className="flex flex-row items-center gap-[7px] w-full justify-center mt-4">
          <RoundBgIcon
            icon={HiArrowLeft}
            onClick={scrollContainerLeftByWidth.bind(
              null,
              ratingsContainerRef.current
            )}
          />

          <div className="flex items-center justify-center">
            <SolidSlideIndicator
              value={percentageScrolled}
              className="w-[100px]"
            />
          </div>
          <RoundBgIcon
            icon={HiArrowRight}
            onClick={scrollContainerRightByWidth.bind(
              null,
              ratingsContainerRef.current
            )}
          />
        </div>
      </div>

      <div
        className={`py-5 ${props.movieReviews.length <= 0 ? "flex" : "hidden"}`}
      >
        <TextSmVariant text="No reviews yet :(" />
      </div>
    </DetailCard>
  );
};

export default RenderRatingList;
