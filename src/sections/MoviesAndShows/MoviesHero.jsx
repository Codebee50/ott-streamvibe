import { useState } from "react";
import { Fragment } from "react";
import Nav from "../../components/Nav";
import { navLinks } from "../../constants";
import NavDrawer from "../../components/NavDrawer";
import { largeImages } from "../../assets/largeimages";
import { HiOutlineHandThumbUp } from "react-icons/hi2";
import IconButton from "../../components/IconButton";
import {
  HiMiniPlay,
  HiPlus,
  HiOutlineSpeakerWave,
  HiArrowRight,
  HiArrowLeft,
} from "react-icons/hi2";
import BlackCardStroke from "../../components/BlackCardStroke";

const MoviesHero = () => {
  const [navOpen, setNavOpen] = useState(false);

  const showNavDrawer = () => {
    setNavOpen(true);
  };

  const closeNavDrawer = () => {
    setNavOpen(false);
  };

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
              className="w-full h-full bg-black12 rounded-lg object-center object-cover"
              src={largeImages[1]}
              alt=""
            />

            <div className="absolute w-full h-full bg-gradient-to-t from-page-black from-10% top-0 flex flex-col items-center justify-end">
              <h1 className="text-white font-bold font-manrope text-3xl breakcon:text-4xl mt-[35vh] text-center ">
                Dune
              </h1>

              <p className="w-[90%] text-center mt-3 text-gray60 font-manrope text-[0.95rem] line-clamp-3">
                {`With the help of remaining allies, the Avengers must assemble
                once more in order to undo Thanos's actions and undo the chaos
                to the universe, no matter what consequences may be in store,
                and no matter who they face... Avenge the fallen.`}
              </p>

              <div className="flex flex-row items-center justify-center flex-wrap mt-7 gap-3">
                <IconButton
                  icon={<HiMiniPlay color="white" size={"1.3em"} />}
                  text={"Play now"}
                />

                <div className="flex flex-row items-center gap-1">
                  <BlackCardStroke
                    icon={<HiPlus color="white" size={"1.3em"} />}
                  />
                  <BlackCardStroke
                    icon={<HiOutlineHandThumbUp color="white" size={"1.3em"} />}
                  />
                  <BlackCardStroke
                    icon={<HiOutlineSpeakerWave color="white" size={"1.3em"} />}
                  />
                </div>
              </div>

              <div className="w-full flex flex-row items-center justify-between mt-10 px-5 max-sm:hidden">
                <BlackCardStroke
                  icon={<HiArrowLeft color="white" size={"1.3em"} />}
                />

                <div className="flex flex-row items-center gap-[3px]">
                  <span
                    className={`w-5 h-[4px]  rounded-xl bg-red45`}
                  ></span>
                  <span
                    className={`w-4 h-[4px] bg-black20 rounded-xl`}
                  ></span>
                  <span
                    className={`w-4 h-[4px] bg-black20 rounded-xl`}
                  ></span>
                  <span
                    className={`w-4 h-[4px] bg-black20 rounded-xl`}
                  ></span>
                </div>

                <BlackCardStroke
                  icon={<HiArrowRight color="white" size={"1.3em"} />}
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
