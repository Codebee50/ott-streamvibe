import DetailCard from "./DetailCard";
import TextSmVariant from "./TextSmVariant";
import DetailHeading from "./DetailHeading";
import { HiOutlineCalendar, HiOutlineLanguage } from "react-icons/hi2";
import BgBlackStrokeCard from "./BgBlackStrokeCard";
import { HiOutlineStar } from "react-icons/hi2";
import RatingStars from "./RatingStars";
import { RiAppsLine } from "react-icons/ri";
import CrewMember from "./CrewMember";

/** props
 * overview
 * releasedDate
 * spoken_languages
 * averageRating
 * director
 * musicEngineer
 * genres
 */
const MovieInfoCard = (props) => {
  return (
    <div className="w-full s-2:w-[40%] flex flex-col gap-3">
      <DetailCard className={"flex s-2:hidden flex-col"}>
        <TextSmVariant text={"Description"} />
        <TextSmVariant
          text={props.overview}
          className={"text-white mt-2 text-[0.9rem] leading-6"}
        />
      </DetailCard>
      <DetailCard className="flex flex-col gap-5">
        <div className="flex flex-col">
          <DetailHeading icon={HiOutlineCalendar} text="Released Year" />
          <p className="text-white font-manrope mt-2">{props.releaseDate}</p>
        </div>

        <div className="flex flex-col gap-2">
          <DetailHeading icon={HiOutlineLanguage} text="Available Languages" />
          <div className="w-full flex flex-row items-cen flex-wrap">
            {props.spoken_languages.map((language) => (
              <BgBlackStrokeCard key={`lang-${language}`}>
                <p className="font-manrope text-white text-sm">{language}</p>
              </BgBlackStrokeCard>
            ))}
          </div>
        </div>

        {/* ratings */}
        <div className="flex flex-col gap-2">
          <DetailHeading icon={HiOutlineStar} text="Ratings" />

          <div className="flex flex-row items-center w-full flex-wrap">
            <BgBlackStrokeCard>
              <p className="font-manrope text-white text-sm">TMDB</p>
              <RatingStars rating={props.averageRating} className="mt-[3px]" />
            </BgBlackStrokeCard>

            <BgBlackStrokeCard>
              <p className="font-manrope text-white text-sm">Streamvibe</p>
              <RatingStars
                rating={props.averageRating + 1}
                className="mt-[3px]"
              />
            </BgBlackStrokeCard>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <DetailHeading icon={RiAppsLine} text="Genres" />
          <div className="w-full flex flex-row items-cen flex-wrap">
            {props.genres.map((genre) => (
              <BgBlackStrokeCard key={genre.name}>
                <p className="font-manrope text-white text-sm">{genre.name}</p>
              </BgBlackStrokeCard>
            ))}
          </div>
        </div>

        {props.director && (
          <div className="flex flex-col gap-2">
            <DetailHeading text="Director" />
            <div className="w-full flex flex-row items-cen flex-wrap">
              <CrewMember {...props.director} />
            </div>
          </div>
        )}

        {props.musicEngineer && (
          <div className="flex flex-col gap-2">
            <DetailHeading text="Music" />
            <div className="w-full flex flex-row items-cen flex-wrap">
              <CrewMember {...props.musicEngineer} />
            </div>
          </div>
        )}
      </DetailCard>
    </div>
  );
};

export default MovieInfoCard;
