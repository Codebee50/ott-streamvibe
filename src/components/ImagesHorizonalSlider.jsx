import { useRef, useState, useEffect } from "react";
import TextL from "./TextL";
import TextSm from "./TextSm";
import SlideIndicator from "./SlideIndicator";
import SolidSlideIndicator from "./SolidSlideIndicator";
import SectionWrapper from "./SectionWrapper";

const ImagesHorizonalSlider = (props) => {
  const categoriesContainerRef = useRef();
  const [scrollIndex, setScrollIndex] = useState(0);
  const [scrollLeft, setSCrollLeft] = useState(0);
  const [slideRatio, setSlideRatio] = useState(0);

  function rightSlideHandler() {
    categoriesContainerRef.current.scrollLeft +=
      categoriesContainerRef.current.getBoundingClientRect().width;
  }

  function leftSlideHandler() {
    categoriesContainerRef.current.scrollLeft -=
      categoriesContainerRef.current.getBoundingClientRect().width;
  }

  function cardRenderedHandler(itemWidth) {
    setSlideRatio(getSlideRatio(itemWidth));
  }

  function getSlideRatio(itemWidth) {
    const slideRatio =
      (props.mainList.length * itemWidth + 12 * props.mainList.length) /
        categoriesContainerRef?.current?.clientWidth -
      1;

    return slideRatio || null;
  }

  function slideScrollHandler(event) {
    setSCrollLeft(event.target.scrollLeft);
  }

  function getPercentageScrolled() {
    const scrollwidth =
      categoriesContainerRef.current?.scrollWidth -
        categoriesContainerRef.current?.clientWidth || 0;

    const containerPercentage =
      (categoriesContainerRef.current?.clientWidth / scrollwidth) * 100;

    return ((scrollLeft + containerPercentage) / scrollwidth) * 100;
  }

  useEffect(() => {
    const scrollLeftDebouncer = setTimeout(() => {
      const containerWidth =
        categoriesContainerRef.current.getBoundingClientRect().width;

      setScrollIndex(scrollLeft / containerWidth);
    }, 200);

    return () => {
      clearTimeout(scrollLeftDebouncer);
    };
  }, [scrollLeft]);

  const classes =
    "w-full bg-page-black padding-x-sm max-container flex flex-col " +
    props.className;

  return (
    <SectionWrapper>
      <section className={classes}>
        <div className="w-full flex flex-row items-center justify-between ">
          <div className="flex flex-col items-start max-md:px-3">
            <TextL text={props.headerText} />
            {!props.descText == "" && <TextSm text={props.descText} />}
          </div>

          <div>
            {!(window.innerWidth < 820) && (
              <SlideIndicator
                onRightClick={rightSlideHandler}
                onLeftClick={leftSlideHandler}
                slideRatio={slideRatio}
                scrollIndex={scrollIndex}
              />
            )}
          </div>
        </div>

        <div
          className="mt-10 w-full flex flex-row overflow-x-scroll no-scrollbar gap-3"
          ref={categoriesContainerRef}
          onScroll={slideScrollHandler}
        >
          {props.mainList.map((item) => {
            return (
              <props.component
                key={item.id}
                {...item}
                onCardRendered={cardRenderedHandler}
              />
            );
          })}
        </div>

        {window.innerWidth < 820 && (
          <div className="mt-7 w-full flex items-center justify-center">
            <SolidSlideIndicator value={getPercentageScrolled()} />
          </div>
        )}
      </section>
    </SectionWrapper>
  );
};

export default ImagesHorizonalSlider;
