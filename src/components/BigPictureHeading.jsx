import { HiOutlineHandThumbUp } from "react-icons/hi2";
import IconButton from "./IconButton";
import defaultbg from "../assets/images/defaultbg.png";
import BlackCardStroke from "./BlackCardStroke";
import { IoPlay } from "react-icons/io5";
import { HiPlus, HiOutlineSpeakerWave } from "react-icons/hi2";

const BigPictureHeading = (props) => {
  function imageErrorHandler(event) {
    event.target.src = defaultbg;
  }

  return (
    <section className="w-full bg-page-black pb-5">
      <div className="padding-x relative pt-5">
        <div className="w-full h-[70vh] sm:h-[80vh] relative">
          <img
            className="w-full h-full bg-black12 rounded-lg object-center object-cover bg-default-bg bg-no-repeat bg-cover bg-center"
            src={props.imageUrl}
            alt=""
            onError={imageErrorHandler}
          />

          <div className="absolute w-full h-full bg-gradient-to-t from-page-black from-10% top-0 flex flex-col items-center justify-end ">
            <h1 className="text-white font-bold font-manrope text-3xl breakcon:text-4xl mt-[35vh] text-center ">
              {props.title}
            </h1>

            <p className="w-[90%] text-center mt-3 text-gray60 font-manrope text-[0.95rem] line-clamp-3  overflow-ellipsis  max-sm:text-sm">
              {props.overview}
            </p>

            <div className="flex flex-row items-center justify-center flex-wrap gap-3 mt-7">
              <IconButton icon={IoPlay} text={"Play now"} />

              <div className="flex flex-row items-center gap-1">
                <BlackCardStroke icon={HiPlus} />
                <BlackCardStroke icon={HiOutlineHandThumbUp} />
                <BlackCardStroke icon={HiOutlineSpeakerWave} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BigPictureHeading;
