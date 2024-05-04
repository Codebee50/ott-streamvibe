import { Fragment } from "react";
import { Pagination } from "antd";
// import TvShowCardsm from "./TvShowCardsm";
import MovieCardSm from "./MovieCardSm";
import AntdUiConfig from "../store/AntdUiConfig";

// This component renders all the movies for a particular genre list
const RenderGenreMovies = (props) => {
  function onPageChange(page) {
    props.onPageChange(page);
  }
  return (
    <Fragment>
      <section className="padding-x  bg-page-black pt-10 w-full max-container">
        <div className="w-full grid s-3:grid-cols-2 min-[700px]:grid-cols-3 items-center justify-items-center min-[920px]:grid-cols-4 xl:grid-cols-5 gap-7">
          {props.movieList.map((movie) => (
            <MovieCardSm
              seenCount={Math.floor(movie.vote_average)}
              posterPath={movie.poster_path}
              title={movie.title}
              type="movie"
              id={movie.id}
              key={`movie-a${movie.id}`}
              date={movie.release_date}
              resizable={true}
              onCardRendered={() => {}}
            />
          ))}
        </div>

        <div className="w-full flex items-center min-h-[20vh] justify-center">
          <AntdUiConfig>
            <Pagination
              defaultCurrent={props.currentPage}
              total={10000}
              showSizeChanger={false}
              onChange={onPageChange}
              pageSize={20}
            />
          </AntdUiConfig>
        </div>
      </section>
    </Fragment>
  );
};

export default RenderGenreMovies;
