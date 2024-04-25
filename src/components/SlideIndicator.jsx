import { HiArrowRight } from "react-icons/hi";
import { HiArrowLeft } from "react-icons/hi";

const SlideIndicator = () => {
  return (
    <div className="bg-black06  px-2  py-2 rounded-[0.9rem] border-[2px] border-black10 flex flex-row gap-2">
      <div className="bg-black10 p-[10px] rounded-md cursor-pointer">
        <HiArrowLeft fill="#ffffff" />
      </div>

      <div className="flex flex-row items-center gap-[3px]">
        <span className="w-[23px]  h-[4px] bg-red45 rounded-xl"></span>
        <span className="w-4 h-[4px] bg-black20 rounded-xl"></span>
        <span className="w-4 h-[4px] bg-black20 rounded-xl"></span>
        <span className="w-4 h-[4px] bg-black20 rounded-xl"></span>
      </div>


      <div className="bg-black10 p-[10px] rounded-md cursor-pointer">
        <HiArrowRight fill="#ffffff" />

      </div>
    </div>
  );
};

export default SlideIndicator;
