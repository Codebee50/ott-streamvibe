import { Fragment } from "react";
import MoviesHero from "../sections/MoviesAndShows/MoviesHero";
import MoviesSection from "../sections/MoviesAndShows/MoviesSection";
import Footer from "../sections/Footer";
import StartFreeTrialSection from "../sections/StartFreeTrialSection";
import TVshowsSection from "../sections/MoviesAndShows/TVshowsSection";

const MoviesAndShowsPage = () => {
  return (
    <Fragment>
      <MoviesHero />
      <MoviesSection />
      <TVshowsSection/>
      <StartFreeTrialSection />
      <Footer />
    </Fragment>
  );
};

export default MoviesAndShowsPage;
