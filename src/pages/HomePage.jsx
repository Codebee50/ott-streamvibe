import { Fragment } from "react";
import Categories from "../sections/Categories";
import { heroBackgroundImageList } from "../assets/heroimages";
// import bigIcon from '../assets/icons/big-icon.png'
import { vibeBack } from "../assets/icons";
import Nav from "../components/Nav";
import { navLinks } from "../constants";
import { playIcon } from "../assets/icons";
import ScreensShowcase from "../sections/ScreensShowcase";
import FAQSection from "../sections/FAQSection";
import PlanShowcaseSection from "../sections/PlanShowcaseSection";

const HomePage = () => {
  return (
    <Fragment>
      <section className="w-full max-container bg-page-black relative">
        <div className="w-full grid h-[80vh] overflow-y-hidden gap-[5px] grid-cols-small breakcon:grid-cols-large ">
          {heroBackgroundImageList.map((image, index) => (
            // <img src={image} key={index} alt="" />
            <div
              className="h-[110px] breakcon:h-[130px] rounded-md"
              key={index}
            >
              <img
                src={image}
                className="w-full rounded-xl h-full object-cover object-center"
                alt=""
              />
            </div>
          ))}
        </div>

        <div className="absolute centered-element">
          <img src={vibeBack} alt="" width={300} />
        </div>

        <div className="absolute w-full z-10 top-0 flex flex-col">
          <div className="w-full h-[30vh] bg-gradient-to-b from-page-black to-trans-1">
            <Nav navLinks={navLinks} page="Home" />
          </div>

          <div className="w-full min-h-[40vh] bg-gradient-to-t from-page-black via-trans-2 from-20%  to-trans-1 flex flex-col items-center p-2">
            <h1 className="text-white font-bold font-manrope text-3xl breakcon:text-4xl mt-[35vh] text-center">
              The Best Streaming Experience
            </h1>
            <p className="w-[90%] text-center mt-3 text-gray60 font-manrope text-[0.95rem] max-tablet:hidden">
              StreamVibe is the best streaming experience for watching your
              favorite movies and shows on demand, anytime, anywhere. With
              StreamVibe, you can enjoy a wide variety of content, including the
              latest blockbusters, classic movies, popular TV shows, and more.
              You can also create your own watchlists, so you can easily find
              the content you want to watch.
            </p>
            <p className="w-[90%] text-center mt-3 text-gray60 font-manrope text-[0.95rem] hidden max-tablet:block ">
              StreamVibe is the best streaming experience for watching your
              favorite movies and shows on demand, anytime, anywhere.
            </p>
            <button className="flex flex-row items-center mt-7  bg-red45 p-3 rounded-lg gap-3">
              <img src={playIcon} alt="" />
              <p className="font-manrope text-white text-sm">
                Start watching now
              </p>
            </button>
          </div>
        </div>
      </section>

      <Categories></Categories>
      <ScreensShowcase/>
      <FAQSection/>
      <PlanShowcaseSection/>
    </Fragment>
  );
};

export default HomePage;
