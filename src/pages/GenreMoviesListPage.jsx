import { Fragment, useEffect, useState } from "react";
import NavAndDrawer from "../components/NavAndDrawer";
import { TMDB_API_TOKEN } from "../constants";
import { useSearchParams } from "react-router-dom";
import { constructTmdbImageLink } from "../constants";
import BigPictureHeading from "../components/BigPictureHeading";
import StartFreeTrialSection from "../sections/StartFreeTrialSection";
import Footer from "../sections/Footer";
import RenderGenreMovies from "../components/RenderGenreMovies";
import RenderGenreTv from "../components/RenderGenreTv";

const GenreMoviesListPage = () => {
  const [searchParams] = useSearchParams();
  const genreId = searchParams.get("id");
  const content = searchParams.get("content");
  const currentPage = searchParams.get("page");
  const [contentList, setContentList] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  useEffect(() => {
    console.log("fetching data");
    fetch(
      `https://api.themoviedb.org/3/discover/${content}?language=en&api_key=${TMDB_API_TOKEN}&with_genre=${genreId}&page=${currentPage}`
    )
      .then((response) => {
        if (!response.ok) {
          alert("Error fetching genre ");
          return {};
        }
        return response.json();
      })
      .then((data) => {
        console.log("data ", data);
        setContentList(data.results);
        setTotalResults(data.total_results);
      });
  }, [content, genreId, currentPage]);

  function onPageChangeHandler(page) {
    window.location.href = changePageLink(page);
  }

  function changePageLink(page) {
    return `/moviesandshows?tab=${searchParams.get(
      "tab"
    )}&id=${searchParams.get("id")}&content=${searchParams.get(
      "content"
    )}&page=${page}`;
  }

  return (
    <Fragment>
      <NavAndDrawer page="Movies & Shows" />
      <BigPictureHeading
        imageUrl={constructTmdbImageLink(contentList[0]?.poster_path)}
        title={
          content === "movie" ? contentList[0]?.title : contentList[0]?.name
        }
        overview={contentList[0]?.overview}
      />

      {content == "movie" ? (
        <RenderGenreMovies
          movieList={contentList}
          totalResults={totalResults}
          onPageChange={onPageChangeHandler}
          currentPage={currentPage}
        />
      ) : (
        <RenderGenreTv
          tvList={contentList}
          totalResults={totalResults}
          onPageChange={onPageChangeHandler}
          pageSize={contentList.length}
          currentPage={currentPage}
        />
      )}

      <StartFreeTrialSection />
      <Footer />
    </Fragment>
  );
};

export default GenreMoviesListPage;
