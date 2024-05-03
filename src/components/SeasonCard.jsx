import { HiArrowDown } from "react-icons/hi2";
import RoundBgIcon from "./RoundBgIcon";
import TextSmVariant from "./TextSmVariant";

const SeasonCard = (props) => {
  return (
    <div className="py-4 px-5 border-[0.8px] border-strokeBlack  bg-black06 rounded-md w-full flex flex-row items-center justify-between">
      <div className="flex flex-row gap-2 items-start flex-wrap">
        <p className="text-white font-semibold font-manrope">
          {props.season.name}
        </p>
        <TextSmVariant
          text={`${props.season.episode_count} Episodes`}
          className="text-[0.75rem]"
        />
      </div>

      <RoundBgIcon icon={HiArrowDown} />
    </div>
  );
};

export default SeasonCard;
