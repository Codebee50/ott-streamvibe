import { constructTmdbImageLink, imageErrorHandler } from "../constants";
import TextSmVariant from "./TextSmVariant";

const CrewMember = (props) => {
  console.log(props);
  return (
    <div className="w-[75%] max-lg:w-full max-s-2:w-[80%] max-mobile:w-full flex flex-row bg-black08 p-2 gap-2 rounded-md border border-strokeBlack">
      <div className="flex flex-row shrink-0">
        <img
          src={constructTmdbImageLink(props.profile_path)}
          className="w-[47px] h-[50px] object-cover object-center rounded-md shrink-0"
          alt=""
          onError={imageErrorHandler}
        />
      </div>

      <div className="flex flex-col">
        <p className="font-manrope text-white">{props.name}</p>
        <TextSmVariant text={props.job} className="text-sm" />
      </div>
    </div>
  );
};

export default CrewMember;
