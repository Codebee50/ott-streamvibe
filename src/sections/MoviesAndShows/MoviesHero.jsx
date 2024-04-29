import { useEffect, useState } from "react";
import { Fragment } from "react";
import Nav from "../../components/Nav";
import { navLinks } from "../../constants";
import NavDrawer from "../../components/NavDrawer";
import { HiOutlineHandThumbUp } from "react-icons/hi2";
import IconButton from "../../components/IconButton";
import defaultbg from "../../assets/images/defaultbg.png";
import BlackCardStroke from "../../components/BlackCardStroke";
import { animate, useAnimate } from "framer-motion";
import { IoPlay } from "react-icons/io5";

import {
  HiPlus,
  HiOutlineSpeakerWave,
  HiArrowRight,
  HiArrowLeft,
} from "react-icons/hi2";


const MoviesHero = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [movieList, setMovieList] = useState([]);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const numImages = 4; //maximun umber of images to be loaded into the carousel

  const [scope, animation] = useAnimate();

  useEffect(() => {
    animate(scope.current, { opacity: [0, 1] }, { duration: 1 });
  }, [carouselIndex, scope]);

  useEffect(() => {
    const timer = setInterval(() => {
      increamentCarouselIndex();
    }, 5000);

    return ()=>{clearInterval(timer)}
  }, []);

  const showNavDrawer = () => {
    setNavOpen(true);
  };

  const closeNavDrawer = () => {
    setNavOpen(false);
  };

  function fetchMovies() {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?language=en&api_key=${
        import.meta.env.VITE_TMDP_API_TOKEN
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieList(data.results);
      });
  }

  function increamentCarouselIndex() {
    setCarouselIndex((prev) => {
      if (prev === numImages - 1) return 0;
      return prev + 1;
    });
  }

  function decreamentCarouselIndex() {
    setCarouselIndex((prev) => {
      if (prev == 0) return 0;
      return prev - 1;
    });
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <Fragment>
      <NavDrawer open={navOpen} onClose={closeNavDrawer} navLinks={navLinks} />

      <section className="w-full min-h-screen bg-page-black">
        <Nav
          navLinks={navLinks}
          page="Movies & Shows"
          onOpenNav={showNavDrawer}
        />

        <div className="padding-x relative mt-5">
          <div className="w-full h-[70vh] sm:h-[80vh] relative">
            <img
              className="w-full h-full bg-black12 rounded-lg object-center object-cover bg-default-bg bg-no-repeat bg-cover bg-center"
              src={
                movieList[carouselIndex]?.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movieList[carouselIndex]?.poster_path}`
                  : defaultbg
              }
              alt=""
              ref={scope}
            />

            <div className="absolute w-full h-full bg-gradient-to-t from-page-black from-10% top-0 flex flex-col items-center justify-end ">
              <h1 className="text-white font-bold font-manrope text-3xl breakcon:text-4xl mt-[35vh] text-center ">
                {movieList[carouselIndex]?.title}
              </h1>

              <p className="w-[90%] text-center mt-3 text-gray60 font-manrope text-[0.95rem] line-clamp-3  overflow-ellipsis  max-sm:text-sm">
                {movieList[carouselIndex]?.overview}
              </p>

              <div className="flex flex-row items-center justify-center flex-wrap gap-3 mt-7">
                <IconButton
                  icon={IoPlay}
                  text={"Play now"}
                />

                <div className="flex flex-row items-center gap-1">
                  <BlackCardStroke
                    icon={HiPlus}
                  />
                  <BlackCardStroke
                    icon={HiOutlineHandThumbUp}
                  />
                  <BlackCardStroke
                    icon={HiOutlineSpeakerWave}
                  />
                </div>
              </div>

              <div className="w-full flex flex-row items-center justify-between mt-10 px-5 max-sm:hidden">
                <BlackCardStroke
                  icon={HiArrowLeft}
                  onClick={decreamentCarouselIndex}
                />

                <div className="flex flex-row items-center gap-[3px]">
                  {Array(numImages)
                    .fill()
                    .map((_, index) => (
                      <span
                        key={`indicator-${index}`}
                        className={`w-4 h-[4px] bg-black20 rounded-xl ${
                          index === carouselIndex && "bg-red45 w-5"
                        }`}
                      ></span>
                    ))}
                  {/* <span className={`w-5 h-[4px]  rounded-xl bg-red45`}></span>
                  <span className={`w-4 h-[4px] bg-black20 rounded-xl`}></span>
                  <span className={`w-4 h-[4px] bg-black20 rounded-xl`}></span>
                  <span className={`w-4 h-[4px] bg-black20 rounded-xl`}></span> */}
                </div>

                <BlackCardStroke
                  icon={HiArrowRight}
                  onClick={increamentCarouselIndex}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default MoviesHero;
