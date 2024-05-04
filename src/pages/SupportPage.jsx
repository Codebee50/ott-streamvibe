import { Fragment } from "react";
import NavAndDrawer from "../components/NavAndDrawer";
import SupportSection from "../sections/Support/SupportSection";
import FAQSection from "../sections/FAQSection";
import StartFreeTrialSection from "../sections/StartFreeTrialSection";
import Footer from "../sections/Footer";

const SupportPage = () => {
  return (
    <Fragment>
      <NavAndDrawer page={"Support"} />
      <SupportSection />
      <FAQSection />
      <StartFreeTrialSection />
      <Footer />
    </Fragment>
  );
};

export default SupportPage;
