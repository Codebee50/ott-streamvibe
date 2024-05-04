import { Fragment } from "react";
import MoviesHero from "../sections/MoviesAndShows/MoviesHero";
import MoviesSection from "../sections/MoviesAndShows/MoviesSection";
import Footer from "../sections/Footer";
import StartFreeTrialSection from "../sections/StartFreeTrialSection";
import TVshowsSection from "../sections/MoviesAndShows/TVshowsSection";
import { useSearchParams } from "react-router-dom";
import NavAndDrawer from "../components/NavAndDrawer";
import MovieDetailPage from "./MovieDetailPage";
import TvDetailPage from "./TvDetailPage";
import GenreMoviesListPage from "./GenreMoviesListPage";

const MoviesAndShowsPage = () => {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab");

  if (tab == "list" || !tab) {
    return (
      <Fragment>
        <NavAndDrawer page="Movies & Shows" />
        <MoviesHero />
        <MoviesSection />
        <TVshowsSection />
        <StartFreeTrialSection />
        <Footer />
      </Fragment>
    );
  }

  if (tab == "movie") {
    return <MovieDetailPage />;
  }

  if (tab == "show") {
    return <TvDetailPage />;
  }

  if (tab == "genre") {
    return <GenreMoviesListPage />;
  }

  return (
    <Fragment>
      <NavAndDrawer page="Movies & Shows" />
      <MoviesHero />
      <MoviesSection />
      <TVshowsSection />
      <StartFreeTrialSection />
      <Footer />
    </Fragment>
  );
};

export default MoviesAndShowsPage;
