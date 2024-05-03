import { useSearchParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import NavAndDrawer from "../components/NavAndDrawer";
import BigPictureHeading from "../components/BigPictureHeading";
import { constructTmdbImageLink } from "../constants";
import ShowDetailSection from "../sections/MovieDetail/ShowDetailSection";
import StartFreeTrialSection from "../sections/StartFreeTrialSection";
import Footer from "../sections/Footer";

const TvDetailPage = () => {
  const [searchParams] = useSearchParams();
  const showId = searchParams.get("id");
  const [show, setShow] = useState({});

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/${showId}?api_key=${
        import.meta.env.VITE_TMDP_API_TOKEN
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setShow(data);
        console.log(data);
      })
      .catch((err) => {
        console.log("Error loading genre in categories", err);
      });
  }, [showId]);

  return (
    <Fragment>
      <NavAndDrawer page="Movies & Shows" />
      <BigPictureHeading
        imageUrl={constructTmdbImageLink(show.poster_path)}
        title={show.name}
        overview={show.overview}
      />

      {show?.name && <ShowDetailSection show={show} />}

      <StartFreeTrialSection />
      <Footer />
    </Fragment>
  );
};

export default TvDetailPage;
