import { HiOutlineClock, HiOutlinePlayCircle } from "react-icons/hi2";
import { constructTmdbImageLink } from "../constants";
import { imageErrorHandler } from "../constants";
import TextSmVariant from "./TextSmVariant";
import BgBlackStrokeCard from "./BgBlackStrokeCard";

const EpisodeItem = (props) => {
  return (
    <div className="w-full flex flex-row items-center border-t border-t-strokeBlack pt-5">
      <p className="font-manrope font-semibold text-gray60 mr-2 max-mobilelg:hidden">
        0{props.index}
      </p>

      <div className="flex flex-col mobilelg:flex-row items-start mobilelg:items-center gap-4 max-mobilelg:w-full">
        <div className="flex flex-row items-center flex-wrap gap-2 max-mobilelg:w-full">
          <div className="flex flex-col">
            <div className="w-[172px] h-[118px] max-[900px]:w-[100px] max-[900px]:h-[80px] max-s-2:w-[140px] max-s-2:h-[100px]  bg-black08 rounded-xl relative border border-strokeBlack overflow-hidden shrink-0">
              <img
                className="w-full h-full rounded-xl object-cover object-center"
                src={constructTmdbImageLink(props.episode.still_path)}
                alt=""
                onError={imageErrorHandler}
              />

              <div className="w-full h-full bg-black bg-trans-5 absolute top-0 flex flex-col items-center justify-center">
                <div className="h-[50px] w-[50px] bg-trans-2 rounded-full z-10 flex ">
                  <HiOutlinePlayCircle
                    className="m-auto w-[22px] h-[22px]"
                    color="#ffffff"
                  />
                </div>
              </div>
            </div>

            <BgBlackStrokeCard className="hidden max-[960px]:flex flex-row items-center gap-1 mt-2">
              <HiOutlineClock color="#999999" size={"0.9em"} />

              <TextSmVariant
                text={`${props.episode.runtime}min`}
                className="text-[0.7rem]"
              />
            </BgBlackStrokeCard>
          </div>

          <p className="font-manrope font-semibold text-gray60 ml-5 mobilelg:hidden text-[1.1rem]">
            0{props.index}
          </p>
        </div>

        <div className="flex flex-col mobilelg:ml-2 w-full">
          <div className="flex flex-row items-center justify-between w-full flex-wrap gap-2">
            <p className="font-manrope text-white font-semibold">
              {props.episode.name}
            </p>

            <BgBlackStrokeCard className="flex flex-row items-center gap-1 max-[960px]:hidden">
              <HiOutlineClock color="#999999" />

              <TextSmVariant
                text={`${props.episode.runtime}min`}
                className="text-sm"
              />
            </BgBlackStrokeCard>
          </div>

          <TextSmVariant
            text={props.episode.overview}
            className="max-mobilelg:hidden line-clamp-3 text-sm mt-3 mr-4"
          />
        </div>
      </div>
    </div>
  );
};

export default EpisodeItem;
