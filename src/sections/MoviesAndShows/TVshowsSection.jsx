import RenderTvShowsCards from "../../components/RenderTvShowsCards";
import MustWatchShows from "./MustWatchShows";
// import TrendingShowsSection from "./TrendingShowsSection";
import TvShowsGenres from "./TvShowsGenres";

const TVshowsSection = () => {
  return (
    <section className="w-full min-h-screen bg-page-black padding-x  max-container flex pt-28">
      <section className="w-full min-h-[70vh] border-[0.5px] border-strokeBlack m-auto rounded-lg relative">
        <button
          className={
            "font-manrope bg-red45 text-white py-2 px-5 flex shrink-0 rounded-md text-sm text-nowrap absolute -top-5 ml-7"
          }
        >
          Shows
        </button>

        <TvShowsGenres />
        <RenderTvShowsCards
          endpoint={"https://api.themoviedb.org/3/trending/tv/day"}
          title={"Trending Shows Now"}
        />
        <RenderTvShowsCards
          endpoint={"https://api.themoviedb.org/3/discover/tv"}
          append={"&sort_by=first_air_date.desc"}
          title={"New Released Shows"}
        />
        <MustWatchShows />
      </section>
    </section>
  );
};

export default TVshowsSection;
