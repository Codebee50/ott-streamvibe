import { HiArrowRight } from "react-icons/hi";
import { HiArrowLeft } from "react-icons/hi";

const SlideIndicator = (props) => {
  const trSlideRatio = Math.ceil(props.slideRatio);
  const remainder = props.slideRatio % Math.floor(props.slideRatio) === 0;

  return (
    <div className="bg-black06  px-2  py-2 rounded-[0.9rem] border-[2px] border-black10 flex flex-row gap-2">
      <div
        className="bg-black10 p-[10px] rounded-md cursor-pointer"
        onClick={props.onLeftClick}
      >
        <HiArrowLeft fill="#ffffff" />
      </div>

      <div className="flex flex-row items-center gap-[3px]">
        {props.slideRatio &&
          Array(trSlideRatio)
            .fill()
            .map((_, index) => {
              return (
                <span
                  key={index}
                  className={`w-4 h-[4px] bg-black20 rounded-xl ${
                    index === props.scrollIndex && "bg-red45"
                  }`}
                ></span>
              );
            })}

        {!remainder && (
          <span
            className={`w-2 h-[4px] bg-black20 rounded-xl ${
              props.slideRatio - props.scrollIndex < 1 && "bg-red45"
            }`}
          ></span>
        )}
        {/* <span className="w-[23px]  h-[4px] bg-red45 rounded-xl"></span>
        <span className="w-4 h-[4px] bg-black20 rounded-xl"></span>
        <span className="w-4 h-[4px] bg-black20 rounded-xl"></span>
        <span className="w-4 h-[4px] bg-black20 rounded-xl"></span> */}
      </div>

      <div
        className="bg-black10 p-[10px] rounded-md cursor-pointer"
        onClick={props.onRightClick}
      >
        <HiArrowRight fill="#ffffff" />
      </div>
    </div>
  );
};

export default SlideIndicator;
