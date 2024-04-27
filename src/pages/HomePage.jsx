import { Fragment } from "react";
import Categories from "../sections/Categories";
// import bigIcon from '../assets/icons/big-icon.png'
import ScreensShowcase from "../sections/ScreensShowcase";
import FAQSection from "../sections/FAQSection";
import PlanShowcaseSection from "../sections/PlanShowcaseSection";
import StartFreeTrialSection from "../sections/StartFreeTrialSection";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";



const HomePage = () => {


  return (
    <Fragment>
   
      <Hero/>
      <Categories></Categories>
      <ScreensShowcase/>
      <FAQSection/>
      <PlanShowcaseSection/>
      <StartFreeTrialSection/>
      <Footer/>
    </Fragment>
  );
};

export default HomePage;
