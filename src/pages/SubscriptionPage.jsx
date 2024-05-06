import { Fragment } from "react";
import NavAndDrawer from "../components/NavAndDrawer";
import StartFreeTrialSection from "../sections/StartFreeTrialSection";
import Footer from "../sections/Footer";
import PlanShowcaseSection from "../sections/PlanShowcaseSection";
import SubscriptionSection from "../sections/Subscription/SubscriptionSection";

const SubscriptionPage = () => {
  return (
    <Fragment>
      <NavAndDrawer page={"Subscriptions"} />
      <PlanShowcaseSection/>
      <SubscriptionSection/>
      <StartFreeTrialSection />
      <Footer />
    </Fragment>
  );
};

export default SubscriptionPage;
