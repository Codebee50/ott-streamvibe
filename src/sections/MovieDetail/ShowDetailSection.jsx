import { useState, useEffect } from "react";
import DetailCard from "../../components/DetailCard";
import TextSmVariant from "../../components/TextSmVariant";
import RenderRatingList from "../../components/RenderRatingList";
import MovieInfoCard from "../../components/MovieInfoCard";
import RenderCastList from "../../components/RenderCastList";
import RenderSeasonsList from "../../components/RenderSeasonsList";
const ShowDetailSection = (props) => {
  const releaseDate = props.show.first_air_date.split("-")[0];
  const [averageRating, setAverageRating] = useState(0);
  const [castList, setCastList] = useState([]);
  const [crewList, setCrewList] = useState([]);
  const [showReviews, setShowReviews] = useState([]);
  const director = getMovieDirector();
  const musicEngineer = getMusicEngineer();

  const { id } = props.show;
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/${id}/credits?language=en&api_key=${
        import.meta.env.VITE_TMDP_API_TOKEN
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setCastList(data.cast);
        setCrewList(data.crew);
      });

    fetch(
      `https://api.themoviedb.org/3/tv/${id}/reviews?language=en&api_key=${
        import.meta.env.VITE_TMDP_API_TOKEN
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        const totalRating = data.results.reduce((acc, cur) => {
          return cur.author_details.rating + acc;
        }, 0);

        const averageRating =
          totalRating / data.results.length <= 0 || totalRating == 0
            ? 0
            : totalRating / data.results.length;
        setShowReviews(data.results);

        setAverageRating(averageRating);
      });
  }, [id]);

  function getMovieDirector() {
    const director = crewList.find((crew) => crew.job === "Director");

    if (director) return director;

    return crewList.find((crew) => crew.department === "Directing");
  }

  function getMusicEngineer() {
    const musicEngineer = crewList.find(
      (crew) => crew.job === "Original Music Composer"
    );

    if (musicEngineer) return musicEngineer;

    return crewList.find((crew) => crew.department === "Sound");
  }

  function getLanguageName(isoCode) {
    const displayNames = new Intl.DisplayNames(["en"], { type: "language" });
    return displayNames.of(isoCode);
  }

  return (
    <section className="w-full padding-x pt-28 max-container min-h-[30vh] bg-page-black flex flex-col-reverse s-2:flex-row gap-3 pb-5">
      <div className="w-full s-2:w-[60%] flex flex-col gap-4">
        <DetailCard className="max-[400px]:px-3">
          <p className="font-manrope text-white font-semibold">
            Seasons and Episodes
          </p>

          <RenderSeasonsList
            seasonsList={props.show.seasons}
            seriesId={props.show.id}
          />
        </DetailCard>
        <DetailCard className={"hidden s-2:flex flex-col"}>
          <TextSmVariant text={"Description"} />
          <TextSmVariant
            text={props.show.overview}
            className={"text-white mt-2 text-[0.9rem] leading-6"}
          />
        </DetailCard>

        <RenderCastList castList={castList} />
        <RenderRatingList movieReviews={showReviews} />
      </div>

      <MovieInfoCard
        overview={props.show.overview}
        releaseDate={releaseDate}
        spoken_languages={props.show.languages.map((lang) =>
          getLanguageName(lang)
        )}
        averageRating={averageRating}
        director={director}
        musicEngineer={musicEngineer}
        genres={props.show.genres}
      />
    </section>
  );
};

export default ShowDetailSection;
