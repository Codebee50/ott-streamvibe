import { Fragment } from "react"
import MoviesHero from "../sections/MoviesAndShows/MoviesHero"
import MoviesSection from "../sections/MoviesAndShows/MoviesSection"

const MoviesAndShowsPage = () => {
  return (
    <Fragment>
      <MoviesHero/>
      <MoviesSection/>
    </Fragment>
  )
}

export default MoviesAndShowsPage