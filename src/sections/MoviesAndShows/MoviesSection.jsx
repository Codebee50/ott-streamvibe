import MustWatch from "./MustWatch";
import NewReleases from "./NewReleases";
import OurGenres from "./OurGenres";
import TrendingNow from "./TrendingNow";

const MoviesSection = () => {
  return (
    <section className="w-full min-h-screen bg-page-black padding-x  max-container flex">
      <section className="w-full min-h-[70vh] border-[0.5px] border-strokeBlack m-auto rounded-lg relative">

        <button className={"font-manrope bg-red45 text-white py-2 px-5 flex shrink-0 rounded-md text-sm text-nowrap absolute -top-5 ml-7"}>Movies</button>

        <OurGenres/>
        <TrendingNow/>
        <NewReleases/>
        <MustWatch/>
      </section>
    </section>
  );
};

export default MoviesSection;
